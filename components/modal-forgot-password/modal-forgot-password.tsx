import React, { useState } from 'react';
import styles from './modal-forgot-password.module.css';
import Image from 'next/image';
import { useEscapeClose } from '@/hooks/useEscapeClose';

export const ModalForgotPassword = ({ onClose }: { onClose: () => void }) => {
    const [email, setEmail] = useState('');

    useEscapeClose(true, onClose);

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    <Image
                        src="system-icons/close.svg"
                        alt="Close"
                        width={14}
                        height={14}
                    />
                </button>

                <div className={styles.imageContainer}>
                    <Image
                        src="/images/forgot-password.webp"
                        alt="Key icon"
                        width={450}
                        height={172}
                        className={styles.img}
                    />
                </div>

                <h2 className={styles.title}>Forgot password</h2>
                <p className={styles.description}>
                    Enter your email and we will send you a password reset link
                </p>

                <form className={styles.form}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter e-mail"
                        className={styles.input}
                        required
                    />
                    <button type="submit" className={styles.submitButton}>
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};
