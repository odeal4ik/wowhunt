import { useState } from 'react';
import Image from 'next/image';
import styles from './profile-buttons-block.module.css';
import { useEscapeClose } from '../../hooks/useEscapeClose';
import { ChangeEmailModal } from '../modal-change-email/modal-change-email';
import { ChangePasswordModal } from '../modal-change-password-profile/modal-change-password-profile';
import { NotificationsModal } from '../modal-notifications/modal-notifications';
import { SettingsModal } from '../modal-settings/modal-settings';

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
                        src="/system-icons/telegram-gold.svg"
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
                    <SettingsModal
                        isOpen={isSettingsOpen}
                        onClose={() => setIsSettingsOpen(false)}
                        onEmailChange={() => {
                            setIsSettingsOpen(false);
                            setIsChangeEmailOpen(true);
                        }}
                        onPasswordChange={() => {
                            setIsSettingsOpen(false);
                            setIsChangePasswordOpen(true);
                        }}
                    />
                )}

                {isNotificationsOpen && (
                    <NotificationsModal
                        isOpen={isNotificationsOpen}
                        onClose={() => setIsNotificationsOpen(false)}
                        emailNotifications={emailNotifications}
                        onEmailNotificationsChange={setEmailNotifications}
                        pushNotifications={pushNotifications}
                        onPushNotificationsChange={setPushNotifications}
                    />
                )}

                {isChangePasswordOpen && (
                    <ChangePasswordModal
                        isOpen={isChangePasswordOpen}
                        onClose={() => setIsChangePasswordOpen(false)}
                    />
                )}

                {isChangeEmailOpen && (
                    <ChangeEmailModal
                        isOpen={isChangeEmailOpen}
                        onClose={() => setIsChangeEmailOpen(false)}
                        currentEmail={email}
                    />
                )}
            </div>
        </div>
    );
}
