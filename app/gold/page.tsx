'use client';
import styles from './gold.module.css';

import { useState } from 'react';
import Image from 'next/image';

import { Splitter } from '@/components/splitter/splitter';
import { TabsList } from '@/components/tabs-list/tabs-list';
import { GoldCards } from '@/components/gold-cards/gold-cards';
import { Faq } from '@/components/faq/faq';
import { Steps } from '@/components/steps/steps';
import { RegionFactionServerSelector } from '@/components/region-faction-server-selector/region-faction-server-selector';
import { WhyUsSection } from '@/components/why-us-section/why-us-section';

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
                    src="/images/gold-block.png"
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

            <Splitter
                title="GET STARTED IN 15 MINUTES"
                style={{ paddingBlock: 45 }}
            />

            <Steps />

            <Splitter title="YOU ARE PROTECTED" style={{ paddingBlock: 55 }} />

            <WhyUsSection
                variant="gold"
                image={{
                    src: '/images/whyus_goldpage.png',
                    alt: 'whyus',
                }}
                items={[
                    {
                        icon: '/system-icons/card.svg',
                        alt: 'Card',
                        text: 'Official payment systems',
                    },
                    {
                        icon: '/system-icons/guarantee.svg',
                        alt: 'Guarantee',
                        text: 'Refund guarantee',
                    },
                    {
                        icon: '/system-icons/price.svg',
                        alt: 'Price',
                        text: 'Lowest prices possible',
                    },
                    {
                        icon: '/system-icons/support.svg',
                        alt: 'Support',
                        text: 'Experienced and friendly support',
                    },
                ]}
            />

            <Splitter title="Gold FAQ" style={{ paddingBlock: 60 }} />

            <Faq />
        </div>
    );
}
