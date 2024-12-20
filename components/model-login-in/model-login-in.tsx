import React, { useEffect } from 'react';
import styles from './model-login-in.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface ModelLoginInProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ModelLoginIn = ({
    isOpen,
    onClose,
}: ModelLoginInProps) => {
    const [activeTab, setActiveTab] = React.useState<'customer' | 'booster'>(
        'customer',
    );

    useEffect(() => {
        if (!isOpen) return;
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEscKey);
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isOpen, onClose]);

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div
                className={styles.modalContainer}
                onClick={(e) => e.stopPropagation()}>
                <div className={styles.imageContainer}>
                    <Image
                        src="/images/log-in.webp"
                        alt="Welcome back"
                        width={500}
                        height={600}
                        style={{ objectFit: 'cover' }}
                    />
                    <div className={styles.imageOverlay}>
                        <h1 className={styles.imageTitle}>
                            WELCOME BACK
                            <br />
                            TO WOWHUNT
                        </h1>
                        <p className={styles.imgSubtitle}>
                            Boost the future with us!
                        </p>
                    </div>
                </div>

                <div className={styles.formSection}>
                    <div className={styles.tabsWrapper}>
                        <div className={styles.tabs}>
                            <button
                                className={styles.tab}
                                data-active={activeTab === 'customer'}
                                onClick={() => setActiveTab('customer')}>
                                Customer
                            </button>
                            <button
                                className={styles.tab}
                                data-active={activeTab === 'booster'}
                                onClick={() => setActiveTab('booster')}>
                                Booster
                            </button>
                        </div>
                    </div>

                    <div className={styles.formContainer}>
                        <h2 className={styles.formTitle}>Log in to Wowhunt</h2>

                        <form className={styles.form}>
                            <div className={styles.formFields}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>
                                        Name{' '}
                                        <span className={styles.required}>
                                            *
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your Name"
                                        className={styles.input}
                                        required
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>
                                        Enter your password{' '}
                                        <span className={styles.required}>
                                            *
                                        </span>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className={styles.input}
                                        required
                                    />
                                </div>
                            </div>

                            <Link
                                href="/forgot-password"
                                className={styles.forgotPassword}>
                                I forgot password
                            </Link>

                            <div className={styles.divider}>
                                <span className={styles.dividerLine}>or</span>
                            </div>

                            <div className={styles.socialButtons}>
                                <button
                                    type="button"
                                    className={styles.socialButton}>
                                    <Image
                                        src="/system-icons/facebook.svg"
                                        alt="Facebook"
                                        width={24}
                                        height={24}
                                    />
                                    Facebook
                                </button>
                                <button
                                    type="button"
                                    className={styles.socialButton}>
                                    <Image
                                        src="/system-icons/google.svg"
                                        alt="Google"
                                        width={24}
                                        height={24}
                                    />
                                    Google
                                </button>
                            </div>

                            <button
                                type="submit"
                                className={styles.submitButton}>
                                Log In
                            </button>

                            <p className={styles.signupText}>
                                You don{"'"}t have account yet?{' '}
                                <Link
                                    href="/signup"
                                    className={styles.signupLink}>
                                    Sign up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
