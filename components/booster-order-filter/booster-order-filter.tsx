import { useState } from 'react';

import { Icon } from '@/core-components/icon/icon';

import Close from '@/images/system-icons/close.svg';

import styles from './booster-order-filter.module.css';

interface GameNav {
    id: string;
    gameTitle: string;
    gameValue: string;
}
const games = [
    {
        id: '1',
        gameTitle: 'D2',
        gameValue: 'Seals & Triumphs',
    },
    {
        id: '2',
        gameTitle: 'D2',
        gameValue: 'Episode Echoes',
    },
    {
        id: '3',
        gameTitle: 'WoW TWW',
        gameValue: 'Heritage',
    },
    {
        id: '4',
        gameTitle: 'WoW TWW',
        gameValue: '🔥 HOT OFFERS 🔥',
    },
];

export function BoosterOrderFilter() {
    const [selectedGame, setSelectedGame] = useState<GameNav | null>(null);
    return (
        <nav className={styles.gamesNav}>
            {games.map((game) => {
                return (
                    <div
                        key={game.id}
                        className={`${styles.gameItem} ${
                            selectedGame === game ? styles.active : ''
                        }`}
                        onClick={() =>
                            setSelectedGame(selectedGame === game ? null : game)
                        }>
                        <div className={styles.gameInfo}>
                            <span className={styles.gameTitle}>
                                {game.gameTitle}:
                            </span>
                            <span className={styles.gameValue}>
                                {game.gameValue}
                            </span>
                        </div>
                        <div className={styles.closeIcon}>
                            <Icon svg={Close} label="Close" />
                        </div>
                    </div>
                );
            })}
        </nav>
    );
}
