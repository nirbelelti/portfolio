import {useEffect, useState} from 'react';

const HIDE_AFTER = 160;
const DIRECTION_TOLERANCE = 6;

export const useScrollState = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isScrollingDown, setIsScrollingDown] = useState(false);

    useEffect(() => {
        let lastY = window.scrollY;
        let frame = 0;

        const update = () => {
            frame = 0;
            const y = window.scrollY;
            setIsScrolled(y > 8);

            const delta = y - lastY;
            if (Math.abs(delta) < DIRECTION_TOLERANCE) return;

            setIsScrollingDown(delta > 0 && y > HIDE_AFTER);
            lastY = y;
        };

        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };

        update();
        window.addEventListener('scroll', onScroll, {passive: true});

        return () => {
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(frame);
        };
    }, []);

    return {isScrolled, isScrollingDown};
};
