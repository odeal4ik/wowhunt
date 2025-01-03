'use client';

import React, { useState, useEffect } from 'react';
import styles from './booster-profile-info.module.css';
import Image from 'next/image';
import { BoosterProfileNotification } from '../booster-profile-notification/booster-profile-notification';

interface BoosterProfileInfoProps {
    id: string;
    email: string;
}

export function BoosterProfileInfo({ id, email }: BoosterProfileInfoProps) {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
    const [isChangeEmailOpen, setIsChangeEmailOpen] = useState(false);

    useEffect(() => {
        if (!isSettingsOpen && !isNotificationsOpen && !isChangePasswordOpen && !isChangeEmailOpen) return;

        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsSettingsOpen(false);
                setIsNotificationsOpen(false);
                setIsChangePasswordOpen(false);
                setIsChangeEmailOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscKey);
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isSettingsOpen, isNotificationsOpen, isChangePasswordOpen, isChangeEmailOpen]);

    return (
        <div className={styles.profileSection}>
            <div className={styles.profileHeader}>
                <div className={styles.avatarContainer}>
                    <Image
                        src="/images/avatar-booster-profile.webp"
                        alt="Profile"
                        width={90}
                        height={90}
                        className={styles.avatar}
                    />
                    <div className={styles.profileInfo}>
                        <div className={styles.idContainer}>
                            <p className={styles.idBooster}>ID: {id}</p>
                            <p className={styles.emailBooster}>{email}</p>
                        </div>
                    </div>
                </div>

                <button className={styles.messageButton}>
                    <Image
                        src="/system-icons/message.svg"
                        alt="Copy"
                        width={18}
                        height={18}
                        className={styles.messageIcon}
                    />
                </button>
            </div>

            <div className={styles.controls}>
                <button className={styles.controlButton} onClick={() => setIsChangeEmailOpen(true)}>
                    <Image
                        src="/system-icons/at.svg"
                        alt="Email"
                        width={18}
                        height={18}
                    />
                    Change eMail
                </button>
                <button className={styles.controlButton} onClick={() => setIsChangePasswordOpen(true)}>
                    <Image
                        src="/system-icons/key-password.svg"
                        alt="Password"
                        width={18}
                        height={18}
                    />
                    Change password
                </button>
                <button className={styles.controlButton}>
                    <Image
                        src="/system-icons/operator-support.svg"
                        alt="Support"
                        width={18}
                        height={18}
                    />
                    Write to admin
                </button>
            </div>

            <div className={styles.mobileControls}>
                <button
                    className={styles.mobileButton}
                    onClick={() => setIsSettingsOpen(true)}>
                    <Image
                        src="/system-icons/settings.svg"
                        alt="Settings"
                        width={18}
                        height={18}
                    />
                    Settings
                </button>
                <button
                    className={styles.mobileButton}
                    onClick={() => setIsNotificationsOpen(true)}>
                    <Image
                        src="/system-icons/notification.svg"
                        alt="Notifications"
                        width={18}
                        height={18}
                    />
                    Notifications
                </button>
            </div>

            {isSettingsOpen && (
                <div
                    className={styles.settingsModal}
                    data-visible={isSettingsOpen}
                    onClick={() => setIsSettingsOpen(false)}>
                    <div
                        className={styles.modalContent}
                        onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h2 className={styles.modalTitle}>Settings</h2>
                            <button
                                onClick={() => setIsSettingsOpen(false)}
                                className={styles.closeButton}>
                                <Image
                                    src="/system-icons/close.svg"
                                    alt="Close"
                                    width={24}
                                    height={24}
                                    className={styles.closeIcon}
                                />
                            </button>
                        </div>
                        <div className={styles.modalButtons}>
                            <button className={styles.modalButton} onClick={() => setIsChangeEmailOpen(true)}>
                                <Image
                                    src="/system-icons/at.svg"
                                    alt="Email"
                                    width={18}
                                    height={18}
                                />
                                Change eMail
                            </button>
                            <button className={styles.modalButton} onClick={() => setIsChangePasswordOpen(true)}>
                                <Image
                                    src="/system-icons/key-password.svg"
                                    alt="Password"
                                    width={18}
                                    height={18}
                                />
                                Change password
                            </button>
                            <button className={styles.modalButton}>
                                <Image
                                    src="/system-icons/operator-support.svg"
                                    alt="Support"
                                    width={18}
                                    height={18}
                                />
                                Write to admin
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isNotificationsOpen && (
                <div
                    className={styles.notificationsModal}
                    data-visible={isNotificationsOpen}
                    onClick={() => setIsNotificationsOpen(false)}>
                    <div
                        className={styles.modalContent}
                        onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h2 className={styles.modalTitle}>Connect notifications</h2>
                            <button
                                onClick={() => setIsNotificationsOpen(false)}
                                className={styles.closeButton}>
                                <Image
                                    src="/system-icons/close.svg"
                                    alt="Close"
                                    width={24}
                                    height={24}
                                />
                            </button>
                        </div>
                        <div className={styles.notificationsContent}>
                            <BoosterProfileNotification />
                        </div>
                    </div>
                </div>
            )}

            {isChangePasswordOpen && (
                <div
                    className={styles.settingsModal}
                    data-visible={isChangePasswordOpen}
                    onClick={() => setIsChangePasswordOpen(false)}>
                    <div
                        className={`${styles.modalContent} ${styles.changePasswordModal}`}
                        onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h2 className={styles.modalTitle}>Change password</h2>
                            <button
                                onClick={() => setIsChangePasswordOpen(false)}
                                className={styles.closeButton}>
                                <Image
                                    src="/system-icons/close.svg"
                                    alt="Close"
                                    width={24}
                                    height={24}
                                />
                            </button>
                        </div>
                        <div className={styles.modalForm}>
                            <div className={styles.formGroup}>
                                <label>Old password</label>
                                <input
                                    type="password"
                                    placeholder="Enter old password..."
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>New password</label>
                                <input
                                    type="password"
                                    placeholder="Enter new password..."
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Repeat password</label>
                                <input
                                    type="password"
                                    placeholder="Enter repeat password"
                                    className={styles.input}
                                />
                            </div>
                            <button className={styles.continueButton}>
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isChangeEmailOpen && (
                <div
                    className={styles.settingsModal}
                    data-visible={isChangeEmailOpen}
                    onClick={() => setIsChangeEmailOpen(false)}>
                    <div
                        className={`${styles.modalContent} ${styles.changeEmailModal}`}
                        onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h2 className={styles.modalTitle}>Change e-mail</h2>
                            <button
                                onClick={() => setIsChangeEmailOpen(false)}
                                className={styles.closeButton}>
                                <Image
                                    src="/system-icons/close.svg"
                                    alt="Close"
                                    width={24}
                                    height={24}
                                />
                            </button>
                        </div>
                        <div className={styles.modalForm}>
                            <p className={styles.currentEmail}>
                                Your e-mail: <span><b>{email}</b></span>
                            </p>
                            <div className={styles.formGroup}>
                                <label>New E-mail</label>
                                <input
                                    type="email"
                                    placeholder="Enter new E-mail..."
                                    className={styles.input}
                                />
                            </div>
                            <button className={styles.continueButton}>
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
