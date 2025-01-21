import styles from './coupon-form.module.css';

export function CouponForm() {
    return (
        <div className={styles.couponContainer}>
            <input
                type="text"
                className={styles.couponInput}
                placeholder="Coupon code"
            />
            <button className={styles.couponButton}>apply coupon</button>
        </div>
    );
}
