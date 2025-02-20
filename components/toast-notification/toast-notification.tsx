import { ToastContentProps } from 'react-toastify';

import { Icon } from '@/core-components/icon/icon';

import Info from '@/images/notifications/info-blue.min.svg';
import Success from '@/images/notifications/success-green.min.svg';
import Close from '@/images/system-icons/close.svg';

import styles from './toast-notification.module.css';

interface NotificationProps {
    type: 'success' | 'info';
    // closeToast is injected after calling like this toast(<ToastNotification type="success" />);
    closeToast?: ToastContentProps['closeToast'];
}

export const ToastNotification = ({ type, closeToast }: NotificationProps) => {
    const isSuccess = type === 'success';
    const isInfo = type === 'info';

    return (
        <div className={styles.wrapper}>
            <div className={styles.icon}>
                {isSuccess && <Icon svg={Success} />}
                {isInfo && <Icon svg={Info} />}
            </div>

            <div className={styles.content}>
                <div className={styles.text}>
                    <p className={styles.title}>Link sent to e-mail</p>
                    <p className={styles.message}>
                        We have sent you a message to your email to confirm your
                        change
                    </p>
                </div>

                <button className={styles.closeButton} onClick={closeToast}>
                    <Icon svg={Close} fill="#9F9FB7" />
                </button>
            </div>
        </div>
    );
};
