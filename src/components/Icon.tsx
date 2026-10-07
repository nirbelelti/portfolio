const strokePaths = {
    'arrow-right': 'M5 12h14M13 6l6 6-6 6',
    'arrow-up-right': 'M7 17 17 7M8 7h9v9',
    mail: 'M3 6.5h18v11H3zM3.5 7l8.5 6 8.5-6',
    copy: 'M9 9h11v11H9zM5 15H4V4h11v1',
    check: 'm5 12.5 4.5 4.5L19 7.5',
    close: 'M6 6l12 12M18 6 6 18',
    expand: 'M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7',
    menu: 'M4 8h16M4 16h16',
    printer: 'M7 9V4h10v5M7 17H4v-8h16v8h-3M7 14h10v6H7z',
    chevron: 'm6 9 6 6 6-6',
} as const;

const filledPaths = {
    github: 'M12 2.2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2.2Z',
    linkedin: 'M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3.2 9h3.56v11.5H3.2V9Zm5.8 0h3.4v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.33h-3.55v-5.61c0-1.34-.03-3.06-1.86-3.06-1.87 0-2.15 1.46-2.15 2.96v5.71H9V9Z',
} as const;

export type IconName = keyof typeof strokePaths | keyof typeof filledPaths;

interface IconProps {
    name: IconName;
}

const Icon = ({name}: IconProps) => {
    const isFilled = name in filledPaths;
    const path = isFilled
        ? filledPaths[name as keyof typeof filledPaths]
        : strokePaths[name as keyof typeof strokePaths];

    return (
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
            fill={isFilled ? 'currentColor' : 'none'}
            stroke={isFilled ? 'none' : 'currentColor'}
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d={path}/>
        </svg>
    );
};

export default Icon;
