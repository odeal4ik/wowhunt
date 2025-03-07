'use client';

import { useEffect, useState } from 'react';

import { Select } from '@/core-components/select/select';
import { Icon } from '@/core-components/icon/icon';

import Close from '@/images/system-icons/close.svg';

import styles from './model-work-with-us.module.css';

type Props = {
    children: React.ReactNode;
};

export function ModelWorkWithUs({ children }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div onClick={() => setIsOpen(true)}>{children}</div>
            {isOpen && <WorkWithUsPopup onClose={() => setIsOpen(false)} />}
        </>
    );
}

type PopupProps = {
    onClose: () => void;
};

function WorkWithUsPopup({ onClose }: PopupProps) {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <div
            className={styles.overlay}
            onClick={(e: React.MouseEvent) =>
                e.target === e.currentTarget && onClose()
            }>
            <div className={styles.popup}>
                <button className={styles.closeButton} onClick={onClose}>
                    <Icon svg={Close} label="Close" />
                </button>

                <h2 className={styles.title}>
                    We are currently hiring the boosters for orders
                </h2>

                <form
                    className={styles.form}
                    onSubmit={(e: React.FormEvent) => e.preventDefault()}>
                    <div>
                        <label htmlFor="name" className={styles.formLabel}>
                            Name <span className={styles.required}>*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your Name"
                            className={styles.input}
                            required
                        />

                        <label htmlFor="text" className={styles.formLabel}>
                            Write your boost service type{' '}
                            <span className={styles.required}>*</span>
                        </label>
                        <textarea
                            placeholder="Few words what you can do..."
                            className={`${styles.input} ${styles.textarea}`}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="name" className={styles.formLabel}>
                            Discord <span className={styles.required}>*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="DiscordName#1111"
                            className={styles.input}
                            required
                        />
                        <label htmlFor="name" className={styles.formLabel}>
                            Choose a game{' '}
                            <span className={styles.required}>*</span>
                        </label>

                        <Select
                            title="Choose your game"
                            options={['wow', 'diablo', 'other']}
                            titleStyle={styles.titleStyle}
                            optionsStyle={styles.optionsStyle}
                        />
                        <button type="submit" className={styles.submitButton}>
                            Send Request
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
