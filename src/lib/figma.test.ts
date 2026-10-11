import {describe, expect, it} from 'vitest';
import {figmaEmbedUrl} from './figma.ts';

describe('figmaEmbedUrl', () => {
    it('wraps a prototype link in an encoded Figma embed URL', () => {
        const prototype = 'https://www.figma.com/proto/abc/File?node-id=1-2&page-id=0%3A1';

        expect(figmaEmbedUrl(prototype)).toBe(
            'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fabc%2FFile%3Fnode-id%3D1-2%26page-id%3D0%253A1',
        );
    });
});
