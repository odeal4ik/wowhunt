import { useState } from 'react';

import { ProfileCard } from '../profile-card/profile-card';
import styles from './profile-cards.module.css';

interface OrderCard {
    status: 'delivered' | 'cancelled' | 'in-progress' | 'looking' | 'refunded';
    price: number;
    title: string;
    platform: string;
    startDate: string;
    accFreeHours: string;
    additionalInfo: string;
    id: string;
    details: {
        type: 'additional' | 'normal';
        label: string;
        value: string;
    }[];
}

const orderCards: OrderCard[] = [
    {
        id: '44374532',
        status: 'delivered',
        price: 99.2,
        title: 'Timelost Fatebringer Godroll',
        platform: 'PC',
        startDate: 'MAR 05, 10:00',
        accFreeHours: 'ANY',
        additionalInfo:
            'Number of runs: 1, Express; Difficulty; Full Clear; My light Level is 1320-1335; Add Weekly Master challenge / Guaranteed Timelost Weapon ; 1324',
        details: [
            {
                type: 'normal',
                label: 'PLATFORM',
                value: 'PC',
            },
            {
                type: 'normal',
                label: 'START DATE',
                value: 'MAR 05, 10:00',
            },
            {
                type: 'normal',
                label: 'ACC FREE HOURS',
                value: 'ANY',
            },
            {
                type: 'additional',
                label: '',
                value: 'Number of runs: 1, Express; Difficulty; Full Clear; My light Level is 1320-1335; Add Weekly Master challenge / Guaranteed Timelost Weapon ; 1324',
            },
        ],
    },
    {
        status: 'cancelled',
        price: 149.99,
        title: 'Raid Completion',
        platform: 'PS5',
        startDate: 'MAR 06, 15:30',
        accFreeHours: '24H',
        additionalInfo: 'Full raid completion with all challenges',
        id: '44374533',
        details: [
            {
                type: 'normal',
                label: 'PLATFORM',
                value: 'PS5',
            },
            {
                type: 'normal',
                label: 'START DATE',
                value: 'MAR 06, 15:30',
            },
            {
                type: 'normal',
                label: 'ACC FREE HOURS',
                value: '24H',
            },
            {
                type: 'additional',
                label: '',
                value: 'Full raid completion with all challenges',
            },
        ],
    },
    {
        status: 'in-progress',
        price: 79.99,
        title: 'Weekly Nightfall',
        platform: 'PC',
        startDate: 'MAR 07, 12:00',
        accFreeHours: 'ANY',
        additionalInfo: 'Grandmaster difficulty, guaranteed completion',
        id: '44374534',
        details: [
            {
                type: 'normal',
                label: 'PLATFORM',
                value: 'PC',
            },
            {
                type: 'normal',
                label: 'START DATE',
                value: 'MAR 07, 12:00',
            },
            {
                type: 'normal',
                label: 'ACC FREE HOURS',
                value: 'ANY',
            },
            {
                type: 'additional',
                label: '',
                value: 'Grandmaster difficulty, guaranteed completion',
            },
        ],
    },
    {
        status: 'looking',
        price: 199.99,
        title: 'Trials Flawless',
        platform: 'XBOX',
        startDate: 'MAR 08, 20:00',
        accFreeHours: '12H',
        additionalInfo: 'Flawless run with guaranteed loot',
        id: '44374535',
        details: [
            {
                type: 'normal',
                label: 'PLATFORM',
                value: 'XBOX',
            },
            {
                type: 'normal',
                label: 'START DATE',
                value: 'MAR 08, 20:00',
            },
            {
                type: 'normal',
                label: 'ACC FREE HOURS',
                value: '12H',
            },
            {
                type: 'additional',
                label: '',
                value: 'Flawless run with guaranteed loot',
            },
        ],
    },
    {
        status: 'refunded',
        price: 129.99,
        title: 'Dungeon Bundle',
        platform: 'PC',
        startDate: 'MAR 09, 14:00',
        accFreeHours: '48H',
        additionalInfo: 'All dungeons completion package',
        id: '44374536',
        details: [
            {
                type: 'normal',
                label: 'PLATFORM',
                value: 'PC',
            },
            {
                type: 'normal',
                label: 'START DATE',
                value: 'MAR 09, 14:00',
            },
            {
                type: 'normal',
                label: 'ACC FREE HOURS',
                value: '48H',
            },
            {
                type: 'additional',
                label: '',
                value: 'All dungeons completion package',
            },
        ],
    },
    {
        status: 'cancelled',
        price: 89.99,
        title: 'Exotic Quest',
        platform: 'PS5',
        startDate: 'MAR 10, 11:00',
        accFreeHours: 'ANY',
        additionalInfo: 'Complete exotic quest with all steps',
        id: '44374537',
        details: [
            {
                type: 'normal',
                label: 'PLATFORM',
                value: 'PS5',
            },
            {
                type: 'normal',
                label: 'START DATE',
                value: 'MAR 10, 11:00',
            },
            {
                type: 'normal',
                label: 'ACC FREE HOURS',
                value: 'ANY',
            },
            {
                type: 'additional',
                label: '',
                value: 'Complete exotic quest with all steps',
            },
        ],
    },
    {
        status: 'in-progress',
        price: 159.99,
        title: 'Season Pass Boost',
        platform: 'PC',
        startDate: 'MAR 11, 09:00',
        accFreeHours: '72H',
        additionalInfo: '0-100 season pass levels',
        id: '44374538',
        details: [
            {
                type: 'normal',
                label: 'PLATFORM',
                value: 'PC',
            },
            {
                type: 'normal',
                label: 'START DATE',
                value: 'MAR 11, 09:00',
            },
            {
                type: 'normal',
                label: 'ACC FREE HOURS',
                value: '72H',
            },
            {
                type: 'additional',
                label: '',
                value: '0-100 season pass levels',
            },
        ],
    },
    {
        status: 'looking',
        price: 299.99,
        title: 'Legend Campaign',
        platform: 'XBOX',
        startDate: 'MAR 12, 16:00',
        accFreeHours: '24H',
        additionalInfo: 'Full campaign completion on Legend difficulty',
        id: '44374539',
        details: [
            {
                type: 'normal',
                label: 'PLATFORM',
                value: 'XBOX',
            },
            {
                type: 'normal',
                label: 'START DATE',
                value: 'MAR 12, 16:00',
            },
            {
                type: 'normal',
                label: 'ACC FREE HOURS',
                value: '24H',
            },
            {
                type: 'additional',
                label: '',
                value: 'Full campaign completion on Legend difficulty',
            },
        ],
    },
    {
        status: 'looking',
        price: 299.99,
        title: 'Legend Campaign',
        platform: 'XBOX',
        startDate: 'MAR 12, 16:00',
        accFreeHours: '24H',
        additionalInfo: 'Full campaign completion on Legend difficulty',
        id: '44374540',
        details: [
            {
                type: 'normal',
                label: 'PLATFORM',
                value: 'XBOX',
            },
            {
                type: 'normal',
                label: 'START DATE',
                value: 'MAR 12, 16:00',
            },
            {
                type: 'normal',
                label: 'ACC FREE HOURS',
                value: '24H',
            },
            {
                type: 'additional',
                label: '',
                value: 'Full campaign completion on Legend difficulty',
            },
        ],
    },
];

export function ProfileCards() {
    const [isMoreOrders, setIsMoreOrders] = useState(false);
    const cardsToShow = isMoreOrders ? orderCards : orderCards.slice(0, 4);

    return (
        <div className={styles.wrapper}>
            <div className={styles.cardGrid}>
                {cardsToShow.map((card) => (
                    <ProfileCard key={card.id} {...card} />
                ))}
            </div>
            {orderCards.length > 4 && (
                <button
                    type="button"
                    className={styles.showMore}
                    onClick={() => setIsMoreOrders(!isMoreOrders)}>
                    {isMoreOrders ? 'SHOW LESS' : 'SHOW MORE'}
                </button>
            )}
        </div>
    );
}
