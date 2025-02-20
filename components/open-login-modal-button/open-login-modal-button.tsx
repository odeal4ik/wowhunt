import { ComponentProps } from 'react';

import { useGlobalModal } from '@/hooks/useGlobalModal';

import { ModalLoginIn } from '../modal-login/modal-login';
import styles from './open-login-modal-button.module.css';

type OpenLogInModalButtonProps = ComponentProps<'button'>;

export function OpenLogInModalButton(props: OpenLogInModalButtonProps) {
    const { open, close } = useGlobalModal();

    return (
        <div>
            <button
                {...props}
                className={styles.button}
                type="button"
                onClick={() => open(<ModalLoginIn onClose={close} />)}>
                Log In
            </button>
        </div>
    );
}
