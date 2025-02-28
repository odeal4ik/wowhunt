'use client';

import { Icon } from '@/core-components/icon/icon';
import Trash from '@/images/system-icons/trash.svg';
import styles from './order-empty.module.css';

export function OrderEmpty() {
    return (
        <div className={styles.container}>
            <div className={styles.iconWrapper}>
                <Icon svg={Trash} fill="" />
            </div>
            <p className={styles.text}>Your cart is currently empty</p>
        </div>
    );
}
