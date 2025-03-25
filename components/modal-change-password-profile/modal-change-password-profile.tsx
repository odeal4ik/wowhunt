import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { Modal } from '@/components/modal';

import { successEmailChangeMessage } from '@/contants/user/notifications';
import {
    UpdatePasswordInput,
    useUpdatePassword,
} from '@/queries/auth/updateUserPassword';

import { ToastNotification } from '../toast-notification/toast-notification';
import { schema } from './modal-change-password-profile-schema';
import styles from './modal-change-password-profile.module.css';

export const ChangePasswordModal = ({ onClose }: { onClose: () => void }) => {
    const { mutate, isPending, error } = useUpdatePassword();

    const {
        register,
        handleSubmit,
        formState: { errors: validationError },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit',
    });

    const onSubmit: SubmitHandler<UpdatePasswordInput> = useCallback(
        async (input) => {
            return mutate(input, {
                onSuccess: () => {
                    toast(<ToastNotification {...successEmailChangeMessage} />);
                    onClose();
                },
            });
        },
        [mutate, onClose],
    );

    return (
        <Modal isOpen onClose={onClose} title="Change password">
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.group}>
                    <label className={styles.label} htmlFor="old_password">
                        Old password
                        {validationError.old_password ? (
                            <p className={styles.error}>
                                {validationError.old_password.message}
                            </p>
                        ) : error?.old_password?.length ? (
                            <p className={styles.error}>
                                {error.old_password[0]}
                            </p>
                        ) : null}
                    </label>
                    <input
                        type="password"
                        id="old_password"
                        autoComplete="current-password"
                        {...register('old_password')}
                        {...(isPending && { disabled: true })}
                        placeholder="Enter old password..."
                        className={styles.input}
                    />
                </div>

                <div className={styles.group}>
                    <label className={styles.label} htmlFor="password">
                        New password
                        {validationError.password ? (
                            <p className={styles.error}>
                                {validationError.password.message}
                            </p>
                        ) : error?.password?.length ? (
                            <p className={styles.error}>{error.password[0]}</p>
                        ) : null}
                    </label>
                    <input
                        type="password"
                        id="password"
                        autoComplete="off"
                        {...register('password')}
                        {...(isPending && { disabled: true })}
                        placeholder="Enter new password..."
                        className={styles.input}
                    />
                </div>

                <div className={styles.group}>
                    <label
                        className={styles.label}
                        htmlFor="password_confirmation">
                        Repeat password
                        {validationError.password_confirmation ? (
                            <p className={styles.error}>
                                {validationError.password_confirmation.message}
                            </p>
                        ) : error?.password_confirmation?.length ? (
                            <p className={styles.error}>
                                {error.password_confirmation[0]}
                            </p>
                        ) : null}
                    </label>
                    <input
                        type="password"
                        id="password_confirmation"
                        autoComplete="off"
                        {...register('password_confirmation')}
                        {...(isPending && { disabled: true })}
                        placeholder="Enter repeat password"
                        className={styles.input}
                    />
                </div>

                <button disabled={isPending} className={styles.submit}>
                    Continue
                </button>
            </form>
        </Modal>
    );
};
