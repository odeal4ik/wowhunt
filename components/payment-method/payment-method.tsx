/* eslint-disable @next/next/no-img-element */
import styles from './payment-method.module.css';

/* import Image from 'next/image'; */

export function PaymentMethod() {
    return (
        <section>
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
        </section>
    );
}
