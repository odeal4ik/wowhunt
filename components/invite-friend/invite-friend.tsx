import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { successReferralEmailNotificationMessage } from '@/contants/referral/notifications';
import { useSendReferralLink } from '@/queries/referral/referralLink';

import { ToastNotification } from '../toast-notification/toast-notification';
import { schema } from './invite-friend-schema';
import styles from './invite-friend.module.css';

export function InviteFriend({ price }: { price: number }) {
    const { mutate, isPending, error } = useSendReferralLink();

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
                    toast(
                        <ToastNotification
                            {...successReferralEmailNotificationMessage}
                        />,
                    );
                },
            });
        },
        [mutate],
    );

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h3 className={styles.title}>Invite friends</h3>
                <p className={styles.text}>
                    Invite your referrals and get ${price} to your account
                </p>

                <div className={styles.image}>
                    <Image
                        src="/images/invite-friend.png"
                        alt="Invite friend"
                        width={218}
                        height={218}
                        quality={100}
                    />
                </div>
            </div>

            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    id="email"
                    {...register('email')}
                    {...(isPending && { disabled: true })}
                    placeholder="Enter invite e-mail"
                    className={styles.input}
                />

                {validationError.email ? (
                    <p className={styles.error}>
                        {validationError.email.message}
                    </p>
                ) : error?.email?.length ? (
                    <p className={styles.error}>{error.email[0]}</p>
                ) : null}

                <button
                    type="submit"
                    disabled={isPending}
                    className={styles.button}>
                    Invite
                </button>
            </form>
        </div>
    );
}
