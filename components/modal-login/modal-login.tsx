import { useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './modal-login.module.css';

import { useEscapeClose } from '../../hooks/useEscapeClose';
import { useLogInUser } from '@/api/auth/loginUser';

interface ModalLoginInProps {
    isOpen: boolean;
    onClose: () => void;
}

const schema = yup
    .object({
        email: yup
            .string()
            .max(255, 'Name should be at most 255 characters')
            .email('Name should be in email format')
            .required('Name is a required field'),
        password: yup
            .string()
            .min(8, 'Password should be at least 8 characters')
            .max(255, 'Password should be at most 255 characters')
            .required(),
    })
    .required();

interface LoginFormInput {
    email: string;
    password: string;
}

export const ModalLoginIn = ({ isOpen, onClose }: ModalLoginInProps) => {
    const [activeTab, setActiveTab] = useState<'customer' | 'booster'>(
        'customer',
    );

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const { mutate: logInUser, isPending } = useLogInUser();

    const onSubmit: SubmitHandler<LoginFormInput> = ({ email, password }) => {
        logInUser({ email, password, type: activeTab === 'booster' });
        console.log({ email, password, type: activeTab === 'booster' });
    };

    useEscapeClose(isOpen, onClose);

    if (!isOpen) return null;

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

                        <form
                            className={styles.form}
                            onSubmit={handleSubmit(onSubmit)}>
                            <div className={styles.formFields}>
                                <div className={styles.formGroup}>
                                    <label
                                        className={styles.label}
                                        htmlFor="email">
                                        Name
                                        <span className={styles.required}>
                                            *
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your Name"
                                        autoComplete="username"
                                        {...register('email')}
                                        {...(isPending && { disabled: true })}
                                        className={styles.input}
                                    />
                                    {errors.email ? (
                                        <p className={styles.error}>
                                            {errors.email.message}
                                        </p>
                                    ) : null}
                                </div>

                                <div className={styles.formGroup}>
                                    <label
                                        className={styles.label}
                                        htmlFor="password">
                                        Enter your password
                                        <span className={styles.required}>
                                            *
                                        </span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        autoComplete="current-password"
                                        {...register('password', {
                                            required: true,
                                            minLength: 8,
                                            maxLength: 255,
                                        })}
                                        {...(isPending && { disabled: true })}
                                        className={styles.input}
                                    />
                                    {errors.password ? (
                                        <p className={styles.error}>
                                            {errors.password.message}
                                        </p>
                                    ) : null}
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
                                className={cn(
                                    styles.submitButton,
                                    isPending && styles.pending,
                                )}>
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
