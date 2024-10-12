'use client';

import { useState } from 'react';
import styles from './games-tabs.module.css';
import cn from 'classnames';

const gameCards = [
    {
        id: 1,
        name: 'Diablo IV',
        list: [
            'Dragon Slayer',
            'Elemental Clash',
            'Fantasy Kingdom',
            'Galactic Wars',
        ],
    },
    {
        id: 2,
        name: 'Destiny 2',
        list: [
            'Dragon Slayer',
            'Elemental Clash',
            'Fantasy Kingdom 2',
            'Fantasy Kingdom',
            'Galactic Wars',
            "Hero's Journey",
        ],
    },
    {
        id: 3,
        name: 'WoW Dragonflight',
        list: [
            'Adventure Quest',
            'Battle Arena',
            'Cosmic Odyssey',
            'Dragon Slayer',
            'Elemental Clash',
            'Fantasy Kingdom',
            'Galactic Wars',
            "Hero's Journey",
        ],
    },
];

const tabs = ['WoW Dragonflight', 'Diablo IV', 'Destiny 2'];

export function GamesTabs() {
    const [activeTab, setActiveTab] = useState(gameCards[1].id);

    return (
        <div className={styles.wrapper}>
            <div className={styles.tabControlsWrapper}>
                {gameCards.map(({ id, name }, index) => (
                    <button
                        key={id}
                        type="button"
                        onClick={() => setActiveTab(index)}
                        className={cn(styles.tabControl, [
                            activeTab === index && styles.active,
                        ])}>
                        {name}
                    </button>
                ))}
            </div>

            <div className={styles.tabsWrapper}>
                {gameCards[activeTab].list.map((card, index) => (
                    <div className={styles.card} key={card}>
                        <img
                            className={styles.image}
                            src="./images/card.png"
                            alt="card"
                            loading="lazy"
                        />

                        <span className={styles.label}>{card}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
