import {MouseEvent, useRef, useState} from 'react';
import {figmaEmbedUrl} from '../lib/figma.ts';
import Dialog from './Dialog.tsx';
import Icon from './Icon.tsx';
import '../styles/PrototypeLink.css';

interface PrototypeLinkProps {
    name: string;
    url: string;
}

const EMBED_MIN_WIDTH = '(min-width: 56em)';

const PrototypeLink = ({name, url}: PrototypeLinkProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [hasOpened, setHasOpened] = useState(false);

    const openEmbedOnWideScreens = (event: MouseEvent<HTMLAnchorElement>) => {
        if (!window.matchMedia(EMBED_MIN_WIDTH).matches) return;

        event.preventDefault();
        setHasOpened(true);
        dialogRef.current?.showModal();
    };

    return (
        <div className="prototype-link">
            <a className="button" href={url} target="_blank" rel="noreferrer" onClick={openEmbedOnWideScreens}>
                Open interactive prototype
                <Icon name="arrow-up-right"/>
            </a>
            <span className="prototype-link__note">Loads from figma.com, which sets its own cookies</span>
            <Dialog ref={dialogRef} title={`${name} — interactive prototype`} className="dialog--prototype">
                {hasOpened && (
                    <iframe
                        src={figmaEmbedUrl(url)}
                        title={`Interactive Figma prototype of ${name}`}
                        allowFullScreen
                    />
                )}
            </Dialog>
        </div>
    );
};

export default PrototypeLink;
