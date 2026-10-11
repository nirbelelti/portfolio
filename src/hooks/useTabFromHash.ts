import {useEffect} from 'react';

export const useTabFromHash = (panelIds: string[], selectTab: (index: number) => void) => {
    useEffect(() => {
        const selectFromHash = () => {
            const index = panelIds.indexOf(window.location.hash.slice(1));
            if (index === -1) return;

            selectTab(index);
            requestAnimationFrame(() => document.querySelector(`[aria-controls="${panelIds[index]}"]`)?.scrollIntoView());
        };

        selectFromHash();
        window.addEventListener('hashchange', selectFromHash);

        return () => window.removeEventListener('hashchange', selectFromHash);
    }, [panelIds, selectTab]);
};
