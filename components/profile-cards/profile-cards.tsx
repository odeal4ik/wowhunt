import { useState } from 'react';

import { useGetOrders } from '@/queries/orders/getOrders';

import { ProfileCard } from '../profile-card/profile-card';
import styles from './profile-cards.module.css';

interface OrderCard {
    status: 'delivered' | 'cancelled' | 'in-progress' | 'looking' | 'refunded';
    platform: string;
    startDate: string;
    accFreeHours: string;
    additionalInfo: string;
    details: {
        type: 'additional' | 'normal';
        label: string;
        value: string;
    }[];
}

const orderCards: OrderCard[] = [
    {
        status: 'refunded',
        platform: 'PC',
        startDate: 'MAR 09, 14:00',
        accFreeHours: '48H',
        additionalInfo: 'All dungeons completion package',
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
        status: 'delivered',
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
        platform: 'PS5',
        startDate: 'MAR 06, 15:30',
        accFreeHours: '24H',
        additionalInfo: 'Full raid completion with all challenges',
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
        platform: 'PC',
        startDate: 'MAR 07, 12:00',
        accFreeHours: 'ANY',
        additionalInfo: 'Grandmaster difficulty, guaranteed completion',
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
        platform: 'XBOX',
        startDate: 'MAR 08, 20:00',
        accFreeHours: '12H',
        additionalInfo: 'Flawless run with guaranteed loot',
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
        status: 'cancelled',
        platform: 'PS5',
        startDate: 'MAR 10, 11:00',
        accFreeHours: 'ANY',
        additionalInfo: 'Complete exotic quest with all steps',
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
        platform: 'PC',
        startDate: 'MAR 11, 09:00',
        accFreeHours: '72H',
        additionalInfo: '0-100 season pass levels',
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
        platform: 'XBOX',
        startDate: 'MAR 12, 16:00',
        accFreeHours: '24H',
        additionalInfo: 'Full campaign completion on Legend difficulty',
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
        platform: 'XBOX',
        startDate: 'MAR 12, 16:00',
        accFreeHours: '24H',
        additionalInfo: 'Full campaign completion on Legend difficulty',
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
    const { data: orders, isSuccess, isLoading } = useGetOrders();

    const [isMoreOrders, setIsMoreOrders] = useState(false);

    if (isLoading) {
        return (
            <div className={styles.loading}>
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className={styles.item} />
                ))}
            </div>
        );
    }

    if (!isSuccess) {
        return null;
    }

    console.log(orders.data);

    const cardsToShow = isMoreOrders ? orderCards : orderCards.slice(0, 4);

    return (
        <div className={styles.wrapper}>
            <div className={styles.cardGrid}>
                {orders.data.map((order, index) => (
                    <ProfileCard
                        key={order.id}
                        order={order}
                        {...cardsToShow[index]}
                    />
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
