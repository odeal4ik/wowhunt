'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { useGetGames } from '@/queries/games/getGames';

import styles from './games-plates.module.css';

const INITIAL_GAMES_COUNT = 21;

export function GamesPlates() {
    const { data: games } = useGetGames();
    const [showAllGames, setShowAllGames] = useState(false);

    if (!games?.length) return null;

    const visibleGamesCount =
        games.length > INITIAL_GAMES_COUNT && !showAllGames
            ? INITIAL_GAMES_COUNT
            : games.length;

    return (
        <div className={styles.wrapper}>
            <div className={styles.plateWrapper}>
                {games.slice(0, visibleGamesCount).map((game) => {
                    return (
                        <Link
                            href={`/${game.slug}`}
                            className={styles.plate}
                            key={game.id}>
                            <Image
                                className={styles.image}
                                src={game.icon}
                                alt={game.name}
                                width={90}
                                height={90}
                                loading="lazy"
                            />
                            <p className={styles.label}>{game.name}</p>
                        </Link>
                    );
                })}
            </div>

            {games.length > INITIAL_GAMES_COUNT && (
                <button
                    type="button"
                    className={styles.button}
                    onClick={() => setShowAllGames(!showAllGames)}>
                    {showAllGames ? 'LESS GAMES' : 'MORE GAMES'}
                </button>
            )}
        </div>
    );
}
