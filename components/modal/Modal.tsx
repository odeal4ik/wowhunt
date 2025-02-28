import { useEffect } from 'react';

import { Icon } from '@/core-components/icon/icon';

import Close from '@/images/system-icons/close.svg';

import styles from './Modal.module.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
}

export const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title">
                <div className={styles.modalHeader}>
                    <h2 id="modal-title" className={styles.modalTitle}>
                        {title}
                    </h2>
                    <button
                        className={styles.closeButton}
                        onClick={onClose}
                        aria-label="Close modal">
                        <Icon svg={Close} />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};
