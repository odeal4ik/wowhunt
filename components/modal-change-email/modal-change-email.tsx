import { Modal } from '@/components/modal/Modal';

import styles from './modal-change-email.module.css';

interface ChangeEmailModalProps {
    onClose: () => void;
    email: string;
}

export const ChangeEmailModal = ({ onClose, email }: ChangeEmailModalProps) => {
    return (
        <Modal isOpen onClose={onClose} title="Change e-mail">
            <div className={styles.modalForm}>
                <div className={styles.currentEmailContainer}>
                    <p className={styles.currentEmailText}>Your e-mail:</p>
                    <p className={styles.currentEmail}>{email}</p>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>New E-mail</label>
                    <input
                        type="email"
                        placeholder="Enter new E-mail..."
                        className={styles.input}
                    />
                </div>
                <button className={styles.continueButton}>Continue</button>
            </div>
        </Modal>
    );
};
