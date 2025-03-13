import { ComponentProps, useCallback } from 'react';
import { toast } from 'react-toastify';

import { infoLogoutMessage } from '@/contants/notifications';
import { useLogOutUser } from '@/queries/auth/logoutUser';

import { ToastNotification } from '../toast-notification/toast-notification';
import styles from './logout-button.module.css';

type LogutButtonProps = ComponentProps<'button'>;

export function LogutButton(props: LogutButtonProps) {
    const { mutate, isPending } = useLogOutUser();

    const handleLogOut = useCallback(async () => {
        return mutate(undefined, {
            onSuccess: () => {
                toast(<ToastNotification {...infoLogoutMessage} />);
            },
        });
    }, [mutate]);

    return (
        <div>
            <button
                disabled={isPending}
                {...props}
                className={styles.button}
                type="button"
                onClick={handleLogOut}>
                Log Out
            </button>
        </div>
    );
}
