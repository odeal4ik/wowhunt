import { Modal } from '@/components/modal/Modal';
import styles from './modal-change-email.module.css';

interface ChangeEmailModalProps {
    isOpen: boolean;
    onClose: () => void;
    currentEmail: string;
}

export const ChangeEmailModal = ({ isOpen, onClose, currentEmail }: ChangeEmailModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Change e-mail">
            <div className={styles.modalForm}>
                <div className={styles.currentEmailContainer}>
                    <p className={styles.currentEmailText}>Your e-mail:</p>
                    <p className={styles.currentEmail}>{currentEmail}</p>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>New E-mail</label>
                    <input
                        type="email"
                        placeholder="Enter new E-mail..."
                        className={styles.input}
                    />
                </div>
                <button className={styles.continueButton}>
                    Continue
                </button>
            </div>
        </Modal>
    );
};
