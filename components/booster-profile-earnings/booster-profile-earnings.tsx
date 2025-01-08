import { useState } from 'react';
import styles from './booster-profile-earnings.module.css';
import { useEscapeClose } from '../../hooks/useEscapeClose';
import BoosterModalWithdraw from '../booster-modal-withdraw/booster-modal-withdraw';
import BoosterModalMyWithdraw from '../booster-profile-modal-my-withdraw/booster-profile-modal-my-withdraw';

interface BoosterProfileEarningsProps {
    totalEarned: number;
}

export function BoosterProfileEarnings({
    totalEarned,
}: BoosterProfileEarningsProps) {
    const [isWithdrawsModelOpen, setIsWithdrawsModelOpen] = useState(false);
    const [isMyWithdrawModelOpen, setMyIsWithdrawModalOpen] = useState(false);

    useEscapeClose(isWithdrawsModelOpen, () => setIsWithdrawsModelOpen(false));
    useEscapeClose(isMyWithdrawModelOpen, () =>
        setMyIsWithdrawModalOpen(false),
    );

    return (
        <>
            <div className={styles.container}>
                <p className={styles.label}>Total earned</p>
                <p className={styles.value}>${totalEarned.toLocaleString()}</p>
            </div>

            <div className={styles.buttonsSection}>
                <button
                    className={`${styles.button} ${styles.withdrawButton}`}
                    onClick={() => setIsWithdrawsModelOpen(true)}>
                    Withdraw
                </button>
                <button
                    className={`${styles.button} ${styles.myWithdrawButton}`}
                    onClick={() => setMyIsWithdrawModalOpen(true)}>
                    My withdraws
                </button>
            </div>
            {isWithdrawsModelOpen && (
                <BoosterModalWithdraw
                    onClose={() => setIsWithdrawsModelOpen(false)}
                />
            )}

            {isMyWithdrawModelOpen && (
                <BoosterModalMyWithdraw
                    onClose={() => setMyIsWithdrawModalOpen(false)}
                />
            )}
        </>
    );
}
