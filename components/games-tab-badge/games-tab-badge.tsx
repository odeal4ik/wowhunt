import Image from 'next/image';

import { Tag } from '@/queries/games/getHotGamesAndBoosts';

import styles from './games-tab-badge.module.css';

interface GamesTabBadgeProps {
    tags: Tag[];
}

export function GamesTabBadge({ tags }: GamesTabBadgeProps) {
    const TAG_STYLES: Record<string, string> = {
        'hot offer': styles.hotOffer,
        'weekly offer': styles.weeklyOffer,
    };

    if (!tags?.length) return null;

    return (
        <div className={styles.wrapper}>
            {tags.map((tag) => {
                const tagStyle = TAG_STYLES[tag.name.toLowerCase()] || '';

                return (
                    <div
                        key={tag.id}
                        className={`${styles.offers} ${tagStyle}`}
                        style={{
                            color: tag.color,
                        }}>
                        {tag.name}
                        {tag.icon?.icon && tag.icon.icon !== '' && (
                            <Image
                                src={tag.icon.icon}
                                alt="icon"
                                width={16}
                                height={16}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
