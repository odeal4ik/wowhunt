import { Modal } from '@/components/modal/Modal';
import styles from './modal-change-password-profile.module.css';

interface ChangePasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ChangePasswordModal = ({ isOpen, onClose }: ChangePasswordModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Change password">
            <div className={styles.modalFormPassword}>
                <div className={styles.formGroup}>
                    <label className={styles.passwordLabel}>
                        Old password
                    </label>
                    <input
                        type="password"
                        placeholder="Enter old password..."
                        className={styles.passwordInput}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.passwordLabel}>
                        New password
                    </label>
                    <input
                        type="password"
                        placeholder="Enter new password..."
                        className={styles.passwordInput}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.passwordLabel}>
                        Repeat password
                    </label>
                    <input
                        type="password"
                        placeholder="Enter repeat password"
                        className={styles.passwordInput}
                    />
                </div>
                <button className={styles.continueButton}>
                    Continue
                </button>
            </div>
        </Modal>
    );
};
