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
                {gameCards[activeTab].list.map((card) => (
                    <div className={styles.card} key={card}>
                        <img
                            className={styles.image}
                            src="./images/card.png"
                            alt="card"
                            loading="lazy"
                        />

                        <img
                            className={styles.frame}
                            src="./images/card-frame.svg"
                            alt="frame"
                            loading="lazy"
                        />

                        <div className={styles.content}>
                            <span className={styles.label}>{card}</span>

                            <div className={styles.price}>
                                <div className={styles.priceTitle}>from</div>
                                <div className={styles.priceAmount}>
                                    $1234.5
                                </div>
                            </div>
                        </div>

                        <button type="button" className={styles.button}>
                            <svg
                                width="36"
                                height="37"
                                viewBox="0 0 36 37"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M24.6579 10.25H14.9993V8H26.9989C27.8273 8 28.4989 8.67157 28.4989 9.5V21.4996H26.2489V11.841L9.09294 28.9969L7.50195 27.4059L24.6579 10.25Z"
                                    fill="#0A0C1E"
                                />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
