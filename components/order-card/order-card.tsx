'use client';
import styles from './order-card.module.css';

import { Icon } from '../../core-components/icon/icon';
import Trash from '../../public/system-icons/trash.svg';

export function OrderCard() {
    const orderCardsData = [
        {
            title: 'VAULT OF GLASS RAID | MASTER',
            options: [
                {
                    label: 'METHOD OF COMPLETION',
                    value: 'Recovery (Piloted)',
                },
                {
                    label: 'YOUR POWER LEVEL',
                    value: 'My Light Level is 1820+',
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

    return (
        <div className={styles.cardsList}>
            {orderCardsData.map((card, index) => (
                <div className={styles.card} key={index}>
                    <h3 className={styles.cardTitle}>{card.title}</h3>

                    <div className={styles.cardContent}>
                        <div className={styles.cardOptions}>
                            <p className={styles.cardSubtitle}>
                                Product Options
                            </p>

                            <ul className={styles.list}>
                                {card.options.map((option, i) => (
                                    <li
                                        key={i}
                                        className={styles.listItem}
                                        style={{
                                            gridColumn: i < 3 ? '1' : '2',
                                            gridRow: i < 3 ? i + 1 : i - 2,
                                        }}>
                                        <span className={styles.label}>
                                            {option.label}:
                                        </span>{' '}
                                        <span className={styles.highlight}>
                                            {option.value}
                                        </span>
                                    </li>
                                ))}
                            </ul>
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
}
