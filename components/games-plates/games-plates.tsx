'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './games-plates.module.css';

const gameNames = [
    'Adventure Quest',
    'Battle Arena',
    'Cosmic Odyssey',
    'Dragon Slayer',
    'Elemental Clash',
    'Fantasy Kingdom',
    'Galactic Wars',
    "Hero's Journey",
    'Island Escape',
    'Jungle Expedition',
    "Knight's Honor",
    'Lost Treasure',
    'Mystic Lands',
    'Ninja Showdown',
    'Ocean Explorer',
    "Pirate's Cove",
    'Quest for Glory',
    'Robot Invasion',
    'Space Frontier',
    'Treasure Hunt',
    'Underworld Adventure',
    'Viking Saga',
    "Wizard's Duel",
    'Xenon Wars',
    "Yeti's Lair",
    'Zombie Apocalypse',
    'Alien Encounter',
    'Battle Royale',
    'Cyberpunk City',
    'Dungeon Crawler',
    'Epic Quest',
    'Fantasy World',
    'Galactic Empire',
    'Heroic Legends',
    'Island Survival',
    'Jungle Safari',
    'Kingdom Conquest',
    'Lost Civilization',
    'Mystic Quest',
    'Ninja Warriors',
    'Ocean Adventure',
    "Pirate's Treasure",
    'Quest for Power',
    'Robot Revolution',
    'Space Odyssey',
    'Treasure Island',
    'Underwater Kingdom',
    'Viking Adventure',
    "Wizard's Quest",
    'Xenon Battle',
    "Yeti's Quest",
    'Zombie Invasion',
    'Alien Wars',
    'Battle Legends',
    'Cyber City',
    'Dungeon Quest',
    'Epic Adventure',
    'Fantasy Realm',
    'Galactic Quest',
    "Hero's Saga",
    'Island Quest',
    'Jungle Adventure',
    'Kingdom Quest',
    'Lost World',
    'Mystic Adventure',
    'Ninja Quest',
    'Ocean Quest',
    "Pirate's Adventure",
    'Quest for Honor',
    'Robot Wars',
    'Space Adventure',
    'Treasure Quest',
    'Underworld Quest',
    'Viking Quest',
    "Wizard's Adventure",
];

export function GamesPlates() {
    const [isMoreGames, setIsMoreGames] = useState(false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.plateWrapper}>
                {/* should be decided about even and odd number of items and grid from design side */}
                {Array.from({ length: !isMoreGames ? 21 : 73 }).map(
                    (_, index) => (
                        <Link
                            href={`/${gameNames[index]
                                .toLowerCase()
                                .replace(/ /g, '-')
                                .replace("'", '')}`}
                            className={styles.plate}
                            key={gameNames[index]}>
                            <Image
                                className={styles.image}
                                src={`/games-icons/game${index + 1}.png`}
                                alt={gameNames[index]}
                                width={90}
                                height={90}
                                loading="lazy"
                            />
                            <span className={styles.label}>
                                {gameNames[index]}
                            </span>
                        </Link>
                    ),
                )}
            </div>

            <button
                type="button"
                className={styles.button}
                onClick={() => setIsMoreGames(!isMoreGames)}>
                {isMoreGames ? `LESS GAMES` : `MORE GAMES`}
            </button>
        </div>
    );
}
