'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import { Icon } from '@/core-components/icon/icon';

import error from '@/images/notifications/error.min.svg';
import success from '@/images/notifications/success-green.min.svg';
import attention from '@/images/notifications/warning.min.svg';
import Close from '@/images/system-icons/close.svg';
import PasswordHide from '@/images/system-icons/password-hide.svg';
import PasswordShow from '@/images/system-icons/password-show.svg';

import { useEscapeClose } from '../../hooks/useEscapeClose';
import styles from './modal-change-password.module.css';

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

    useEscapeClose(isOpen, onClose);

    const resetState = () => {
        setPassword('');
        setShowPassword(false);
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

        if (!password) {
            return;
        }

        if (Object.values(criteria).every(Boolean)) {
            resetState();
            onClose();
        }
    };

    const getStatusIcon = (isValid: boolean) => {
        if (isValid) {
            return success;
        } else if (!isValid) {
            return error;
        }
        return attention;
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        togglePasswordVisibility();
    };

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={handleClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={handleClose}>
                    <Icon svg={Close} label="Close" />
                </button>

                <div className={styles.modalContent}>
                    <div className={styles.imgWrapper}>
                        <Image
                            src="/images/password.webp"
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
                                    autoComplete="off"
                                    className={styles.input}
                                />
                                <button
                                    type="button"
                                    className={styles.eyeButton}
                                    onMouseDown={handleMouseDown}>
                                    <Icon
                                        svg={
                                            showPassword
                                                ? PasswordShow
                                                : PasswordHide
                                        }
                                        label={showPassword ? 'Hide' : 'Show'}
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
                                        <Icon
                                            svg={getStatusIcon(criteria[key])}
                                            label={getStatusIcon(criteria[key])}
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
