import { useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './modal-login.module.css';

import { useEscapeClose } from '../../hooks/useEscapeClose';
import { LogInUserInput, useLogInUser } from '@/api/auth/loginUser';
import { schema } from './modal-login-schema';
import { useGlobalModal } from '@/hooks/useGlobalModal';
import { ModalSignUp } from '../modal-sing-up/modal-sing-up';

export const ModalLoginIn = ({ onClose }: { onClose: () => void }) => {
    const [isBooster, setIsBooster] = useState<boolean>(true);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const { mutate: logInUser, isPending, data } = useLogInUser();

    console.log(data);

    const onSubmit: SubmitHandler<Omit<LogInUserInput, 'type'>> = ({
        email,
        password,
    }) => {
        logInUser({ email, password, type: isBooster });
    };

    useEscapeClose(true, onClose);

    const { open, close } = useGlobalModal();

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
                    <div className={styles.tabs}>
                        <button
                            className={styles.tab}
                            data-active={!isBooster}
                            onClick={() => setIsBooster(false)}>
                            Customer
                        </button>
                        <button
                            className={styles.tab}
                            data-active={isBooster}
                            onClick={() => setIsBooster(true)}>
                            Booster
                        </button>
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
                                        {...register('password')}
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
                                You don&apos;t have account yet?&nbsp;
                                <button
                                    className={styles.signupLink}
                                    onClick={() =>
                                        open(<ModalSignUp onClose={close} />)
                                    }>
                                    Sign up
                                </button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
