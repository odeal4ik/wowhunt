/* eslint-disable @next/next/no-img-element */
import styles from './coupon-form.module.css';

export function CouponForm() {
    return (
        <section className={styles.support}>
            <div className={styles.couponContainer}>
                <input
                    type="text"
                    className={styles.couponInput}
                    placeholder="Coupon code"
                />
                <button className={styles.couponButton}>apply coupon</button>
            </div>
        </section>
    );
}
