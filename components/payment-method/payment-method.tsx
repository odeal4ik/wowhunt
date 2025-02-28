import { Icon } from '@/core-components/icon/icon';

import Payment1 from '@/images/payment/payments-methods-color/payment1.svg';
import Payment2 from '@/images/payment/payments-methods-color/payment2.svg';
import Payment3 from '@/images/payment/payments-methods-color/payment3.svg';
import Payment4 from '@/images/payment/payments-methods-color/payment4.svg';
import Payment5 from '@/images/payment/payments-methods-color/payment5.svg';
import Payment6 from '@/images/payment/payments-methods-color/payment6.svg';
import Payment7 from '@/images/payment/payments-methods-color/payment7.svg';
import Payment8 from '@/images/payment/payments-methods-color/payment8.svg';
import Payment9 from '@/images/payment/payments-methods-color/payment9.svg';
import Payment10 from '@/images/payment/payments-methods-color/payment10.svg';
import Payment11 from '@/images/payment/payments-methods-color/payment11.svg';
import Payment12 from '@/images/payment/payments-methods-color/payment12.svg';

import styles from './payment-method.module.css';

const paymentIcons = [
    Payment1,
    Payment2,
    Payment3,
    Payment4,
    Payment5,
    Payment6,
    Payment7,
    Payment8,
    Payment9,
    Payment10,
    Payment11,
    Payment12,
];

export function PaymentMethod() {
    return (
        <div className={styles.payments}>
            {paymentIcons.map((icon, index) => (
                <div className={styles.image} key={index}>
                    <Icon
                        svg={icon}
                        aria-label={`payment-${index + 1}`}
                    />
                </div>
            ))}
        </div>
    );
}
