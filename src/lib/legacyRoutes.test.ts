import {describe, expect, it} from 'vitest';
import {sectionForLegacyHash} from './legacyRoutes.ts';

describe('sectionForLegacyHash', () => {
    it.each([
        ['#/', 'top'],
        ['#/technologies', 'capabilities'],
        ['#/projects', 'work'],
        ['#/modeling', 'modeling'],
        ['#/ai', 'ai'],
        ['#/employment', 'experience'],
        ['#/education', 'education'],
    ])('maps the old route %s to the #%s section', (hash, section) => {
        expect(sectionForLegacyHash(hash)).toBe(section);
    });

    it('sends unknown or retired routes to the top of the page', () => {
        expect(sectionForLegacyHash('#/ux')).toBe('top');
    });

    it('ignores regular section anchors', () => {
        expect(sectionForLegacyHash('#work')).toBeNull();
        expect(sectionForLegacyHash('')).toBeNull();
    });
});
