'use client';

import { BackButton } from '@/components/backtrack/backtrack';
import { CouponForm } from '@/components/coupon-form/coupon-form';
import { FormOrder } from '@/components/form-order/form-order';
import { OrderBuyBtn } from '@/components/order-buy-btn/order-buy-btn';
import { OrderCard } from '@/components/order-card/order-card';
import { OrderEmpty } from '@/components/order-empty/order-empty';
import { PaymentMethod } from '@/components/payment-method/payment-method';

import styles from './shopping-card.module.css';

const orderCardsData = [
    {
        title: 'VAULT OF GLASS RAID | MASTER',
        options: [
            {
                label: 'METHOD OF COMPLETION METHOD OF COMPLETION METHOD OF COMPLETION',
                value: 'Recovery (Piloted) Recovery (Piloted) Recovery (Piloted)Recovery (Piloted)Recovery (Piloted) Recovery (Piloted) Recovery (Piloted)',
            },
            {
                label: 'Extra Options (Together - Cheaper)',
                value: 'Nerubar Mythic 4/8 + 1 Slot Guaranteed',
            },
            {
                label: 'CHOOSE YOUR PLATFORM',
                value: 'PC',
            },
            {
                label: 'CHOOSE YOUR PLATFORM',
                value: 'PC',
            },
            {
                label: 'CHOOSE YOUR PLATFORM',
                value: 'PC',
            },
            {
                label: 'CHOOSE YOUR PLATFORM',
                value: 'PC',
            },
            {
                label: 'CHOOSE YOUR PLATFORM',
                value: 'PC',
            },
            {
                label: 'CHOOSE YOUR PLATFORM',
                value: 'PC',
            },
            {
                label: 'METHOD OF COMPLETION METHOD OF COMPLETION METHOD OF COMPLETION METHOD OF COMPLETION METHOD OF COMPLETION',
                value: 'Recovery (Piloted) Recovery (Piloted) Recovery (Piloted)Recovery (Piloted)Recovery (Piloted) Recovery (Piloted) Recovery (Piloted)',
            },
            {
                label: 'CHOOSE YOUR PLATFORM',
                value: 'PC',
            },
        ],
        price: '999.99',
    },
    {
        title: 'FORTNITE RANKED BATTLE ROYALE',
        options: [
            { label: 'GAME MODE', value: 'Normal' },
            {
                label: 'METHOD OF COMPLETION',
                value: 'Solo (Piloted)',
            },
            {
                label: 'CHOOSE YOUR PLATFORM',
                value: 'PC',
            },
            { label: 'CHOOSE RANK', value: '1-18' },
        ],
        price: '999.99',
    },
];

export default function ShoppingCard() {
    const hasOrders = orderCardsData.length > 0;

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>ORDER DETAILS</h1>
                    <BackButton path="Back to Shopping" />
                </div>
                {hasOrders ? (
                    <OrderCard initialData={orderCardsData} />
                ) : (
                    <OrderEmpty />
                )}
            </div>
            {hasOrders && (
                <>
                    <CouponForm />
                    <div className={styles.formContainer}>
                        <div>
                            <p className={styles.titleForm}>
                                <span className={styles.titleFormColor}>
                                    Step 1:&nbsp;
                                </span>
                                Please fill the form
                            </p>
                            <FormOrder />
                        </div>
                        <div>
                            <p className={styles.titleForm}>
                                <span className={styles.titleFormColor}>
                                    Step 2:&nbsp;
                                </span>
                                Choose payment method
                            </p>
                            <PaymentMethod />
                        </div>
                    </div>
                    <OrderBuyBtn price={999.99} />
                </>
            )}
        </>
    );
}
