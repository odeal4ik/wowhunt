import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import Image from 'next/image';
import React, { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { Icon } from '@/core-components/icon/icon';

import Close from '@/images/system-icons/close.svg';

import { successPasswordRestoreMessage } from '@/contants/notifications';
import { useEscapeClose } from '@/hooks/useEscapeClose';
import { useForgotPassword } from '@/queries/auth/forgotPassword';

import { ToastNotification } from '../toast-notification/toast-notification';
import { schema } from './modal-forgot-password-schema';
import styles from './modal-forgot-password.module.css';

export const ModalForgotPassword = ({ onClose }: { onClose: () => void }) => {
    const {
        register,
        handleSubmit,
        formState: { errors: validationError },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit',
    });

    const { mutate, isPending, error } = useForgotPassword();

    const onSubmit: SubmitHandler<{ email: string }> = useCallback(
        async ({ email }) => {
            return mutate(
                {
                    email,
                },
                {
                    onSuccess: () => {
                        onClose();
                        toast(
                            <ToastNotification
                                {...successPasswordRestoreMessage}
                            />,
                        );
                    },
                },
            );
        },
        [mutate, onClose],
    );

    useEscapeClose(true, onClose);

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div
                className={styles.container}
                onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    <Icon svg={Close} label="Close" />
                </button>

                <div className={styles.imageContainer}>
                    <Image
                        src="/images/password.webp"
                        alt="Key icon"
                        width={450}
                        height={172}
                        priority
                        className={styles.img}
                    />
                </div>

                <h2 className={styles.title}>Forgot password</h2>

                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email" className={styles.label}>
                        Enter your email and we will send you a password reset
                        link
                    </label>
                    <input
                        {...register('email')}
                        {...(isPending && { disabled: true })}
                        id="email"
                        type="email"
                        placeholder="Enter e-mail"
                        className={cn(
                            styles.input,
                            error?.email?.length && styles.error,
                        )}
                    />
                    {validationError.email ? (
                        <p className={styles.error}>
                            {validationError.email.message}
                        </p>
                    ) : error?.email?.length ? (
                        <p className={styles.error}>{error.email[0]}</p>
                    ) : null}
                    <button type="submit" className={styles.submitButton}>
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};
