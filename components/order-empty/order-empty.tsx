'use client';

import { Icon } from '../../core-components/icon/icon';
import Trash from '../../public/system-icons/trashBig.svg';
import styles from './order-empty.module.css';

export function OrderEmpty() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.iconWrapper}>
                    <Icon svg={Trash} fill="" />
                </div>
                <p className={styles.text}>Your cart is currently empty</p>
            </div>
        </div>
    );
}
