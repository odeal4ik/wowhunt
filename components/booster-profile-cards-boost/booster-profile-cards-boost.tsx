import React, { useState } from 'react';
import styles from './booster-profile-cards-boost.module.css';
import Image from 'next/image';
import { CategoriesModal } from '../booster-modal-categories/booster-modal-categories';

interface BoosterCard {
    type: 'new' | 'pro' | 'main';
    img: string;
    title: string;
    description: string;
}

const boosterCards: BoosterCard[] = [
    {
        type: 'new',
        img: 'young-booster',
        title: 'Young Booster',
        description: 'Start completing tasks to raise your booster level.',
    },
    {
        type: 'pro',
        img: 'regular-booster',
        title: 'Regular Booster',
        description:
            'To reach the next level you need to have 6 completed orders.',
    },
    {
        type: 'main',
        img: 'main-booster',
        title: 'Main Booster',
        description:
            'To reach the next level you need to have 8 completed orders.',
    },
];

export function BoosterProfileCardsBoost() {
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

    return (
        <div className={styles.boosterCardsSection}>
            <div className={styles.boosterStatus}>
                <p className={styles.statusTitle}>Young Booster</p>
                <p className={styles.statusProgress}>0 OF 4 ORDERS</p>
            </div>
            <p className={styles.statusDescription}>
                To reach the next level you need to have 4 completed orders.
            </p>

            <div className={styles.boosterCards}>
                {boosterCards.map((card) => (
                    <div
                        key={card.type}
                        className={`${styles.boosterCard} ${
                            card.type === 'new' ? styles.active : ''
                        }`}>
                        <div className={styles.cardBadge}>
                            <Image
                                src={`/images/${card.img}.png`}
                                alt={`${card.title} badge`}
                                width={47}
                                height={40}
                            />
                        </div>
                        <p className={styles.cardLabel}>{card.type}</p>
                        <div className={styles.cardContent}>
                            <p className={styles.cardTitle}>{card.title}</p>
                            <p className={styles.cardDescription}>
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <button
                className={styles.servicesButton}
                onClick={() => setIsCategoriesOpen(true)}>
                Services that i can do
            </button>

            <CategoriesModal
                isOpen={isCategoriesOpen}
                onClose={() => setIsCategoriesOpen(false)}
            />
        </div>
    );
}
