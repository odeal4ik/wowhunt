import Image from 'next/image';

import { Icon } from '@/core-components/icon/icon';

import SandClock from '@/images/icons/sand-clock.svg';
import Shield from '@/images/icons/shield.svg';
import Star from '@/images/icons/star.svg';
import TrustpilotStarGreen from '@/images/icons/trastpilot-star-green.svg';

import styles from './hero-block.module.css';

const advantages = [
    {
        icon: Shield,
        title: 'SAFE',
        subTitle: 'Start in 5-15 Minutes',
    },
    {
        icon: Star,
        title: 'TRUST',
        subTitle: (
            <p className={styles.trustSubtitle}>
                Rated 5 stars on{' '}
                <Icon svg={TrustpilotStarGreen} label="Trustpilot" />
                <span>Trustpilot</span>
            </p>
        ),
    },
    {
        icon: SandClock,
        title: 'FAST',
        subTitle: `Start in 5-15 Minutes`,
    },
];

export function HeroBlock() {
    return (
        <section className={styles.hero}>
            <Image
                src="/background/hero_block.png"
                alt="hero"
                loading="lazy"
                width={1920}
                height={650}
                className={styles.heroImg}
            />

            <div className={styles.contentWrapper}>
                <div className={styles.heading}>
                    <h1 className={styles.heroTitle}>
                        Global <span>boosting</span> service
                    </h1>

                    <p className={styles.heroDescription}>
                        Avoid wasting time with pugs
                    </p>
                </div>

                <div className={styles.advantages}>
                    {advantages.map(
                        (
                            advantage, // index
                        ) => (
                            <div
                                className={styles.advantagesItem}
                                // to control order of items from CMS in future
                                // style={{ order: index + 1 }}
                                key={advantage.title}>
                                <div className={styles.advantagesIcon}>
                                    <Icon
                                        svg={advantage.icon}
                                        label={advantage.title}
                                    />
                                </div>
                                <div className={styles.advantagesContent}>
                                    <div className={styles.advantagesTitle}>
                                        {advantage.title}
                                    </div>
                                    <div className={styles.advantagesSubTitle}>
                                        {advantage.subTitle}
                                    </div>
                                </div>
                            </div>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}
