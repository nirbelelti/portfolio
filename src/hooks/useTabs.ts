import {KeyboardEvent, useRef, useState} from 'react';

const keyboardSteps: Record<string, (index: number, count: number) => number> = {
    ArrowDown: (index) => index + 1,
    ArrowRight: (index) => index + 1,
    ArrowUp: (index) => index - 1,
    ArrowLeft: (index) => index - 1,
    Home: () => 0,
    End: (_, count) => count - 1,
};

export const useTabs = (count: number) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const onKeyDown = (event: KeyboardEvent) => {
        const step = keyboardSteps[event.key];
        if (!step) return;

        event.preventDefault();
        const next = (step(activeIndex, count) + count) % count;
        setActiveIndex(next);
        tabRefs.current[next]?.focus();
    };

    const tabProps = (index: number) => ({
        ref: (element: HTMLButtonElement | null) => {
            tabRefs.current[index] = element;
        },
        type: 'button' as const,
        role: 'tab',
        'aria-selected': index === activeIndex,
        tabIndex: index === activeIndex ? 0 : -1,
        onClick: () => setActiveIndex(index),
    });

    return {activeIndex, setActiveIndex, onKeyDown, tabProps};
};
