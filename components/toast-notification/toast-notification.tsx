import cn from 'classnames';
import { ToastContentProps } from 'react-toastify';

import { Icon } from '@/core-components/icon/icon';

import Error from '@/images/notifications/error.min.svg';
import Help from '@/images/notifications/help.min.svg';
import Info from '@/images/notifications/info-blue.min.svg';
import Skip from '@/images/notifications/skip.min.svg';
import Success from '@/images/notifications/success-green.min.svg';
import Warning from '@/images/notifications/warning.min.svg';
import Close from '@/images/system-icons/close.svg';

import styles from './toast-notification.module.css';

export interface NotificationProps {
    type: 'success' | 'info' | 'warning' | 'error' | 'skip' | 'help' | 'copy';
    title: string;
    message: string;
    // closeToast is injected after calling like this toast(<ToastNotification type="success" />);
    closeToast?: ToastContentProps['closeToast'];
}

export const ToastNotification = ({
    type = 'info',
    title = '',
    message = '',
    closeToast,
}: NotificationProps) => {
    const isSuccess = type === 'success';
    const isInfo = type === 'info';
    const isWarning = type === 'warning';
    const isError = type === 'error';
    const isSkip = type === 'skip';
    const isHelp = type === 'help';
    const isCopy = type === 'copy';

    return (
        <div className={cn(styles.wrapper, styles[type])}>
            <div className={styles.icon}>
                {isSuccess && <Icon svg={Success} label="Success" />}
                {isInfo && <Icon svg={Info} label="Info" />}
                {isCopy && <Icon svg={Info} label="Info" />}
                {isWarning && <Icon svg={Warning} label="Warning" />}
                {isError && <Icon svg={Error} label="Error" />}
                {isHelp && <Icon svg={Help} label="Help" />}
                {isSkip && <Icon svg={Skip} label="Skip" />}
            </div>

            <div className={styles.content}>
                <div className={styles.text}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.message}>{message}</p>
                </div>

                <button className={styles.closeButton} onClick={closeToast}>
                    <Icon svg={Close} fill="#9F9FB7" label="Close" />
                </button>
            </div>
        </div>
    );
};
