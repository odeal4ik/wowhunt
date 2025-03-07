import { useState } from 'react';
import cn from 'classnames';

import { GamesCard } from '../games-card/games-card';

import { Icon } from '@/core-components/icon/icon';
import Chevron from '@/images/system-icons/arrow-сhevron.svg';

import styles from './catalog-categories.module.css';
import { TabsList } from '@/components/tabs-list/tabs-list';

const tabs = [
    'Pandaria Remix',
    '🔥 HOT OFFERS 🔥',
    'SEASON 4 OFFERS',
    'Dragonflight',
    'Shadowlands',
    'TBC Classic',
    'Mystic+ Dengeons',
    'WoW Raids',
    'Dragonflight 10.2.6',
    'Classic',
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
    visibleCategory,
    clearVisibleCategory,
}: {
    activeCategory: string;
    visibleCategory: string;
    clearVisibleCategory: () => void;
}) {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div
            className={cn(styles.categories, {
                [styles.withChoosedCategory]: Boolean(visibleCategory),
            })}>
            <h2 className={styles.title}>
                <button type="button" onClick={clearVisibleCategory}>
                    {activeCategory && <Icon svg={Chevron} label="Chevron" />}
                    {activeCategory}
                </button>
            </h2>

            <TabsList
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                className={styles.tabs}
                tabClassName={styles.tab}
                activeTabClassName={styles.active}
            />

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
