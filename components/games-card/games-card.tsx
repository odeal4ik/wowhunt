import Image from 'next/image';
import Link from 'next/link';

import { Icon } from '@/core-components/icon/icon';

import Arrow from '@/images/for-cards/arrow-right-up.svg';
import Frame from '@/images/for-cards/card-frame.svg';

import { GamesTabBadge } from '../games-tab-badge/games-tab-badge';
import styles from './games-card.module.css';

export function GamesCard({ card }: { card: string }) {
    return (
        <Link href="/game/game-category" className={styles.card}>
            <Image
                className={styles.image}
                src="/images/card.png"
                loading="lazy"
                alt="Game"
                width={295}
                height={422}
            />

            <div className={styles.frame}>
                <Icon svg={Frame} />
            </div>

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
                <Icon svg={Arrow} />
            </button>
        </Link>
    );
}
