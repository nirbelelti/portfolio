import {useEffect} from 'react';

export const useOpenDetailsWhilePrinting = () => {
    useEffect(() => {
        let openedForPrint: HTMLDetailsElement[] = [];

        const openAll = () => {
            openedForPrint = Array.from(document.querySelectorAll<HTMLDetailsElement>('details:not([open])'));
            openedForPrint.forEach((details) => (details.open = true));
        };

        const restore = () => {
            openedForPrint.forEach((details) => (details.open = false));
            openedForPrint = [];
        };

        window.addEventListener('beforeprint', openAll);
        window.addEventListener('afterprint', restore);

        return () => {
            window.removeEventListener('beforeprint', openAll);
            window.removeEventListener('afterprint', restore);
        };
    }, []);
};
