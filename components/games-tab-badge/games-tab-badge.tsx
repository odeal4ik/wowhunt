import cn from 'classnames';
import Image from 'next/image';

import { Tag } from '@/queries/games/getHotGamesAndBoosts';

import styles from './games-tab-badge.module.css';

interface GamesTabBadgeProps {
    tags: Tag[];
}

export function GamesTabBadge({ tags }: GamesTabBadgeProps) {
    const getTagStyle = (tagName: string) => {
        return tagName.toLowerCase() === 'hot offer'
            ? styles.hotOffer
            : styles.defaultStylesOffer;
    };

    if (!tags?.length) return null;

    return (
        <div className={styles.badge}>
            {tags.map((tag) => (
                <div
                    key={tag.id}
                    className={cn(styles.offers, getTagStyle(tag.name))}
                    style={{ color: tag.color }}>
                    {tag.name}
                    {tag.icon?.icon && (
                        <Image
                            src={tag.icon.icon}
                            alt={tag.name}
                            width={16}
                            height={16}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}
