import {useEffect} from 'react';
import {sectionForLegacyHash} from '../lib/legacyRoutes.ts';

export const useLegacyHashRedirect = () => {
    useEffect(() => {
        const sectionId = sectionForLegacyHash(window.location.hash);
        if (!sectionId) return;

        const {pathname, search} = window.location;
        window.history.replaceState(null, '', `${pathname}${search}#${sectionId}`);
        document.getElementById(sectionId)?.scrollIntoView();
    }, []);
};
