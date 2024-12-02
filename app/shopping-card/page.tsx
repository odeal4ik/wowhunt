'use client';
import styles from './shopping-card.module.css';

import { BackButton } from '@/components/backtrack/backtrack';
import { OrderCard } from '@/components/order-card/order-card';
import { CouponForm } from '@/components/coupon-form/coupon-form';
import { FormOrder } from '@/components/form-order/form-order';
import { PaymentMethod } from '@/components/payment-method/payment-method';
import { OrderBuyBtn } from '@/components/order-buy-btn/order-buy-btn';

export default function Search() {
    return (
        <div className={styles.search}>
            <div className={styles.wrapper}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>ORDER DETAILS</h1>
                    <BackButton />
                </div>
                <OrderCard />
                <CouponForm />

                <div className={styles.formContainer}>
                    <div>
                        <p className={styles.titleForm}>
                            <span className={styles.titleFormColor}>
                                Step 1:{' '}
                            </span>
                            Please fill the form{' '}
                        </p>
                        <FormOrder />
                    </div>
                    <div>
                        <p className={styles.titleForm}>
                            <span className={styles.titleFormColor}>
                                Step 2:{' '}
                            </span>
                            How would You like to pay?{' '}
                        </p>
                        <PaymentMethod />
                    </div>
                </div>
                <OrderBuyBtn />
            </div>
        </div>
    );
}
