import {useEffect, useState} from 'react';

export const useActiveSection = (sectionIds: string[]) => {
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries
                .filter((entry) => entry.isIntersecting)
                .forEach((entry) => setActiveId(entry.target.id)),
            {rootMargin: '-40% 0px -55% 0px'},
        );

        sectionIds
            .map((id) => document.getElementById(id))
            .forEach((element) => element && observer.observe(element));

        return () => observer.disconnect();
    }, [sectionIds]);

    return activeId;
};
