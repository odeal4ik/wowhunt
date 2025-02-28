import { Icon } from '@/core-components/icon/icon';

import TrustpilotStarGreen from '@/images/icons/trastpilot-star-green.svg';
import FiveStars from '@/images/icons/five-stars.svg';

import styles from './carousel.module.css';

export function Carousel() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.heading}>
                <div className={styles.title}>
                    <Icon svg={TrustpilotStarGreen} aria-label="star" />
                    <p>Trustpilot</p>
                </div>

                <div className={styles.reviews}>
                    <p>Excellent 4.9 out of 5</p>
                    <p>Based on 650 reviews</p>
                </div>
            </div>

            <div className={styles.carousel}>
                {Array.from({ length: 10 }).map((_, index) => (
                    <div className={styles.item} key={index}>
                        <div className={styles.rating}>
                            <a
                                /* add link to review */
                                href="https://www.trustpilot.com/review/wowhunt.com"
                                target="_blank">
                                <Icon svg={FiveStars} aria-label="FiveStars" />
                            </a>
                            <p>Joanna Hargett</p>
                        </div>
                        <div className={styles.review}>
                            <p className={styles.title}>No complaints here!</p>
                            <p className={styles.description}>
                                Always will go to them when I am looking to try
                                a difficult dungeon/raid for the first time. I
                                learn a lot by doing, and since LFR is pretty
                                toxic in WoW, it is hard for a beginner to learn
                                through LFR. I like running with these guys.
                                They&apos;ll carry you through so you can learn
                                the mechanics while running through without
                                stressing out.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
