import styles from './payment-method.module.css';
import Image from 'next/image';

export function PaymentMethod() {
    return (
        <div className={styles.payments}>
            {Array.from({ length: 12 }).map((_, index) => (
                <Image
                    key={index}
                    src={`/payments-methods_color/payment${index + 1}.svg`}
                    alt={`payment-${index + 1}`}
                    width={60}
                    height={60}
                    loading="lazy"
                    className={styles.image}
                />
            ))}
        </div>
    );
}
