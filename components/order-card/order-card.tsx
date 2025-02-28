'use client';
import styles from './order-card.module.css';

import { Icon } from '@/core-components/icon/icon';
import Trash from '@/images/system-icons/trash.svg';

interface OrderCardProps {
    initialData: Array<{
        title: string;
        options: Array<{
            label: string;
            value: string;
        }>;
        price: string;
    }>;
}

export const OrderCard = ({ initialData }: OrderCardProps) => {
    return (
        <div className={styles.cardsList}>
            {initialData.map((card, index) => (
                <div className={styles.card} key={index}>
                    <h3 className={styles.cardTitle}>{card.title}</h3>

                    <div className={styles.cardContent}>
                        <div className={styles.cardOptions}>
                            <p className={styles.cardSubtitle}>
                                Product Options
                            </p>
                            <div className={styles.cardContainer}>
                                <ul className={styles.list}>
                                    {card.options.map((option, i) => (
                                        <li key={i} className={styles.gridItem}>
                                            <span className={styles.label}>
                                                {option.label}:
                                            </span>{' '}
                                            <span className={styles.value}>
                                                {option.value}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className={styles.actions}>
                            <p className={styles.price}>${card.price}</p>
                            <button className={styles.deleteButton}>
                                <Icon svg={Trash} fill="" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
