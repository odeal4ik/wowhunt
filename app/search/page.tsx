'use client';

import { GamesCard } from '@/components/games-card/games-card';
import styles from './search.module.css';

const cards = [
    'R6 SIEGE WINS BOOST',
    'Battle Arena',
    'Cosmic Odyssey',
    'Dragon Slayer',
    'Elemental Clash',
    'Fantasy Kingdom',
    'Galactic Wars',
    "Hero's Journey",
];

export default function Search() {
    const searchInput = window.localStorage.getItem('dataSearch');

    return (
        <div className={styles.search}>
            <h1 className={styles.title}>SEARCH RESULTS FOR “{searchInput}”</h1>

            <div className={styles.cards}>
                {cards.map((card) => (
                    <GamesCard key={card} card={card} />
                ))}
            </div>

            <button type="button" className={styles.button}>
                show more
            </button>
        </div>
    );
}
