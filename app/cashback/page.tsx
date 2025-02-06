'use client';
import Image from 'next/image';
import styles from './cashback.module.css';

export default function Cashback() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.contentInfo}>
                    <h3 className={styles.contentTitle}>
                        Get cashback for every booing and save up to 17%
                    </h3>
                    <p className={styles.contentText}>
                        Get cashback for every booing and save up to 17%Get
                        cashback for every booing and save up to 17%
                    </p>
                </div>
                <Image
                    src="/images/cashback-1.webp"
                    alt="Cashback"
                    width={525}
                    height={600}
                    className={`${styles.contentImg} ${styles.cashback1}`}
                />
            </div>

            <div className={styles.content}>
                <div className={styles.contentInfo}>
                    <p className={styles.contentText}>
                        Get cashback for every booing
                    </p>
                    <h3 className={styles.contentTitle}>
                        Get cashback for every booing
                    </h3>
                    <p className={styles.contentText}>
                        Get cashback for every booing and save up to 17%Get
                        cashback for every booing and save up to 17%
                    </p>
                </div>
                <Image
                    src="/images/cashback-2.webp"
                    alt="Cashback"
                    width={440}
                    height={515}
                    className={`${styles.contentImg} ${styles.cashback1}`}
                />
            </div>

            <div className={styles.content}>
                <Image
                    src="/images/test.png"
                    alt="Cashback"
                    width={491}
                    height={406}
                    className={`${styles.contentImg} ${styles.cashback2}`}
                />
                <div className={styles.contentInfo}>
                    <h3 className={styles.contentTitle}>
                        Get cashback for every booing
                    </h3>
                </div>
            </div>
        </div>
    );
}
