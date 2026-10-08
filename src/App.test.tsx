import {describe, expect, it} from 'vitest';
import {renderToString} from 'react-dom/server';
import App from './App.tsx';
import {projects} from './content/projects.ts';
import {modelViews} from './content/modeling.ts';
import {designProjects} from './content/interfaces.ts';

const html = renderToString(<App/>);
const page = new DOMParser().parseFromString(html, 'text/html');

describe('prerendered page', () => {
    it('has exactly one h1 and no skipped heading levels', () => {
        const levels = Array.from(page.querySelectorAll('h1, h2, h3, h4')).map((heading) => Number(heading.tagName[1]));

        expect(levels.filter((level) => level === 1)).toHaveLength(1);
        levels.reduce((previous, level) => {
            expect(level).toBeLessThanOrEqual(previous + 1);
            return level;
        }, 1);
    });

    it('resolves every in-page link to an element on the page', () => {
        const targets = Array.from(page.querySelectorAll('a[href^="#"]'))
            .map((link) => link.getAttribute('href')!.slice(1));
        const missing = targets.filter((id) => !page.getElementById(id));

        expect(targets.length).toBeGreaterThan(0);
        expect(missing).toEqual([]);
    });

    it('gives every image alternative text', () => {
        const imagesWithoutAlt = Array.from(page.querySelectorAll('img')).filter((image) => !image.hasAttribute('alt'));

        expect(imagesWithoutAlt).toEqual([]);
    });

    it('opens external links safely', () => {
        const unsafe = Array.from(page.querySelectorAll('a[target="_blank"]'))
            .filter((link) => !link.getAttribute('rel')?.includes('noreferrer'));

        expect(unsafe).toEqual([]);
    });
});

describe('content', () => {
    it('uses unique project ids', () => {
        const ids = projects.map((project) => project.id);

        expect(new Set(ids).size).toBe(ids.length);
    });

    it('features exactly three projects', () => {
        expect(projects.filter((project) => project.featured)).toHaveLength(3);
    });

    it('traces one use case through the last three model views', () => {
        expect(modelViews.map((view) => Boolean(view.highlight))).toEqual([false, false, false, true, true, true]);
    });

    it('gives every design project something to show', () => {
        const empty = designProjects.filter((project) => !project.views?.length && !project.pictures?.length);

        expect(empty).toEqual([]);
    });
});
