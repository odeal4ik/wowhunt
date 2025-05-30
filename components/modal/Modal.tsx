import { useEffect } from 'react';

import { Icon } from '@/core-components/icon/icon';

import Close from '@/images/system-icons/close.svg';

import { useEscapeClose } from '@/hooks/useEscapeClose';

import styles from './modal.module.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
}

export const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
    useEscapeClose(isOpen, onClose);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div
                className={styles.content}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title">
                <div className={styles.header}>
                    <h2 id="modal-title" className={styles.title}>
                        {title}
                    </h2>
                    <button
                        className={styles.close}
                        onClick={onClose}
                        aria-label="Close modal">
                        <Icon svg={Close} label="Close" />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};
