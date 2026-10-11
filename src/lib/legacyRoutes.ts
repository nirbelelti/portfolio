const sectionsByLegacyRoute: Record<string, string> = {
    '/': 'top',
    '/technologies': 'capabilities',
    '/projects': 'work',
    '/modeling': 'modeling',
    '/ai': 'ai',
    '/employment': 'experience',
    '/education': 'education',
};

export const sectionForLegacyHash = (hash: string): string | null => {
    if (!hash.startsWith('#/')) return null;

    return sectionsByLegacyRoute[hash.slice(1)] ?? 'top';
};
