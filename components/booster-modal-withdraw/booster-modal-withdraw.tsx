import Image from 'next/image';
import styles from './booster-modal-withdraw.module.css';
import { useState } from 'react';
import { useEscapeClose } from '../../hooks/useEscapeClose';

interface BoosterModalWithdrawProps {
    onClose: () => void;
}

export default function BoosterModalWithdraw({ onClose }: BoosterModalWithdrawProps) {
    const [isWithdrawsModelOpen, setIsWithdrawsModelOpen] = useState(false);

    useEscapeClose(isWithdrawsModelOpen, () => setIsWithdrawsModelOpen(false));

    return (
        <div
            className={styles.modal}
            onClick={() => onClose()}>
            <div
                className={`${styles.modalContent} ${styles.withdrawModal}`}
                onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>Withdraw</h2>
                    <button
                        onClick={() => onClose()}
                        className={styles.closeButton}>
                        <Image
                            src="/system-icons/close.svg"
                            alt="Close"
                            width={24}
                            height={24}
                            className={styles.closeIcon}
                        />
                    </button>
                </div>

                <div className={styles.withdrawForm}>
                    <div className={styles.withdrawFormGroup}>
                        <label className={styles.withdrawLabel}>
                            Withdraw to
                        </label>
                        <select className={styles.withdrawSelect}>
                            <option>
                                Visa / Mastercard / МИР (СБП cashout)
                            </option>
                        </select>
                        <p className={styles.withdrawCommission}>
                            Commission: 5%, Min: 10$, Max: 99995
                        </p>
                    </div>

                    <div className={styles.withdrawAmountGroup}>
                        <div className={styles.withdrawFormGroup}>
                            <label className={styles.withdrawLabel}>
                                Withdrawal amount
                            </label>
                            <input
                                type="text"
                                className={styles.withdrawInput}
                                placeholder="200,000"
                                defaultValue="200,000"
                            />
                        </div>
                        <div className={styles.withdrawFormGroup}>
                            <label className={styles.withdrawLabel}>
                                Amount with commission
                            </label>
                            <input
                                type="text"
                                className={styles.withdrawInput}
                                value="210,120"
                                disabled
                            />
                        </div>
                    </div>

                    <div className={styles.withdrawFormGroup}>
                        <label className={styles.withdrawLabel}>
                            СБП number
                        </label>
                        <input
                            type="text"
                            className={styles.withdrawInput}
                            placeholder="123456789"
                        />
                    </div>

                    <div className={styles.withdrawFormGroup}>
                        <label className={styles.withdrawLabel}>
                            Country of issuance
                        </label>
                        <input
                            type="text"
                            className={styles.withdrawInput}
                            placeholder="Country of issuance"
                        />
                    </div>

                    <div className={styles.withdrawFormGroup}>
                        <label className={styles.withdrawLabel}>
                            Name and Surname on the card
                        </label>
                        <input
                            type="text"
                            className={styles.withdrawInput}
                            placeholder="Name and Surname on the card"
                        />
                    </div>

                    <div className={styles.withdrawFormGroup}>
                        <label className={styles.withdrawLabel}>
                            Bank Name
                        </label>
                        <input
                            type="text"
                            className={styles.withdrawInput}
                            placeholder="Bank Name"
                        />
                    </div>

                    <button className={styles.withdrawSubmitButton}>
                        Withdraw money
                    </button>

                    <p className={styles.withdrawNote}>
                        Money will be withdrawn in 24 hours
                    </p>
                </div>
            </div>
        </div>
    );
}
