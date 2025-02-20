import { ComponentProps } from 'react';

import { useLogOutUser } from '@/queries/auth/logoutUser';

import styles from './logout-button.module.css';

type LogutButtonProps = ComponentProps<'button'>;

export function LogutButton(props: LogutButtonProps) {
    const { mutate, isPending } = useLogOutUser();
    return (
        <div>
            <button
                disabled={isPending}
                {...props}
                className={styles.button}
                type="button"
                onClick={() => mutate()}>
                Log Out
            </button>
        </div>
    );
}
