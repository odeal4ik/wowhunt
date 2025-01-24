import Image from 'next/image';
import { Modal } from '@/components/modal/Modal';
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
                <button
                    className={styles.modalButton}
                    onClick={onEmailChange}
                >
                    <Image
                        src="/system-icons/at.svg"
                        alt="Email"
                        width={18}
                        height={18}
                    />
                    Change eMail
                </button>
                <button
                    className={styles.modalButton}
                    onClick={onPasswordChange}
                >
                    <Image
                        src="/system-icons/key-password.svg"
                        alt="Password"
                        width={18}
                        height={18}
                    />
                    Change password
                </button>
                <button className={styles.modalButton}>
                    <Image
                        src="/system-icons/operator-support.svg"
                        alt="Support"
                        width={18}
                        height={18}
                    />
                    Write to admin
                </button>
            </div>
        </Modal>
    );
};
