import {MouseEvent, ReactNode, useRef} from 'react';
import Icon from './Icon.tsx';
import '../styles/ImageDialog.css';

interface ImageDialogProps {
    title: string;
    src: string;
    width: number;
    height: number;
    alt: string;
    triggerClassName: string;
    triggerLabel?: string;
    children: ReactNode;
}

const ImageDialog = ({title, src, width, height, alt, triggerClassName, triggerLabel, children}: ImageDialogProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const open = () => dialogRef.current?.showModal();
    const close = () => dialogRef.current?.close();
    const closeOnBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
        if (event.target === event.currentTarget) close();
    };

    return (
        <>
            <button
                type="button"
                className={triggerClassName}
                onClick={open}
                aria-haspopup="dialog"
                aria-label={triggerLabel}
            >
                {children}
            </button>
            <dialog ref={dialogRef} className="image-dialog" aria-label={title} onClick={closeOnBackdropClick}>
                <div className="image-dialog__panel">
                    <div className="image-dialog__bar">
                        <p className="label">{title}</p>
                        <button type="button" className="image-dialog__close" onClick={close} aria-label="Close">
                            <Icon name="close"/>
                        </button>
                    </div>
                    <div className="image-dialog__body">
                        <img src={src} width={width} height={height} alt={alt} loading="lazy" decoding="async"/>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default ImageDialog;
