import { useQueryClient } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import { Icon } from '@/core-components/icon/icon';

import Mail from '@/images/icons/mail.svg';
import Telegram from '@/images/media/telegram.svg';
import At from '@/images/system-icons/at.svg';
import Key from '@/images/system-icons/key-password.svg';
import Notification from '@/images/system-icons/notification.svg';
import Settings from '@/images/system-icons/settings.svg';
import Support from '@/images/system-icons/support.svg';

import { successEmailNotificationMessage } from '@/contants/user/notifications';
import { useGlobalModal } from '@/hooks/useGlobalModal';
import { User, useGetUser } from '@/queries/auth/getUser';
import { UpdateUserInput, useUpdateUser } from '@/queries/auth/updateUser';

import { ChangeEmailModal } from '../modal-change-email';
import { ChangePasswordModal } from '../modal-change-password-profile';
import { NotificationsModal } from '../modal-notifications/modal-notifications';
import { SettingsModal } from '../modal-settings/modal-settings';
import { ToastNotification } from '../toast-notification/toast-notification';
import styles from './profile-buttons-block.module.css';

export function ProfileButtonsBlock() {
    const { data, isSuccess } = useGetUser();

    const [emailNotifications, setEmailNotifications] = useState(true);
    const [pushNotifications, setPushNotifications] = useState(true);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

    const onOpenChangeEmailModal = () =>
        open(<ChangeEmailModal email={email} onClose={close} />);
    const onOpenChangePasswordModal = () =>
        open(<ChangePasswordModal onClose={close} />);

    const { mutate, isPending } = useUpdateUser();
    const queryClient = useQueryClient();

    const onNotificationChange = useCallback(
        async (input: UpdateUserInput) => {
            return mutate(input, {
                onSuccess: () => {
                    // optimistic UI
                    queryClient.setQueryData(['user'], (oldUserData: User) => ({
                        ...oldUserData,
                        ...input,
                    }));
                    toast(
                        <ToastNotification
                            {...successEmailNotificationMessage}
                        />,
                    );
                },
            });
        },
        [mutate, queryClient],
    );

    const { open, close } = useGlobalModal();

    if (!isSuccess) {
        return null;
    }

    const { email, email_notifу, push_notifу } = data;

    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <div className={styles.item}>
                    <label className={styles.switch}>
                        <input
                            type="checkbox"
                            className={styles.checkbox}
                            checked={Boolean(email_notifу)}
                            disabled={isPending}
                            onChange={() =>
                                onNotificationChange({
                                    email_notifу: Boolean(!email_notifу),
                                    push_notifу: Boolean(push_notifу),
                                })
                            }
                        />
                        <span className={styles.slider}></span>
                    </label>

                    <div className={styles.content}>
                        <Icon svg={Mail} label="Mail" />
                        <p className={styles.text}>E-mail notifications</p>
                    </div>
                </div>

                <div className={styles.item}>
                    <label className={styles.switch}>
                        <input
                            type="checkbox"
                            className={styles.checkbox}
                            disabled={isPending}
                            checked={Boolean(push_notifу)}
                            onChange={() =>
                                onNotificationChange({
                                    email_notifу: Boolean(email_notifу),
                                    push_notifу: Boolean(!push_notifу),
                                })
                            }
                        />
                        <span className={styles.slider}></span>
                    </label>

                    <div className={styles.content}>
                        <Icon svg={Notification} label="Notification" />
                        <p className={styles.text}>Push notifications</p>
                    </div>
                </div>

                <button className={styles.button}>
                    <Icon svg={Telegram} label="Facebook" />
                    Telegram
                </button>
            </div>

            <div className={styles.right}>
                <div className={styles.controls}>
                    <button
                        className={styles.button}
                        onClick={onOpenChangeEmailModal}>
                        <Icon svg={At} label="Email" />
                        Change eMail
                    </button>

                    <button
                        className={styles.button}
                        onClick={onOpenChangePasswordModal}>
                        <Icon svg={Key} label="Key" />
                        Change password
                    </button>

                    <button className={styles.button}>
                        <Icon svg={Support} label="Support" />
                        Write to admin
                    </button>
                </div>

                <div className={styles.mobileControls}>
                    <button
                        className={styles.mobileButton}
                        onClick={() => setIsSettingsOpen(true)}>
                        <Icon svg={Settings} label="Settings" />
                        Settings
                    </button>
                    <button
                        className={styles.mobileButton}
                        onClick={() => setIsNotificationsOpen(true)}>
                        <Icon svg={Notification} label="Notification" />
                        Notifications
                    </button>
                </div>

                {isSettingsOpen && (
                    <SettingsModal
                        isOpen={isSettingsOpen}
                        onClose={() => setIsSettingsOpen(false)}
                        onEmailChange={onOpenChangeEmailModal}
                        onPasswordChange={onOpenChangePasswordModal}
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
            </div>
        </div>
    );
}
