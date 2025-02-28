'use client';

import Image from 'next/image';
import { useState } from 'react';

import { GoldCards } from '@/components/gold-cards/gold-cards';
import { RegionFactionServerSelector } from '@/components/region-faction-server-selector/region-faction-server-selector';
import { TabsList } from '@/components/tabs-list/tabs-list';

import styles from './gold.module.css';

const tabs = [
    'Gold TWW',
    'D4 Gold',
    'Gold WoW Hardcore',
    'POE Currencies',
    'TESO Gold',
    'LA Gold',
    'Gold Classic Season of Discovery',
    'Gold Classic Era',
    'Last Epoch Gold',
    'NW Coins',
    'Cataclysm Gold',
    'Tarisland Gold',
];

export default function GoldOrder() {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [activeRegion, setActiveRegion] = useState('EU');
    const [activeFaction, setActiveFaction] = useState('Alliance');

    return (
        <div className={styles.container}>
            <div className={styles.goldImg}>
                <Image
                    src="/background/gold-block.webp"
                    alt="gold-block"
                    fill
                    priority
                    quality={100}
                />
            </div>

            <div className={styles.wrapper}>
                <h3 className={styles.title}>{activeTab}</h3>

                <TabsList
                    tabs={tabs}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    className={styles.tabs}
                    tabClassName={styles.tab}
                    activeTabClassName={styles.active}
                />
                <RegionFactionServerSelector
                    activeRegion={activeRegion}
                    activeFaction={activeFaction}
                    onRegionChange={setActiveRegion}
                    onFactionChange={setActiveFaction}
                />
                <GoldCards
                    activeRegion={activeRegion}
                    activeFaction={activeFaction}
                />
            </div>
        </div>
    );
}
