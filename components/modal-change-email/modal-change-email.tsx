import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { Modal } from '@/components/modal';

import { successEmailChangeMessage } from '@/contants/user/notifications';
import { useUpdateEmail } from '@/queries/auth/updateUserEmail';

import { ToastNotification } from '../toast-notification/toast-notification';
import { schema } from './modal-change-email-schema';
import styles from './modal-change-email.module.css';

export const ChangeEmailModal = ({
    onClose,
    email,
}: {
    onClose: () => void;
    email: string;
}) => {
    const { mutate, isPending, error } = useUpdateEmail();

    const {
        register,
        handleSubmit,
        formState: { errors: validationError },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit',
    });

    const onSubmit: SubmitHandler<{ email: string }> = useCallback(
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
        <Modal isOpen onClose={onClose} title="Change e-mail">
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.current}>
                    <p className={styles.text}>Your e-mail:</p>
                    <p className={styles.email}>{email}</p>
                </div>

                <div className={styles.group}>
                    <label className={styles.label} htmlFor="email">
                        New E-mail
                        {validationError.email ? (
                            <p className={styles.error}>
                                {validationError.email.message}
                            </p>
                        ) : error?.email?.length ? (
                            <p className={styles.error}>{error.email[0]}</p>
                        ) : null}
                    </label>

                    <input
                        type="email"
                        id="email"
                        {...register('email')}
                        {...(isPending && { disabled: true })}
                        placeholder="Enter new E-mail..."
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
