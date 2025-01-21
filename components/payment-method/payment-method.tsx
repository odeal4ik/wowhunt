import styles from './payment-method.module.css';

export function PaymentMethod() {
    return (
        <div className={styles.payments}>
            {Array.from({ length: 12 }).map((_, index) => (
                <img
                    key={index}
                    src={`/payments-methods_color/payment${index + 1}.svg`}
                    alt={`payment-${index + 1}`}
                    loading="lazy"
                    className={styles.image}
                />
            ))}
        </div>
    );
}
