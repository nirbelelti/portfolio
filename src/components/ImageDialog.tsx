import {ReactNode, useRef} from 'react';
import {Picture} from '../content/types.ts';
import Dialog from './Dialog.tsx';

interface ImageDialogProps extends Picture {
    title: string;
    triggerClassName: string;
    triggerLabel?: string;
    children: ReactNode;
}

const ImageDialog = ({title, src, width, height, alt, triggerClassName, triggerLabel, children}: ImageDialogProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    return (
        <>
            <button
                type="button"
                className={triggerClassName}
                onClick={() => dialogRef.current?.showModal()}
                aria-haspopup="dialog"
                aria-label={triggerLabel}
            >
                {children}
            </button>
            <Dialog ref={dialogRef} title={title}>
                <img src={src} width={width} height={height} alt={alt} loading="lazy" decoding="async"/>
            </Dialog>
        </>
    );
};

export default ImageDialog;
