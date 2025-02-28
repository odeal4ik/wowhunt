import { Icon } from '@/core-components/icon/icon';

import { Modal } from '@/components/modal/Modal';

import Telegram from '@/images/media/telegram.svg';
import Mail from '@/images/icons/mail.svg';
import Notification from '@/images/system-icons/notification.svg';

import styles from './modal-notifications.module.css';

interface NotificationsModalProps {
    isOpen: boolean;
    onClose: () => void;
    emailNotifications: boolean;
    pushNotifications: boolean;
    onEmailNotificationsChange: (value: boolean) => void;
    onPushNotificationsChange: (value: boolean) => void;
}

export const NotificationsModal = ({
    isOpen,
    onClose,
    emailNotifications,
    pushNotifications,
    onEmailNotificationsChange,
    onPushNotificationsChange,
}: NotificationsModalProps) => {
    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Notifications">
            <div className={styles.modalButtons}>
                <div className={styles.modalNotificationRow}>
                    <label className={styles.switch}>
                        <input
                            type="checkbox"
                            className={styles.notificationCheckbox}
                            checked={emailNotifications}
                            onChange={(e) =>
                                onEmailNotificationsChange(e.target.checked)
                            }
                        />
                        <span className={styles.slider}></span>
                    </label>
                    <div className={styles.notificationItem}>
                        <Icon svg={Mail} area-label="Mail" />
                        <p className={styles.notificationText}>E-mail</p>
                    </div>
                </div>
                <div className={styles.modalNotificationRow}>
                    <label className={styles.switch}>
                        <input
                            type="checkbox"
                            className={styles.notificationCheckbox}
                            checked={pushNotifications}
                            onChange={(e) =>
                                onPushNotificationsChange(e.target.checked)
                            }
                        />
                        <span className={styles.slider}></span>
                    </label>
                    <div className={styles.notificationItem}>
                        <Icon svg={Notification} area-label="Notification" />
                        <p className={styles.notificationText}>Push</p>
                    </div>
                </div>
                <button className={styles.modalButton}>
                    <Icon svg={Telegram} area-label="Telegram" />
                    Telegram
                </button>

                <div className={styles.telegramInstructions}>
                    <ol>
                        <li>
                            Go to our telegram bot{' '}
                            <span
                                className={styles.textStyle}
                                onClick={() => handleCopy('@es_test_666_bot')}>
                                @es_test_666_bot
                            </span>{' '}
                            and click /start
                        </li>
                        <li>
                            Send the bot this string{' '}
                            <span
                                className={styles.textStyle}
                                onClick={() => handleCopy('bb021771c6ec70d')}>
                                bb021771c6ec70d
                            </span>
                        </li>
                        <li>Done, you have turned on telegram notifications</li>
                    </ol>
                </div>
            </div>
        </Modal>
    );
};
