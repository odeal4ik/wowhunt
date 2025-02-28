import { useState } from 'react';

import { Icon } from '@/core-components/icon/icon';

import Telegram from '@/images/media/telegram.svg';
import At from '@/images/system-icons/at.svg';
import Key from '@/images/system-icons/key-password.svg';
import Mail from '@/images/icons/mail.svg';
import Notification from '@/images/system-icons/notification.svg';
import Settings from '@/images/system-icons/settings.svg';
import Support from '@/images/system-icons/support.svg';

import { useEscapeClose } from '../../hooks/useEscapeClose';
import { ChangeEmailModal } from '../modal-change-email/modal-change-email';
import { ChangePasswordModal } from '../modal-change-password-profile/modal-change-password-profile';
import { NotificationsModal } from '../modal-notifications/modal-notifications';
import { SettingsModal } from '../modal-settings/modal-settings';
import styles from './profile-buttons-block.module.css';

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
                    <Icon svg={Mail} area-label="Mail" />
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
                        <Icon svg={Notification} area-label="Notification" />
                        <p className={styles.notificationText}>
                            Push notifications
                        </p>
                    </div>
                </div>

                <button className={styles.notificationButton}>
                    <Icon svg={Telegram} area-label="Facebook" />
                    Telegram
                </button>
            </div>

            <div className={styles.notificationRightContainer}>
                <div className={styles.controls}>
                    <button
                        className={styles.notificationButton}
                        onClick={() => setIsChangeEmailOpen(true)}>
                        <Icon svg={At} area-label="Email" />
                        Change eMail
                    </button>
                    <button
                        className={styles.notificationButton}
                        onClick={() => setIsChangePasswordOpen(true)}>
                        <Icon svg={Key} area-label="Key" />
                        Change password
                    </button>
                    <button className={styles.notificationButton}>
                        <Icon svg={Support} area-label="Support" />
                        Write to admin
                    </button>
                </div>

                <div className={styles.mobileControls}>
                    <button
                        className={styles.mobileButton}
                        onClick={() => setIsSettingsOpen(true)}>
                        <Icon svg={Settings} area-label="Settings" />
                        Settings
                    </button>
                    <button
                        className={styles.mobileButton}
                        onClick={() => setIsNotificationsOpen(true)}>
                        <Icon svg={Notification} area-label="Notification" />
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
