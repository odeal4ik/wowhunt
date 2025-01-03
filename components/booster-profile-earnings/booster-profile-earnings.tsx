import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './booster-profile-earnings.module.css';

interface WithdrawItem {
    method: string;
    amount: number;
    date: string;
    amountWithFees: number;
    status: string;
}

interface BoosterProfileEarningsProps {
    totalEarned: number;
}

export function BoosterProfileEarnings({
    totalEarned,
}: BoosterProfileEarningsProps) {
    const [isWithdrawsOpen, setIsWithdrawsOpen] = useState(false);
    const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);

    useEffect(() => {
        if (!isWithdrawsOpen && !isWithdrawModalOpen) return;

        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsWithdrawsOpen(false);
                setIsWithdrawModalOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscKey);
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isWithdrawsOpen, isWithdrawModalOpen]);

    const withdraws: WithdrawItem[] = [
        {
            method: 'Card',
            amount: 10000,
            date: '21.04.2025',
            amountWithFees: 10120,
            status: 'Status',
        },
        {
            method: 'Card',
            amount: 10000,
            date: '21.04.2025',
            amountWithFees: 10120,
            status: 'Status',
        },
        {
            method: 'Card',
            amount: 10000,
            date: '21.04.2025',
            amountWithFees: 10120,
            status: 'Status',
        },
        {
            method: 'Card',
            amount: 10000,
            date: '21.04.2025',
            amountWithFees: 10120,
            status: 'Status',
        },
        {
            method: 'Card',
            amount: 10000,
            date: '21.04.2025',
            amountWithFees: 10120,
            status: 'Status',
        },
    ];

    return (
        <>
            <div className={styles.container}>
                <p className={styles.label}>Total earned</p>
                <p className={styles.value}>${totalEarned.toLocaleString()}</p>
            </div>

            <div className={styles.buttonsSection}>
                <button
                    className={`${styles.button} ${styles.withdrawButton}`}
                    onClick={() => setIsWithdrawModalOpen(true)}>
                    Withdraw
                </button>
                <button
                    className={`${styles.button} ${styles.myWithdrawButton}`}
                    onClick={() => setIsWithdrawsOpen(true)}>
                    My withdraws
                </button>
            </div>

            {isWithdrawsOpen && (
                <div
                    className={styles.modal}
                    data-visible={isWithdrawsOpen}
                    onClick={() => setIsWithdrawsOpen(false)}>
                    <div
                        className={styles.modalContent}
                        onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h2 className={styles.modalTitle}>My withdraws</h2>
                            <button
                                onClick={() => setIsWithdrawsOpen(false)}
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

                        <div className={styles.desktopWithdraws}>
                            <div className={styles.withdrawsTable}>
                                <div className={styles.tableHeader}>
                                    <p className={styles.tableHeaderCell}>
                                        Method
                                    </p>
                                    <p className={styles.tableHeaderCell}>
                                        Amount
                                    </p>
                                    <p className={styles.tableHeaderCell}>
                                        Date
                                    </p>
                                    <p className={styles.tableHeaderCell}>
                                        Amount with fees
                                    </p>
                                    <p className={styles.tableHeaderCell}>
                                        Status
                                    </p>
                                </div>
                                <div className={styles.tableBody}>
                                    {withdraws.map((withdraw, index) => (
                                        <div
                                            key={index}
                                            className={styles.tableRow}>
                                            <p className={styles.tableCell}>
                                                {withdraw.method}
                                            </p>
                                            <p className={styles.tableCell}>
                                                <b>${withdraw.amount}</b>
                                            </p>
                                            <p className={styles.tableCell}>
                                                {withdraw.date}
                                            </p>
                                            <p className={styles.tableCell}>
                                                <b>
                                                    ${withdraw.amountWithFees}
                                                </b>
                                            </p>
                                            <p className={styles.tableCell}>
                                                {withdraw.status}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className={styles.mobileWithdraws}>
                            <div className={styles.mobileWithdrawsList}>
                                {withdraws.map((withdraw, index) => (
                                    <div
                                        key={index}
                                        className={styles.mobileWithdrawItem}>
                                        <div
                                            className={
                                                styles.mobileWithdrawRow
                                            }>
                                            <p
                                                className={
                                                    styles.mobileWithdrawLabel
                                                }>
                                                Method
                                            </p>
                                            <p
                                                className={
                                                    styles.mobileWithdrawValue
                                                }>
                                                {withdraw.method}
                                            </p>
                                        </div>
                                        <div
                                            className={
                                                styles.mobileWithdrawRow
                                            }>
                                            <p
                                                className={
                                                    styles.mobileWithdrawLabel
                                                }>
                                                Amount
                                            </p>
                                            <p
                                                className={
                                                    styles.mobileWithdrawValue
                                                }>
                                                <b>${withdraw.amount}</b>
                                            </p>
                                        </div>
                                        <div
                                            className={
                                                styles.mobileWithdrawRow
                                            }>
                                            <p
                                                className={
                                                    styles.mobileWithdrawLabel
                                                }>
                                                Date
                                            </p>
                                            <p
                                                className={
                                                    styles.mobileWithdrawValue
                                                }>
                                                {withdraw.date}
                                            </p>
                                        </div>
                                        <div
                                            className={
                                                styles.mobileWithdrawRow
                                            }>
                                            <p
                                                className={
                                                    styles.mobileWithdrawLabel
                                                }>
                                                Amount with fees
                                            </p>
                                            <p
                                                className={
                                                    styles.mobileWithdrawValue
                                                }>
                                                <b>
                                                    ${withdraw.amountWithFees}
                                                </b>
                                            </p>
                                        </div>
                                        <div
                                            className={
                                                styles.mobileWithdrawRow
                                            }>
                                            <p
                                                className={
                                                    styles.mobileWithdrawLabel
                                                }>
                                                Status
                                            </p>
                                            <p
                                                className={
                                                    styles.mobileWithdrawValue
                                                }>
                                                {withdraw.status}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isWithdrawModalOpen && (
                <div
                    className={styles.modal}
                    data-visible={isWithdrawModalOpen}
                    onClick={() => setIsWithdrawModalOpen(false)}>
                    <div
                        className={`${styles.modalContent} ${styles.withdrawModal}`}
                        onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h2 className={styles.modalTitle}>Withdraw</h2>
                            <button
                                onClick={() => setIsWithdrawModalOpen(false)}
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
            )}
        </>
    );
}
