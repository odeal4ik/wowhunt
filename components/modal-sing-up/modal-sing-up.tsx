import cn from 'classnames';
import React, { useMemo, useState } from 'react';
import styles from './modal-sing-up.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEscapeClose } from '../../hooks/useEscapeClose';
import { SubmitHandler, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { SignUpUserInput, useSignUpUser } from '@/api/auth/signupUser';
import { schema } from './modal-sign-up-schema';

interface ModalSignUpProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ModalSignUp = ({ isOpen, onClose }: ModalSignUpProps) => {
    const [isCustomer, setIsCustomer] = useState<boolean>(true);

    const {
        register,
        handleSubmit,
        formState: { errors: validationError, isValid },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit',
        context: { isCustomer },
    });

    const { mutate: signUpUser, isPending, data } = useSignUpUser();

    const backendValidationErrors = useMemo(() => {
        if (data && 'errors' in data) {
            return data.errors;
        }
    }, [data]);

    const onSubmit: SubmitHandler<Omit<SignUpUserInput, 'type'>> = (input) => {
        signUpUser({
            ...input,
            type: !isCustomer,
        });
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
                        src={
                            isCustomer
                                ? '/images/reg-user.webp'
                                : '/images/reg-boost.webp'
                        }
                        alt={'Boost the future with us!'}
                        fill
                        // sizes=''
                        quality={100}
                    />
                    <div className={styles.imageOverlay}>
                        <h3 className={styles.imageTitle}>
                            Become a part of Wowhunt
                        </h3>
                        <p className={styles.imgSubtitle}>
                            Boost the future with us!
                        </p>
                    </div>
                </div>

                <div className={styles.formSection}>
                    <div className={styles.tabs}>
                        <button
                            className={cn(
                                styles.tab,
                                isCustomer && styles.active,
                            )}
                            onClick={() => setIsCustomer(true)}>
                            Customer
                        </button>
                        <button
                            className={cn(
                                styles.tab,
                                !isCustomer && styles.active,
                            )}
                            onClick={() => setIsCustomer(false)}>
                            Booster
                        </button>
                    </div>

                    <form
                        className={styles.formContainer}
                        onSubmit={handleSubmit(onSubmit)}>
                        <h2 className={styles.title}>
                            {isCustomer
                                ? 'Sign up to Wowhunt'
                                : 'Become a booster on Wowhunt'}
                        </h2>
                        <div className={styles.form}>
                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="email">
                                    Name&nbsp;
                                    <span className={styles.required}>*</span>
                                    {validationError.email ? (
                                        <p className={styles.error}>
                                            {validationError.email.message}
                                        </p>
                                    ) : backendValidationErrors?.email ? (
                                        <p className={styles.error}>
                                            {backendValidationErrors.email[0]}
                                        </p>
                                    ) : null}
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your Name"
                                    autoComplete="off"
                                    id="email"
                                    {...register('email')}
                                    {...(isPending && { disabled: true })}
                                    className={cn(
                                        styles.input,
                                        backendValidationErrors?.email &&
                                            styles.error,
                                    )}
                                />
                            </div>

                            {isCustomer ? (
                                <div className={styles.formGroup}>
                                    <label
                                        className={styles.label}
                                        htmlFor="password">
                                        Enter your password&nbsp;
                                        <span className={styles.required}>
                                            *
                                        </span>
                                        {validationError.password ? (
                                            <p className={styles.error}>
                                                {
                                                    validationError.password
                                                        .message
                                                }
                                            </p>
                                        ) : null}
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        autoComplete="off"
                                        id="password"
                                        {...register('password')}
                                        {...(isPending && { disabled: true })}
                                        className={styles.input}
                                    />
                                </div>
                            ) : null}

                            {isCustomer ? (
                                <div className={styles.formGroup}>
                                    <label
                                        className={styles.label}
                                        htmlFor="password_confirmation">
                                        Confirm your password&nbsp;
                                        <span className={styles.required}>
                                            *
                                        </span>
                                        {validationError.password_confirmation ? (
                                            <p className={styles.error}>
                                                {
                                                    validationError
                                                        .password_confirmation
                                                        .message
                                                }
                                            </p>
                                        ) : null}
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        autoComplete="off"
                                        id="password_confirmation"
                                        {...register('password_confirmation')}
                                        {...(isPending && { disabled: true })}
                                        className={styles.input}
                                    />
                                </div>
                            ) : null}

                            <div className={styles.formGroup}>
                                <label
                                    className={styles.label}
                                    htmlFor="discord_link">
                                    Enter your discord&nbsp;
                                    <span className={styles.required}>*</span>
                                    {validationError.discord_link ? (
                                        <p className={styles.error}>
                                            {
                                                validationError.discord_link
                                                    .message
                                            }
                                        </p>
                                    ) : backendValidationErrors?.discord_link ? (
                                        <p className={styles.error}>
                                            {
                                                backendValidationErrors
                                                    .discord_link[0]
                                            }
                                        </p>
                                    ) : null}
                                </label>
                                <input
                                    type="text"
                                    placeholder="Discord username"
                                    autoComplete="off"
                                    id="discord_link"
                                    {...register('discord_link')}
                                    {...(isPending && { disabled: true })}
                                    className={cn(
                                        styles.input,
                                        backendValidationErrors?.discord_link &&
                                            styles.error,
                                    )}
                                />
                            </div>

                            {!isCustomer ? (
                                <div className={styles.formGroup}>
                                    <label
                                        className={styles.label}
                                        htmlFor="game">
                                        Choose a game&nbsp;
                                        <span className={styles.required}>
                                            *
                                        </span>
                                        {validationError.game ? (
                                            <p className={styles.error}>
                                                {validationError.game.message}
                                            </p>
                                        ) : null}
                                    </label>
                                    <div className={styles.selectWrapper}>
                                        <select
                                            className={`${styles.input} ${styles.select}`}
                                            defaultValue=""
                                            id="game"
                                            {...register('game')}>
                                            <option value="" disabled hidden>
                                                Choose your game
                                            </option>
                                            {[
                                                { id: 1, label: 'Valorant' },
                                                {
                                                    id: 2,
                                                    label: 'Apex legends',
                                                },
                                            ].map(({ id, label }) => (
                                                <option key={id} value={label}>
                                                    {label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            ) : null}

                            {!isCustomer ? (
                                <div className={styles.formGroup}>
                                    <label
                                        className={styles.label}
                                        htmlFor="description">
                                        Write your boost service type&nbsp;
                                        <span className={styles.required}>
                                            *
                                        </span>
                                        {validationError.description ? (
                                            <p className={styles.error}>
                                                {
                                                    validationError.description
                                                        .message
                                                }
                                            </p>
                                        ) : null}
                                    </label>
                                    <textarea
                                        className={cn(
                                            styles.input,
                                            styles.textarea,
                                        )}
                                        id="description"
                                        rows={3}
                                        {...register('description')}
                                        placeholder="Few words what you can do..."
                                    />
                                </div>
                            ) : null}
                        </div>

                        <div className={styles.submitWrapper}>
                            <button
                                className={cn(
                                    styles.submitButton,
                                    (isPending || !isValid) && styles.pending,
                                    !isCustomer && styles.submitButtonBooster,
                                )}>
                                {isCustomer ? 'Sign Up' : 'Send Request'}
                            </button>

                            <p className={styles.textLink}>
                                You have account?&nbsp;
                                <Link href="/login" className={styles.link}>
                                    Log in
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
