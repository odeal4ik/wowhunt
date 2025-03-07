import Image from 'next/image';

import { Icon } from '@/core-components/icon/icon';

import Star from '@/images/icons/star.svg';
import Time from '@/images/icons/time.svg';
import TrustpilotStarGreen from '@/images/icons/trastpilot-star-green.svg';
import TrustpilotStar from '@/images/icons/trastpilot-star.svg';
import Chat from '@/images/icons/writting.svg';

import styles from './why-us-section.module.css';

export function WhyUsSection() {
    return (
        <section className={styles.whyUs}>
            <Image
                src="/images/whyus.webp"
                alt="whyus"
                width={631}
                height={613}
                loading="lazy"
                className={styles.image}
            />

            <div className={styles.wrapper}>
                <div className={styles.item}>
                    <div className={styles.iconWrapper}>
                        <Icon svg={Chat} label="chat" />
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.title}>ONLINE 24/7</h3>
                        <p className={styles.text}>
                            You can always ask any question to our operators in
                            live chat.
                        </p>
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.iconWrapper}>
                        <Icon svg={Time} label="time" />
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.title}>FAST DELIVERY</h3>
                        <p className={styles.text}>
                            We will contact you and start working on your order
                            within 5 minutes.
                        </p>
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.iconWrapper}>
                        <Icon svg={Star} label="star" />
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.title}>WE ARE TRUSTED</h3>
                        <p className={styles.text}>
                            We are working in the boost industry since 2011. You
                            can read reviews about us on trustpilot
                        </p>
                        <a
                            className={styles.trust}
                            href="https://www.trustpilot.com/review/wowhunt.com"
                            target="_blank">
                            <div className={styles.trustInfo}>
                                <Icon
                                    svg={TrustpilotStarGreen}
                                    label="star"
                                />
                                <span>Trustpilot</span>
                            </div>
                            <div className={styles.stars}>
                                {[...Array(5)].map((_, index) => (
                                    <Icon
                                        key={index}
                                        svg={TrustpilotStar}
                                        fill="currentColor"
                                        label="star"
                                    />
                                ))}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
