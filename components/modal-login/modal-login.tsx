import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { LogInUserInput, useLogInUser } from '@/api/auth/loginUser';

import { useGlobalModal } from '@/hooks/useGlobalModal';

import { useEscapeClose } from '../../hooks/useEscapeClose';
import { ModalSignUp } from '../modal-sing-up/modal-sing-up';
import { schema } from './modal-login-schema';
import styles from './modal-login.module.css';
import { ModalForgotPassword } from '../modal-forgot-password/modal-forgot-password';

export const ModalLoginIn = ({ onClose }: { onClose: () => void }) => {
    const [isBooster, setIsBooster] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors: validationError },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit',
    });

    const { mutate: logInUser, isPending, data } = useLogInUser();

    const backendValidationErrors = useMemo(() => {
        if (data && 'errors' in data) {
            return data.errors;
        }
    }, [data]);

    const onSubmit: SubmitHandler<Omit<LogInUserInput, 'type'>> = (input) => {
        logInUser({ ...input, type: isBooster });
    };

    useEscapeClose(true, onClose);

    const { open, close } = useGlobalModal();

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div
                className={styles.container}
                onClick={(e) => e.stopPropagation()}>
                <div className={styles.imageContainer}>
                    <Image
                        src="/images/log-in.webp"
                        alt="Welcome back"
                        fill
                        quality={100}
                    />
                    <div className={styles.imageOverlay}>
                        <h1 className={styles.imageTitle}>
                            WELCOME BACK TO WOWHUNT
                        </h1>
                        <p className={styles.imgSubTitle}>
                            Boost the future with us!
                        </p>
                    </div>
                </div>

                <div className={styles.formSection}>
                    <div className={styles.tabs}>
                        <button
                            className={cn(
                                styles.tab,
                                !isBooster && styles.active,
                            )}
                            onClick={() => setIsBooster(false)}>
                            Customer
                        </button>
                        <button
                            className={cn(
                                styles.tab,
                                isBooster && styles.active,
                            )}
                            onClick={() => setIsBooster(true)}>
                            Booster
                        </button>
                    </div>

                    <form
                        className={styles.formContainer}
                        onSubmit={handleSubmit(onSubmit)}>
                        <h2 className={styles.title}>Log in to Wowhunt</h2>

                        <div className={styles.form}>
                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="email">
                                    Name&nbsp;
                                    <span className={styles.required}>*</span>
                                    {validationError.email ? (
                                        <p className={styles.error}>
                                            {validationError.email.message}
                                        </p>
                                    ) : backendValidationErrors?.email
                                          .length ? (
                                        <p className={styles.error}>
                                            {backendValidationErrors.email[0]}
                                        </p>
                                    ) : null}
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your Name"
                                    autoComplete="username"
                                    id="email"
                                    {...register('email')}
                                    {...(isPending && { disabled: true })}
                                    className={cn(
                                        styles.input,
                                        backendValidationErrors?.email.length &&
                                            styles.error,
                                    )}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label
                                    className={styles.label}
                                    htmlFor="password">
                                    Enter your password&nbsp;
                                    <span className={styles.required}>*</span>
                                    {validationError.password ? (
                                        <p className={styles.error}>
                                            {validationError.password.message}
                                        </p>
                                    ) : backendValidationErrors?.password
                                          .length ? (
                                        <p className={styles.error}>
                                            {
                                                backendValidationErrors
                                                    .password[0]
                                            }
                                        </p>
                                    ) : null}
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    autoComplete="current-password"
                                    {...register('password')}
                                    {...(isPending && { disabled: true })}
                                    className={cn(
                                        styles.input,
                                        backendValidationErrors?.password
                                            .length && styles.error,
                                    )}
                                />
                            </div>
                        </div>

                        <button
                            onClick={() => open(<ModalForgotPassword onClose={close} />)}
                            className={styles.forgotPassword}>
                            I forgot password
                        </button>

                        <div className={styles.divider}>
                            <span>or</span>
                        </div>

                        <div className={styles.socialButtons}>
                            <button
                                type="button"
                                className={styles.socialButton}>
                                <Image
                                    src="/system-icons/facebook.svg"
                                    alt="Facebook"
                                    width={25}
                                    height={25}
                                />
                                Facebook
                            </button>
                            <button
                                type="button"
                                className={styles.socialButton}>
                                <Image
                                    src="/system-icons/google.svg"
                                    alt="Google"
                                    width={25}
                                    height={25}
                                />
                                Google
                            </button>
                        </div>

                        <div className={styles.submitWrapper}>
                            <button
                                type="submit"
                                className={cn(
                                    styles.submitButton,
                                    isPending && styles.pending,
                                )}>
                                Log In
                            </button>

                            <p className={styles.textLink}>
                                You don&apos;t have account yet?&nbsp;
                                <button
                                    className={styles.link}
                                    onClick={() =>
                                        open(<ModalSignUp onClose={close} />)
                                    }>
                                    Sign up
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
