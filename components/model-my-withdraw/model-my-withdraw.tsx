import Image from 'next/image';
import styles from './model-my-withdraw.module.css';
import { useEscapeClose } from '../../hooks/useEscapeClose';

interface WithdrawItem {
    method: string;
    amount: number;
    date: string;
    amountWithFees: number;
    status: string;
}

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

interface ModalMyWithdrawProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ModalMyWithdraw({
    isOpen,
    onClose,
}: ModalMyWithdrawProps) {

    useEscapeClose(isOpen, onClose);

    return (
        <div className={styles.modal} onClick={() => onClose()}>
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>My withdraws</h2>
                    <button
                        onClick={() => onClose()}
                        className={styles.closeButton}>
                        <Image
                            src="/system-icons/close.svg"
                            alt="Close"
                            width={14}
                            height={14}
                            className={styles.closeIcon}
                        />
                    </button>
                </div>

                <div className={styles.desktopWithdraws}>
                    <div className={styles.withdrawsTable}>
                        <div className={styles.tableHeader}>
                            <p className={styles.tableHeaderCell}>Method</p>
                            <p className={styles.tableHeaderCell}>Amount</p>
                            <p className={styles.tableHeaderCell}>Date</p>
                            <p className={styles.tableHeaderCell}>
                                Amount with fees
                            </p>
                            <p className={styles.tableHeaderCell}>Status</p>
                        </div>
                        <div className={styles.tableBody}>
                            {withdraws.map((withdraw, index) => (
                                <div key={index} className={styles.tableRow}>
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
                                        <b>${withdraw.amountWithFees}</b>
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
                                <div className={styles.mobileWithdrawRow}>
                                    <p className={styles.mobileWithdrawLabel}>
                                        Method
                                    </p>
                                    <p className={styles.mobileWithdrawValue}>
                                        {withdraw.method}
                                    </p>
                                </div>
                                <div className={styles.mobileWithdrawRow}>
                                    <p className={styles.mobileWithdrawLabel}>
                                        Amount
                                    </p>
                                    <p className={styles.mobileWithdrawValue}>
                                        <b>${withdraw.amount}</b>
                                    </p>
                                </div>
                                <div className={styles.mobileWithdrawRow}>
                                    <p className={styles.mobileWithdrawLabel}>
                                        Date
                                    </p>
                                    <p className={styles.mobileWithdrawValue}>
                                        {withdraw.date}
                                    </p>
                                </div>
                                <div className={styles.mobileWithdrawRow}>
                                    <p className={styles.mobileWithdrawLabel}>
                                        Amount with fees
                                    </p>
                                    <p className={styles.mobileWithdrawValue}>
                                        <b>${withdraw.amountWithFees}</b>
                                    </p>
                                </div>
                                <div className={styles.mobileWithdrawRow}>
                                    <p className={styles.mobileWithdrawLabel}>
                                        Status
                                    </p>
                                    <p className={styles.mobileWithdrawValue}>
                                        {withdraw.status}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
