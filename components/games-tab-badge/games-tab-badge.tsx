import { Icon } from '@/core-components/icon/icon';

import Clock from '@/images/for-cards/clock.svg';
import Flame from '@/images/for-cards/flame.svg';

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
                    HOT OFFER <Icon svg={Flame} />
                </div>
            ) : null}

            {isWeeklyOffer ? (
                <div className={styles.weeklyOffer}>
                    Weekly offer
                    <Icon svg={Clock} />
                </div>
            ) : null}
        </div>
    );
}
