'use client';

import cn from 'classnames';
import { useEffect, useMemo, useState } from 'react';

import { useGetHotGamesAndBoosts } from '@/queries/games/getHotGamesAndBoosts';

import { GamesCard } from '../games-card/games-card';
import styles from './games-tabs.module.css';

export function GamesTabs() {
    const { data: hotGamesAndBoosts, isLoading } = useGetHotGamesAndBoosts();
    const [activeTab, setActiveTab] = useState('');

    const games = useMemo(
        () =>
            hotGamesAndBoosts
                ? hotGamesAndBoosts
                      .sort((a, b) => a.sort - b.sort)
                      .map((game) => game.name)
                : [],
        [hotGamesAndBoosts],
    );

    const activeGame = useMemo(
        () => hotGamesAndBoosts?.find((game) => game.name === activeTab),
        [hotGamesAndBoosts, activeTab],
    );

    const sortedBoosts = useMemo(() => {
        if (!activeGame?.boosts) return [];
        return [...activeGame.boosts].sort((a, b) => a.sort_hots - b.sort_hots);
    }, [activeGame]);

    useEffect(() => {
        if (games.length && !activeTab) {
            setActiveTab(games[0]);
        }
    }, [games, activeTab]);

    if (isLoading || !hotGamesAndBoosts?.length) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.tabControlsWrapper}>
                {games.map((gameName) => (
                    <button
                        key={gameName}
                        type="button"
                        onClick={() => setActiveTab(gameName)}
                        className={cn(styles.tabControl, {
                            [styles.active]: activeTab === gameName,
                        })}>
                        {gameName}
                    </button>
                ))}
            </div>

            <div className={styles.tabsWrapper}>
                {sortedBoosts.map((boost) => (
                    <GamesCard
                        key={boost.id}
                        name={boost.name}
                        slugBoost={boost.slug}
                        price_us={boost.price_us}
                        price_eu={boost.price_eu}
                        sale_us={boost.sale_us}
                        sale_eu={boost.sale_eu}
                        displayed_price_us={boost.displayed_price_us}
                        displayed_price_eu={boost.displayed_price_eu}
                        avatar={boost.avatar}
                        tags={boost.tags}
                    />
                ))}
            </div>
        </div>
    );
}
