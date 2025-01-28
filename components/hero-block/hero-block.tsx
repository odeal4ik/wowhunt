/* eslint-disable @next/next/no-img-element */
import styles from './hero-block.module.css';

const advantages = [
    {
        icon: './images/shield.svg',
        title: 'SAFE',
        subTitle: 'Start in 5-15 Minutes',
    },
    {
        icon: './images/star.svg',
        title: 'TRUST',
        subTitle: `Rated 5 stars <img src="/images/trastpilot-star.svg" alt="trastpilot" /> on <span>Trustpilot</span>`,
    },
    {
        icon: './images/sand-clock.svg',
        title: 'FAST',
        subTitle: `Start in 5-15 Minutes`,
    },
];

export function HeroBlock() {
    return (
        <section className={styles.hero}>
            <img
                src="/images/hero_block.png"
                alt="hero"
                loading="lazy"
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
                                    <img
                                        src={advantage.icon}
                                        alt={advantage.title}
                                        loading="lazy"
                                    />
                                </div>
                                <div className={styles.advantagesContent}>
                                    <div className={styles.advantagesTitle}>
                                        {advantage.title}
                                    </div>
                                    <div
                                        className={styles.advantagesSubTitle}
                                        dangerouslySetInnerHTML={{
                                            __html: advantage.subTitle,
                                        }}
                                    />
                                </div>
                            </div>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}
