/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';

import cn from 'classnames';

import { GamesCard } from '../games-card/games-card';

import styles from './games-tabs.module.css';

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
            'R6 SIEGE WINS BOOST',
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
                {gameCards[activeTab].list.map((card) => (
                    <GamesCard key={card} card={card} />
                ))}
            </div>
        </div>
    );
}
