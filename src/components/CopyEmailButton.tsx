import {useEffect, useState} from 'react';
import Icon from './Icon.tsx';

interface CopyEmailButtonProps {
    email: string;
}

const RESET_AFTER_MS = 2000;

const CopyEmailButton = ({email}: CopyEmailButtonProps) => {
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        if (!isCopied) return;

        const timer = window.setTimeout(() => setIsCopied(false), RESET_AFTER_MS);
        return () => window.clearTimeout(timer);
    }, [isCopied]);

    const copy = async () => {
        await navigator.clipboard.writeText(email);
        setIsCopied(true);
    };

    return (
        <button type="button" className="button" onClick={copy}>
            <Icon name={isCopied ? 'check' : 'copy'}/>
            <span aria-live="polite">{isCopied ? 'Copied' : 'Copy address'}</span>
        </button>
    );
};

export default CopyEmailButton;
