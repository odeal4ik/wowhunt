'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Icon } from '@/core-components/icon/icon';

import Arrow from '@/images/for-cards/arrow-right-up.svg';
import Frame from '@/images/for-cards/card-frame.svg';

import { Tag } from '@/queries/games/getHotGamesAndBoosts';
import { useRegion } from '@/providers/RegionProvider';

import { GamesTabBadge } from '../games-tab-badge/games-tab-badge';
import styles from './games-card.module.css';

interface GamesCardProps {
    name: string;
    slugBoost: string;
    price_us: string;
    price_eu: string;
    sale_us: string | null;
    sale_eu: string | null;
    displayed_price_us: string;
    displayed_price_eu: string;
    avatar: string;
    tags: Tag[];
}

export function GamesCard({
    name,
    slugBoost,
    sale_eu,
    price_eu,
    displayed_price_eu,
    sale_us,
    price_us,
    displayed_price_us,
    avatar,
    tags,
}: GamesCardProps) {
    const { region } = useRegion();

    const getPriceAndSymbol = () => {
        const prices =
            region === 'us'
                ? {
                      sale: sale_us,
                      displayed: displayed_price_us,
                      regular: price_us,
                      symbol: '$',
                  }
                : {
                      sale: sale_eu,
                      displayed: displayed_price_eu,
                      regular: price_eu,
                      symbol: '€',
                  };

        return {
            price: prices.sale ?? prices.displayed ?? prices.regular,
            symbol: prices.symbol,
        };
    };

    return (
        <Link href={`/game/${slugBoost}`} className={styles.card}>
            <Image
                className={styles.image}
                src={avatar || ''}
                loading="lazy"
                alt="Game"
                width={295}
                height={422}
            />

            <div className={styles.frame}>
                <Icon svg={Frame} label="Frame" />
            </div>

            {/* TODO set own rules */}
            <GamesTabBadge tags={tags} />

            <div className={styles.content}>
                <span className={styles.label}>{name}</span>

                <div className={styles.price}>
                    <div className={styles.priceTitle}>from</div>
                    <div className={styles.priceAmount}>
                        {getPriceAndSymbol().symbol}
                        {getPriceAndSymbol().price}
                    </div>
                </div>
            </div>

            <button type="button" className={styles.button}>
                <Icon svg={Arrow} label="Arrow" />
            </button>
        </Link>
    );
}
