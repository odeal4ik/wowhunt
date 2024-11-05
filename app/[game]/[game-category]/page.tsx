'use client';

import { useState } from 'react';
import cn from 'classnames';

import Chevron from '../../../public/system-icons/chevron.svg';

import styles from './game-category.module.css';
import { Icon } from '@/core/icon/icon';

const controls = ["What you'll get", 'Requirements', 'More info', 'Reviews'];

export default function GameCategory() {
    const [activeTab, setActiveTab] = useState(controls[0]);

    return (
        <>
            <h1 className={styles.title}>
                ALL PHASE 1 RAIDS BUNDLE | CATA CLASSIC
            </h1>

            <div className={styles.subtitles}>
                <div className={styles.term}>
                    <span>5-10 Minutes</span>
                    <span>Start in:</span>
                </div>
                <div className={styles.term}>
                    <span>Depends on options</span>
                    <span>Boost completion:</span>
                </div>
            </div>

            {/* Did not understood from design what it should be TABS (how they named in Figma) or anchor links because they match with h5 tags in design  */}
            <div className={styles.tabs}>
                <div className={styles.controls}>
                    {controls.map((control, index) => (
                        <button
                            key={index}
                            type="button"
                            className={cn(styles.control, {
                                [styles.active]: activeTab === control,
                            })}
                            onClick={() => setActiveTab(control)}>
                            {control}
                        </button>
                    ))}
                </div>

                <div className={styles.content}>
                    <p>
                        Raids are the toughest PvE challenge in WoW Cataclysm
                        Classic. Completing them is hard, but the rewards are
                        top-tier as well. Let us Complete All Phase 1 Raids for
                        you!
                    </p>

                    <h3>What you&apos;ll get</h3>
                    <ul className={styles.bold}>
                        <li>
                            All Phase 1 Raids completed within one reset:
                            Bastion of Twilight, Blackwing Descent and Throne of
                            Four Winds;
                        </li>
                        <li>Raid-related Achievements;</li>
                        <li>
                            Chance to get 359 ilvl loot on Normal difficulty;
                        </li>
                        <li>
                            Chance to get 372 ilvl loot on Heroic difficulty;
                        </li>
                        <li>
                            Everything we&apos;ll get on your character during
                            the boost.
                        </li>
                    </ul>

                    <h3>Requirements</h3>
                    <ul>
                        <li>Level 85</li>
                    </ul>

                    <h3>More info</h3>
                    <h5>Boostig methods</h5>

                    <ul>
                        <h5>Piloted:</h5>
                        <li>
                            Our booster will play on your account with all
                            possible safety precautions;
                        </li>
                        <li>
                            It&apos;s not advised to login while we&apos;re
                            working on your order. Directly text your booster in
                            the Discord to get an update on the progress.
                        </li>
                        <h5>Selfplay (Remote):</h5>
                        <li>
                            Install Parsec - this program is proven and is
                            required for this method;
                        </li>
                        <li>
                            Our booster will remotely control your PC and will
                            play as you - maximum safety.
                        </li>
                    </ul>

                    <details className={styles.details}>
                        <summary className={styles.summary}>
                            Why choose Wowhunt?
                            <span className={styles.icon}>
                                <Icon svg={Chevron} />
                            </span>
                        </summary>

                        <p className={styles['details-content']}>
                            🔒 Safety is our №1 priority – all your info and
                            payments are protected with all possible methods;
                            <br />
                            ⚡ We start fast and finish fast – your boost
                            won&apos;t take long from the moment of payment to
                            the moment you&apos;ll enjoy the rewards;
                            <br />✅ Proven service – check our reviews on
                            Trustpilot, we&apos;re trusted by many players!
                        </p>
                    </details>

                    <div className={styles['block-content']}>
                        To buy this service, scroll up, choose all desired
                        options and make an order! <br />
                        🌟Also, don&apos;t forget to check the most popular
                        services for WoW Cataclysm Classic in the 🔥
                    </div>
                </div>
            </div>
        </>
    );
}
