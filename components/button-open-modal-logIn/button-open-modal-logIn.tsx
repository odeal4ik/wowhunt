import { useGlobalModal } from '@/hooks/useGlobalModal';

import { ModalLoginIn } from '../modal-login/modal-login';
import styles from './button-open-modal-logIn.module.css';

export function ButtonOpenModalLogIn() {
    const { open, close } = useGlobalModal();

    return (
        <div>
            <button
                className={styles.button}
                type="button"
                onClick={() => open(<ModalLoginIn onClose={close} />)}>
                Log In
            </button>
        </div>
    );
}
