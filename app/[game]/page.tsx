import { GamesCard } from '@/components/games-card/games-card';
import styles from './game.module.css';

const cards = [
    'R6 SIEGE WINS BOOST',
    'Battle Arena',
    'Cosmic Odyssey',
    'Dragon Slayer',
    'Elemental Clash',
    'Fantasy Kingdom',
    'Galactic Wars',
    'Hero`s Journey',
];

export default function Game() {
    return (
        <div className={styles.game}>
            <h1 className={styles.title}>RAINBOW SIX SIEGE BOOST</h1>
            <p className={styles.subtitle}>
                Here you can find any service for R6 Siege - Ranks, Wins,
                Coaching, Operators Unlock and more. Check our services out and
                don&apos;t forget to use our online chat if you&apos;ll have any
                questions, we&apos;ll be happy to help!
            </p>

            <div className={styles.cards}>
                {cards.map((card) => (
                    <GamesCard key={card} card={card} />
                ))}
            </div>
        </div>
    );
}
