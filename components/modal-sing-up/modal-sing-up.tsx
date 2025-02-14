import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useGlobalModal } from '@/hooks/useGlobalModal';
import { SignUpUserInput, useSignUpUser } from '@/queries/auth/signupUser';

import { useEscapeClose } from '../../hooks/useEscapeClose';
import { ModalLoginIn } from '../modal-login/modal-login';
import { schema } from './modal-sign-up-schema';
import styles from './modal-sing-up.module.css';

export const ModalSignUp = ({ onClose }: { onClose: () => void }) => {
    const [isCustomer, setIsCustomer] = useState<boolean>(true);

    const {
        register,
        handleSubmit,
        formState: { errors: validationError },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit',
        context: { isCustomer },
    });

    const { mutate, isPending, error } = useSignUpUser();

    const onSubmit: SubmitHandler<Omit<SignUpUserInput, 'type'>> = useCallback(
        async (input) => {
            return mutate(
                {
                    ...input,
                    type: !isCustomer,
                } as SignUpUserInput,
                { onSuccess: onClose },
            );
        },
        [isCustomer, mutate, onClose],
    );

    useEscapeClose(true, onClose);

    const { open, close } = useGlobalModal();

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div
                className={styles.container}
                onClick={(e) => e.stopPropagation()}>
                <div className={styles.imageContainer}>
                    <Image
                        src={
                            isCustomer
                                ? '/images/reg-user.webp'
                                : '/images/reg-boost.webp'
                        }
                        alt="Boost the future with us!"
                        fill
                        quality={100}
                    />
                    <div className={styles.imageOverlay}>
                        <h3 className={styles.imageTitle}>
                            Become a part of Wowhunt
                        </h3>
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
                                    ) : error?.email?.length ? (
                                        <p className={styles.error}>
                                            {error.email[0]}
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
                                        error?.email?.length && styles.error,
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
                                    ) : error?.discord_link?.length ? (
                                        <p className={styles.error}>
                                            {error.discord_link[0]}
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
                                        error?.discord_link?.length &&
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
                                    isPending && styles.pending,
                                )}>
                                {isCustomer ? 'Sign Up' : 'Send Request'}
                            </button>

                            <p className={styles.textLink}>
                                You have account?&nbsp;
                                <button
                                    className={styles.link}
                                    onClick={() =>
                                        open(<ModalLoginIn onClose={close} />)
                                    }>
                                    Log in
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
