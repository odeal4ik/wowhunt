import { useState } from 'react';
import cn from 'classnames';

import styles from './catalog-categories.module.css';
import { GamesCard } from '../games-card/games-card';

const tabs = [
    'Pandaria Remix',
    'HOT OFFERS 🔥',
    'SEASON 4 OFFERS',
    'WoW Dragonflight',
    'WoW Shadowlands',
    'WoW TBC Classic',
    'Mystic+ Dengeons',
    'WoW Raids',
    'Dragonflight 10.2.6',
    'WoW Classic',
    'WoW Classic TBC',
];

const cards = [
    'R6 SIEGE WINS BOOST',
    'Battle Arena',
    'Cosmic Odyssey',
    'Dragon Slayer',
    'Elemental Clash',
    'Fantasy Kingdom',
    'Galactic Wars',
    "Hero's Journey",
];

export function CatalogCategories({
    activeCategory,
}: {
    activeCategory: string;
}) {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className={styles.categories}>
            <h2 className={styles.title}>{activeCategory}</h2>

            <div className={styles.tabs}>
                <div className={styles.buttons}>
                    {tabs.map((name) => (
                        <button
                            key={name}
                            type="button"
                            onClick={() => setActiveTab(name)}
                            className={cn(styles.btn, [
                                activeTab === name && styles.active,
                            ])}>
                            {name}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.cards}>
                {cards.map((card) => (
                    <GamesCard key={card} card={card} />
                ))}
            </div>

            <button type="button" className={styles.button}>
                DISCOVER ALL
            </button>
        </div>
    );
}
