import {useEffect} from 'react';

export const useRevealOnScroll = () => {
    useEffect(() => {
        document.documentElement.classList.add('js');

        const observer = new IntersectionObserver(
            (entries) => entries
                .filter((entry) => entry.isIntersecting)
                .forEach((entry) => {
                    entry.target.classList.add('is-revealed');
                    observer.unobserve(entry.target);
                }),
            {rootMargin: '0px 0px -8% 0px'},
        );

        document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);
};
