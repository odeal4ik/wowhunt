/* eslint-disable @next/next/no-img-element */
import styles from './order-buy-btn.module.css';

export function OrderBuyBtn() {
    return (
        <section className={styles.support}>
            <div className={styles.orderTotalContainer}>
                <p className={styles.orderTotalText}>
                    Order total:{' '}
                    <span className={styles.orderTotalAmount}>$9999.99</span>
                </p>
                <button className={styles.buyNowButton}>BUY NOW</button>
            </div>
        </section>
    );
}
