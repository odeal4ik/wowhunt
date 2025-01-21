import styles from './order-buy-btn.module.css';

interface OrderBuyBtnProps {
    price: number;
}

export function OrderBuyBtn({ price }: OrderBuyBtnProps) {
    return (
        <div className={styles.orderTotalContainer}>
            <p className={styles.orderTotalText}>
                Order total:{' '}
                <span className={styles.orderTotalAmount}>${price}</span>
            </p>
            <button className={styles.buyNowButton}>BUY NOW</button>
        </div>
    );
}
