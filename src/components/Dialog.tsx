import {forwardRef, MouseEvent, ReactNode} from 'react';
import Icon from './Icon.tsx';
import '../styles/Dialog.css';

interface DialogProps {
    title: string;
    className?: string;
    onClose?: () => void;
    children: ReactNode;
}

const Dialog = forwardRef<HTMLDialogElement, DialogProps>(({title, className = '', onClose, children}, ref) => {
    const close = (event: MouseEvent<HTMLElement>) => event.currentTarget.closest('dialog')?.close();
    const closeOnBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
    };

    return (
        <dialog ref={ref} className={`dialog ${className}`} aria-label={title} onClick={closeOnBackdropClick} onClose={onClose}>
            <div className="dialog__panel">
                <div className="dialog__bar">
                    <p className="label">{title}</p>
                    <button type="button" className="dialog__close" onClick={close} aria-label="Close">
                        <Icon name="close"/>
                    </button>
                </div>
                <div className="dialog__body">{children}</div>
            </div>
        </dialog>
    );
});

Dialog.displayName = 'Dialog';

export default Dialog;
