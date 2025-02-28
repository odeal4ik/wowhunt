import { useState } from 'react';
import { BoosterOrderCard } from '../booster-order-card/booster-order-card';
import styles from './booster-order-cards.module.css';
import { BoosterOrderFilter } from '../booster-order-filter/booster-order-filter';
import Destiny from '@/images/icons-games/destiny2.svg';

import UEFlag from '@/images/for-cards/eu-flag.svg';
import USFlag from '@/images/for-cards/us-flag.svg';

interface BoosterOrderCard {
    id: number;
    game: string;
    img: SvgrComponent;
    title: string;
    price: number;
    details: {
        label: string;
        value: string;
    }[];
    numberOrder: string;
    country: string;
    countryFlag: SvgrComponent;
}

const orderCards: BoosterOrderCard[] = [
    {
        id: 1,
        game: 'Destiny 2',
        img: Destiny,
        title: 'Nerub-ar Palace Raid | Heroic + Normal Bundle',
        price: 99.2,
        details: [
            {
                label: 'Faction',
                value: 'Alliance',
            },
            {
                label: 'Method of completion',
                value: 'Selfplay',
            },
            {
                label: 'Mythic+ Bundle',
                value: '3+1 FREE M+ 5',
            },
            {
                label: 'Timer Option',
                value: 'No Timer Guarantee',
            },
            {
                label: 'Specific dungeons?',
                value: 'Specific dungeons (Specify in the comments)',
            },
            {
                label: 'Loot Traders',
                value: '+2 Loot Traders',
            },
            {
                label: 'Completion Speed',
                value: 'Normal',
            },
            {
                label: 'Extra Options (Together - Cheaper)',
                value: '500K Gold',
            },
        ],
        numberOrder: '№51719',
        country: 'US',
        countryFlag: USFlag,
    },
    {
        id: 2,
        game: 'Destiny 2',
        img: Destiny,
        title: 'Nerub-ar Palace Raid | Heroic + Normal Bundle',
        price: 99.2,
        details: [
            {
                label: 'Faction',
                value: 'Alliance',
            },
            {
                label: 'Method of completion',
                value: 'Selfplay',
            },
            {
                label: 'Mythic+ Bundle',
                value: '3+1 FREE M+ 5',
            },
            {
                label: 'Timer Option',
                value: 'No Timer Guarantee',
            },
            {
                label: 'Specific dungeons?',
                value: 'Specific dungeons (Specify in the comments)',
            },
            {
                label: 'Loot Traders',
                value: '+2 Loot Traders',
            },
            {
                label: 'Completion Speed',
                value: 'Normal',
            },
            {
                label: 'Extra Options (Together - Cheaper)',
                value: '500K Gold',
            },
        ],
        numberOrder: '№51719',
        country: 'US',
        countryFlag: USFlag,
    },
    {
        id: 3,
        game: 'Destiny 2',
        img: Destiny,
        title: 'Nerub-ar Palace Raid | Heroic + Normal Bundle',
        price: 99.2,
        details: [
            {
                label: 'Faction',
                value: 'Alliance',
            },
            {
                label: 'Method of completion',
                value: 'Selfplay',
            },
            {
                label: 'Mythic+ Bundle',
                value: '3+1 FREE M+ 5',
            },
            {
                label: 'Timer Option',
                value: 'No Timer Guarantee',
            },
            {
                label: 'Specific dungeons?',
                value: 'Specific dungeons (Specify in the comments)',
            },
            {
                label: 'Loot Traders',
                value: '+2 Loot Traders',
            },
            {
                label: 'Completion Speed',
                value: 'Normal',
            },
            {
                label: 'Extra Options (Together - Cheaper)',
                value: '500K Gold',
            },
        ],
        numberOrder: '№51719',
        country: 'UE',
        countryFlag: UEFlag,
    },
    {
        id: 4,
        game: 'Destiny 2',
        img: Destiny,
        title: 'Nerub-ar Palace Raid | Heroic + Normal Bundle',
        price: 99.2,
        details: [
            {
                label: 'Faction',
                value: 'Alliance',
            },
            {
                label: 'Method of completion',
                value: 'Selfplay',
            },
            {
                label: 'Mythic+ Bundle',
                value: '3+1 FREE M+ 5',
            },
            {
                label: 'Timer Option',
                value: 'No Timer Guarantee',
            },
            {
                label: 'Specific dungeons?',
                value: 'Specific dungeons (Specify in the comments)',
            },
            {
                label: 'Loot Traders',
                value: '+2 Loot Traders',
            },
            {
                label: 'Completion Speed',
                value: 'Normal',
            },
            {
                label: 'Extra Options (Together - Cheaper)',
                value: '500K Gold',
            },
        ],
        numberOrder: '№51719',
        country: 'UE',
        countryFlag: UEFlag,
    },
    {
        id: 5,
        game: 'Destiny 2',
        img: Destiny,
        title: 'Nerub-ar Palace Raid | Heroic + Normal Bundle',
        price: 99.2,
        details: [
            {
                label: 'Faction',
                value: 'Alliance',
            },
            {
                label: 'Method of completion',
                value: 'Selfplay',
            },
            {
                label: 'Mythic+ Bundle',
                value: '3+1 FREE M+ 5',
            },
            {
                label: 'Timer Option',
                value: 'No Timer Guarantee',
            },
            {
                label: 'Specific dungeons?',
                value: 'Specific dungeons (Specify in the comments)',
            },
            {
                label: 'Loot Traders',
                value: '+2 Loot Traders',
            },
            {
                label: 'Completion Speed',
                value: 'Normal',
            },
            {
                label: 'Extra Options (Together - Cheaper)',
                value: '500K Gold',
            },
        ],
        numberOrder: '№51719',
        country: 'US',
        countryFlag: USFlag,
    },
    {
        id: 6,
        game: 'Destiny 2',
        img: Destiny,
        title: 'Nerub-ar Palace Raid | Heroic + Normal Bundle',
        price: 99.2,
        details: [
            {
                label: 'Faction',
                value: 'Alliance',
            },
            {
                label: 'Method of completion',
                value: 'Selfplay',
            },
            {
                label: 'Mythic+ Bundle',
                value: '3+1 FREE M+ 5',
            },
            {
                label: 'Timer Option',
                value: 'No Timer Guarantee',
            },
            {
                label: 'Specific dungeons?',
                value: 'Specific dungeons (Specify in the comments)',
            },
            {
                label: 'Loot Traders',
                value: '+2 Loot Traders',
            },
            {
                label: 'Completion Speed',
                value: 'Normal',
            },
            {
                label: 'Extra Options (Together - Cheaper)',
                value: '500K Gold',
            },
        ],
        numberOrder: '№51719',
        country: 'UE',
        countryFlag: UEFlag,
    },
];

export function BoosterOrderCards() {
    const [isMoreOrders, setIsMoreOrders] = useState(false);
    const cardsToShow = isMoreOrders ? orderCards : orderCards.slice(0, 4);

    if (orderCards.length === 0) {
        return (
            <div className={styles.emptyState}>
                <p className={styles.emptyStateText}>
                    Ready to take new order 😊?
                </p>
                <p className={styles.emptyStateTextDescription}>
                    Just mark which services you can do and we will show you
                    best offers!
                </p>
            </div>
        );
    }

    return (
        <>
            <p className={styles.title}>Orders</p>
            <div className={styles.boosterOrderFilter}>
                <BoosterOrderFilter />
            </div>
            <div className={styles.boosterOrderCards}>
                {cardsToShow.map((card) => (
                    <BoosterOrderCard key={card.id} {...card} />
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
        </>
    );
}
