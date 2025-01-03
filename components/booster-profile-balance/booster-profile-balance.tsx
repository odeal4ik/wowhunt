import styles from './booster-profile-balance.module.css';

interface BoosterProfileBalanceProps {
    balance: number;
}

export function BoosterProfileBalance ({
    balance,
}: BoosterProfileBalanceProps) {
    return (
        <>
            <div className={styles.container}>
                <p className={styles.label}>Balance</p>
                <p className={styles.value}>
                    ${balance.toLocaleString()}
                </p>
            </div>

            <div className={styles.container}>
                <p className={styles.label}>Last order</p>
                <p className={`${styles.value} ${styles.lastOrder}`}>-</p>
            </div>
        </>
    );
};
