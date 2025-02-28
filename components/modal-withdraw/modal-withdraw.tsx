import { Icon } from '@/core-components/icon/icon';
import { Select } from '@/core-components/select/select';

import Close from '@/images/system-icons/close.svg';

import { useEscapeClose } from '../../hooks/useEscapeClose';
import styles from './modal-withdraw.module.css';

interface BoosterModalWithdrawProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BoosterModalWithdraw({
    isOpen,
    onClose,
}: BoosterModalWithdrawProps) {
    useEscapeClose(isOpen, onClose);
    if (!isOpen) return null;

    return (
        <div className={styles.modal} onClick={() => onClose()}>
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>Withdraw</h2>
                    <button
                        onClick={() => onClose()}
                        className={styles.closeButton}>
                        <Icon svg={Close} />
                    </button>
                </div>

                <div className={styles.withdrawForm}>
                    <div className={styles.withdrawFormGroup}>
                        <label className={styles.withdrawLabel}>
                            Withdraw to
                        </label>
                        <Select
                            titleStyle={styles.titleStyle}
                            optionsStyle={styles.optionsStyle}
                            options={[
                                'Visa / Mastercard / MIR (CIS cadrs) 1',
                                'Visa / Mastercard / MIR (CIS cadrs) 2',
                                'Visa / Mastercard / MIR (CIS cadrs) 3',
                            ]}
                        />
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
