import React, { useState } from 'react';
import styles from './booster-profile-notification.module.css';
import Image from 'next/image';

export function BoosterProfileNotification() {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [pushNotifications, setPushNotifications] = useState(true);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className={styles.notificationsSection}>
            <h3 className={styles.notificationTitle}>Connect notifications</h3>
            <div className={styles.notificationControls}>
                <div className={styles.notificationRow}>
                    <div className={styles.notificationItem}>
                        <Image
                            src="/system-icons/mail.svg"
                            alt="Support"
                            width={18}
                            height={18}
                        />
                        <p className={styles.notificationText}>E-mail</p>
                    </div>

                    <label className={styles.switch}>
                        <input
                            type="checkbox"
                            checked={emailNotifications}
                            onChange={(e) =>
                                setEmailNotifications(e.target.checked)
                            }
                        />
                        <span className={styles.slider}></span>
                    </label>
                </div>
                <div className={styles.notificationRow}>
                    <div className={styles.notificationItem}>
                        <Image
                            src="/system-icons/notification.svg"
                            alt="Support"
                            width={18}
                            height={18}
                        />
                        <p className={styles.notificationText}>Push</p>
                    </div>

                    <label className={styles.switch}>
                        <input
                            type="checkbox"
                            checked={pushNotifications}
                            onChange={(e) =>
                                setPushNotifications(e.target.checked)
                            }
                        />
                        <span className={styles.slider}></span>
                    </label>
                </div>
            </div>

            <button className={styles.telegramButton}>
                <Image
                    src="/system-icons/telegram.svg"
                    alt="Telegram"
                    width={16}
                    height={16}
                />
                Telegram
            </button>

            <div className={styles.telegramInstructions}>
                <ol>
                    <li>
                        Go to our telegram bot{' '}
                        <span
                            className={styles.textStyle}
                            onClick={() => handleCopy('@es_test_868_bot')}
                            style={{ cursor: 'pointer' }}>
                            @es_test_868_bot
                        </span>{' '}
                        and click /start
                    </li>
                    <li>
                        Send the bot this string{' '}
                        <span
                            className={styles.textStyle}
                            onClick={() => handleCopy('b602177fc8ac79d')}
                            style={{ cursor: 'pointer' }}>
                            b602177fc8ac79d
                        </span>
                    </li>
                    <li>Done, you have turned on telegram notifications</li>
                </ol>
            </div>
        </div>
    );
}
