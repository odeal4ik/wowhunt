'use client';

import React, { useState, useEffect } from 'react';
import styles from './modal-change-password.module.css';
import Image from 'next/image';

interface PasswordCriteria {
    lowercase: boolean;
    uppercase: boolean;
    digit: boolean;
    length: boolean;
}

interface ModalChangePasswordProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ModalChangePassword: React.FC<ModalChangePasswordProps> = ({
    isOpen,
    onClose,
}) => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [criteria, setCriteria] = useState<PasswordCriteria>({
        lowercase: false,
        uppercase: false,
        digit: false,
        length: false,
    });

    const criteriaList = [
        { key: 'lowercase', label: 'one lowercase character' },
        { key: 'uppercase', label: 'one uppercase character' },
        { key: 'digit', label: 'one digit' },
        { key: 'length', label: '8 characters' },
    ] as const;

    useEffect(() => {
        if (!isOpen) return;

        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };

        document.addEventListener('keydown', handleEscKey);

        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isOpen]);

    const resetState = () => {
        setPassword('');
        setShowPassword(false);
        setIsSubmitted(false);
        setCriteria({
            lowercase: false,
            uppercase: false,
            digit: false,
            length: false,
        });
    };

    const handleClose = () => {
        resetState();
        onClose();
    };

    const checkPasswordCriteria = (value: string) => {
        setCriteria({
            lowercase: value !== value.toUpperCase(),
            uppercase: value !== value.toLowerCase(),
            digit: /\d/.test(value),
            length: value.length >= 8,
        });
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);
        checkPasswordCriteria(value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);

        if (!password) {
            return;
        }

        if (Object.values(criteria).every(Boolean)) {
            // Здесь будет логика изменения пароля
            console.log('Password changed successfully');
            resetState();
            onClose();
        }
    };

    const getStatusIcon = (criterionMet: boolean) => {
        if (isSubmitted) {
            return criterionMet ? 'success' : 'error';
        }
        if (!password) {
            return 'attention';
        }
        return criterionMet ? 'success' : 'attention';
    };

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={handleClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={handleClose}>
                    <Image
                        src="system-icons/close.svg"
                        alt="Close"
                        width={12}
                        height={12}
                    />
                </button>

                <div className={styles.modalContent}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src="/images/new-password.webp"
                            alt="Key"
                            width={449}
                            height={172}
                        />
                    </div>

                    <div className={styles.formWrapper}>
                        <h2 className={styles.title}>Create new password</h2>
                        <p className={styles.subtitle}>
                            A strong password helps you keep your personal info
                            safe
                        </p>

                        <form onSubmit={handleSubmit}>
                            <div className={styles.inputWrapper}>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder="New password"
                                    className={styles.input}
                                />
                                <button
                                    type="button"
                                    className={styles.eyeButton}
                                    onClick={togglePasswordVisibility}>
                                    <Image
                                        src={`/system-icons/password-${showPassword ? 'show' : 'hide'}.svg`}
                                        alt="Toggle password visibility"
                                        width={24}
                                        height={24}
                                        className={styles.eyeIcon}
                                    />
                                </button>
                            </div>

                            <div className={styles.criteriaList}>
                                <h3 className={styles.criteriaTitle}>
                                    New password should contain:
                                </h3>
                                {criteriaList.map(({ key, label }) => (
                                    <div
                                        key={key}
                                        className={styles.criteriaItem}>
                                        <Image
                                            src={`/system-icons/${getStatusIcon(criteria[key])}.svg`}
                                            alt="Status"
                                            width={20}
                                            height={20}
                                            className={styles.criteriaIcon}
                                        />
                                        {label}
                                    </div>
                                ))}
                            </div>

                            <button
                                type="submit"
                                className={styles.submitButton}>
                                Confirm
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
