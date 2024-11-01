/* eslint-disable @next/next/no-img-element */
import styles from './games-tab-badge.module.css';

export function GamesTabBadge({
    isHotOffer,
    isWeeklyOffer,
}: {
    isHotOffer: boolean;
    isWeeklyOffer: boolean;
}) {
    return (
        <div className={styles.wrapper}>
            {isHotOffer ? (
                <div className={styles.hotOffer}>
                    HOT OFFER{' '}
                    <img
                        src="/badges/flame.svg"
                        alt="hot offer"
                        loading="lazy"
                    />
                </div>
            ) : null}

            {isWeeklyOffer ? (
                <div className={styles.weeklyOffer}>
                    Weekly offer
                    <img
                        src="/badges/clock.svg"
                        alt="weekly offer"
                        loading="lazy"
                    />
                </div>
            ) : null}
        </div>
    );
}
