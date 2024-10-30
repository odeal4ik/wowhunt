/* eslint-disable @next/next/no-img-element */
import { GamesTabBadge } from '../games-tab-badge/games-tab-badge';

import styles from './games-card.module.css';

export function GamesCard({ card }: { card: string }) {
    return (
        <div className={styles.card}>
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

            {/* TODO set own rules */}
            <GamesTabBadge
                isHotOffer={card.includes('h')}
                isWeeklyOffer={card.includes('h') || card.includes('d')}
            />

            <div className={styles.content}>
                <span className={styles.label}>{card}</span>

                <div className={styles.price}>
                    <div className={styles.priceTitle}>from</div>
                    <div className={styles.priceAmount}>$1234.5</div>
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
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.6579 10.25H14.9993V8H26.9989C27.8273 8 28.4989 8.67157 28.4989 9.5V21.4996H26.2489V11.841L9.09294 28.9969L7.50195 27.4059L24.6579 10.25Z"
                        fill="#0A0C1E"
                    />
                </svg>
            </button>
        </div>
    );
}
