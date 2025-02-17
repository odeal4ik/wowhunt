import Image from 'next/image';

import styles from './modal-success-forgot-password.module.css';

export const ModalSuccessForgotPassword = () => {
    return (
        <div className={styles.notification}>
            <div className={styles.content}>
                <div className={styles.iconBlock}>
                    <Image
                        src="/system-icons/info-blue.svg"
                        alt="Info"
                        width={24}
                        height={24}
                        className={styles.infoIcon}
                    />
                </div>
                <div className={styles.messages}>
                    <div className={styles.messageBlock}>
                        <p className={styles.message}>Link sent to e-mail</p>
                        <p className={styles.subMessage}>
                            We have sent you a message to your email to confirm
                            your change
                        </p>
                    </div>

                    <button className={styles.closeButton}>
                        <Image
                            src="system-icons/close.svg"
                            alt="Close"
                            width={10}
                            height={10}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};
