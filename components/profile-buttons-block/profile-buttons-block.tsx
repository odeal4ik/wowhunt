import { useState } from 'react';
import Image from 'next/image';
import styles from './profile-buttons-block.module.css';
import { useEscapeClose } from '../../hooks/useEscapeClose';

interface ProfileButtonsBlockProps {
    email: string;
}

export function ProfileButtonsBlock({ email }: ProfileButtonsBlockProps) {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [pushNotifications, setPushNotifications] = useState(true);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
    const [isChangeEmailOpen, setIsChangeEmailOpen] = useState(false);

    useEscapeClose(isSettingsOpen, () => setIsSettingsOpen(false));
    useEscapeClose(isNotificationsOpen, () => setIsNotificationsOpen(false));
    useEscapeClose(isChangePasswordOpen, () => setIsChangePasswordOpen(false));
    useEscapeClose(isChangeEmailOpen, () => setIsChangeEmailOpen(false));

    return (
        <div className={styles.notificationControls}>
            <div className={styles.notificationLeftContainer}>
                <div className={styles.notificationRow}>
                    <label className={styles.switch}>
                        <input
                            type="checkbox"
                            className={styles.notificationCheckbox}
                            checked={emailNotifications}
                            onChange={(e) =>
                                setEmailNotifications(e.target.checked)
                            }
                        />
                        <span className={styles.slider}></span>
                    </label>
                    <div className={styles.notificationItem}>
                        <Image
                            src="/system-icons/mail.svg"
                            alt="Support"
                            width={18}
                            height={18}
                        />
                        <p className={styles.notificationText}>
                            E-mail notifications
                        </p>
                    </div>
                </div>

                <div className={styles.notificationRow}>
                    <div className={styles.notificationItem}>
                        <label className={styles.switch}>
                            <input
                                type="checkbox"
                                className={styles.notificationCheckbox}
                                checked={pushNotifications}
                                onChange={(e) =>
                                    setPushNotifications(e.target.checked)
                                }
                            />
                            <span className={styles.slider}></span>
                        </label>
                        <Image
                            src="/system-icons/notification.svg"
                            alt="Support"
                            width={18}
                            height={18}
                        />
                        <p className={styles.notificationText}>
                            Push notifications
                        </p>
                    </div>
                </div>

                <button className={styles.notificationButton}>
                    <Image
                        src="/system-icons/telegram.svg"
                        alt="Telegram"
                        width={16}
                        height={16}
                    />
                    Telegram
                </button>
            </div>

            <div className={styles.notificationRightContainer}>
                <div className={styles.controls}>
                    <button
                        className={styles.notificationButton}
                        onClick={() => setIsChangeEmailOpen(true)}>
                        <Image
                            src="/system-icons/at.svg"
                            alt="Email"
                            width={18}
                            height={18}
                        />
                        Change eMail
                    </button>
                    <button
                        className={styles.notificationButton}
                        onClick={() => setIsChangePasswordOpen(true)}>
                        <Image
                            src="/system-icons/key-password.svg"
                            alt="Password"
                            width={18}
                            height={18}
                        />
                        Change password
                    </button>
                    <button className={styles.notificationButton}>
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
                                        width={14}
                                        height={14}
                                        className={styles.closeIcon}
                                    />
                                </button>
                            </div>
                            <div className={styles.modalButtons}>
                                <button
                                    className={styles.modalButton}
                                    onClick={() => setIsChangeEmailOpen(true)}>
                                    <Image
                                        src="/system-icons/at.svg"
                                        alt="Email"
                                        width={18}
                                        height={18}
                                    />
                                    Change eMail
                                </button>
                                <button
                                    className={styles.modalButton}
                                    onClick={() =>
                                        setIsChangePasswordOpen(true)
                                    }>
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
                        className={styles.settingsModal}
                        data-visible={isNotificationsOpen}
                        onClick={() => setIsNotificationsOpen(false)}>
                        <div
                            className={styles.modalContent}
                            onClick={(e) => e.stopPropagation()}>
                            <div className={styles.modalHeader}>
                                <h2 className={styles.modalTitle}>
                                    Notifications
                                </h2>
                                <button
                                    onClick={() =>
                                        setIsNotificationsOpen(false)
                                    }
                                    className={styles.closeButton}>
                                    <Image
                                        src="/system-icons/close.svg"
                                        alt="Close"
                                        width={14}
                                        height={14}
                                        className={styles.closeIcon}
                                    />
                                </button>
                            </div>
                            <div className={styles.modalButtons}>
                                <div className={styles.modalNotificationRow}>
                                    <label className={styles.switch}>
                                        <input
                                            type="checkbox"
                                            className={
                                                styles.notificationCheckbox
                                            }
                                            checked={emailNotifications}
                                            onChange={(e) =>
                                                setEmailNotifications(
                                                    e.target.checked,
                                                )
                                            }
                                        />
                                        <span className={styles.slider}></span>
                                    </label>
                                    <div className={styles.notificationItem}>
                                        <Image
                                            src="/system-icons/mail.svg"
                                            alt="Email"
                                            width={18}
                                            height={18}
                                        />
                                        <p className={styles.notificationText}>
                                            E-mail notifications
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.modalNotificationRow}>
                                    <label className={styles.switch}>
                                        <input
                                            type="checkbox"
                                            className={
                                                styles.notificationCheckbox
                                            }
                                            checked={pushNotifications}
                                            onChange={(e) =>
                                                setPushNotifications(
                                                    e.target.checked,
                                                )
                                            }
                                        />
                                        <span className={styles.slider}></span>
                                    </label>
                                    <div className={styles.notificationItem}>
                                        <Image
                                            src="/system-icons/notification.svg"
                                            alt="Push"
                                            width={18}
                                            height={18}
                                        />
                                        <p className={styles.notificationText}>
                                            Push notifications
                                        </p>
                                    </div>
                                </div>
                                <button className={styles.modalButton}>
                                    <Image
                                        src="/system-icons/telegram.svg"
                                        alt="Telegram"
                                        width={16}
                                        height={16}
                                    />
                                    Telegram
                                </button>
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
                                <h2
                                    className={`${styles.modalTitle} ${styles.changePasswordModalTitle}`}>
                                    Change password
                                </h2>
                                <button
                                    onClick={() =>
                                        setIsChangePasswordOpen(false)
                                    }
                                    className={styles.closeButton}>
                                    <Image
                                        src="/system-icons/close.svg"
                                        alt="Close"
                                        width={14}
                                        height={14}
                                    />
                                </button>
                            </div>
                            <div className={styles.modalFormPassword}>
                                <div className={styles.formGroup}>
                                    <label className={styles.passwordLabel}>
                                        Old password
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Enter old password..."
                                        className={styles.passwordInput}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.passwordLabel}>
                                        New password
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Enter new password..."
                                        className={styles.passwordInput}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.passwordLabel}>
                                        Repeat password
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Enter repeat password"
                                        className={styles.passwordInput}
                                    />
                                </div>
                                <button
                                    className={`${styles.continueButton} ${styles.continueButtonPassword}`}>
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
                                <h2 className={styles.modalTitle}>
                                    Change e-mail
                                </h2>
                                <button
                                    onClick={() => setIsChangeEmailOpen(false)}
                                    className={styles.closeButton}>
                                    <Image
                                        src="/system-icons/close.svg"
                                        alt="Close"
                                        width={14}
                                        height={14}
                                    />
                                </button>
                            </div>
                            <div className={styles.modalForm}>
                                <p className={styles.currentEmail}>
                                    Your e-mail: <span>{` ${email}`}</span>
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
        </div>
    );
}
