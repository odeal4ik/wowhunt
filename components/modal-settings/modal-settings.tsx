import { Icon } from '@/core-components/icon/icon';

import { Modal } from '@/components/modal';

import At from '@/images/system-icons/at.svg';
import Key from '@/images/system-icons/key-password.svg';
import Support from '@/images/system-icons/support.svg';

import styles from './modal-settings.module.css';

interface SettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
    onEmailChange: () => void;
    onPasswordChange: () => void;
}

export const SettingsModal = ({
    isOpen,
    onClose,
    onEmailChange,
    onPasswordChange,
}: SettingsModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Settings">
            <div className={styles.modalButtons}>
                <button className={styles.modalButton} onClick={onEmailChange}>
                    <Icon svg={At} label="Email" />
                    Change eMail
                </button>
                <button
                    className={styles.modalButton}
                    onClick={onPasswordChange}>
                    <Icon svg={Key} label="Key" />
                    Change password
                </button>
                <button className={styles.modalButton}>
                    <Icon svg={Support} label="Support" fill="#FBBF24" />
                    Write to admin
                </button>
            </div>
        </Modal>
    );
};
