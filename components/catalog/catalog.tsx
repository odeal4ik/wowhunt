/* eslint-disable @next/next/no-img-element */
import styles from './catalog.module.css';
import cn from 'classnames';

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
];

export default function Catalog({ isVisible }: { isVisible: boolean }) {
    return (
        <div className={cn(styles.catalog, { [styles.visible]: isVisible })}>
            <div className={styles.menu}>
                <span className={styles.menuTitle}>CHOOSE THE GAME</span>
                <ul className={styles.menuList}>
                    {gameNames.map((name, index) => (
                        <li key={name} className={styles.menuItem}>
                            <a href="#">
                                <span className={styles.menuImage}>
                                    <img
                                        src={`./catalog-game-icons/catalog-game-icon-${
                                            index + 1
                                        }.svg`}
                                        alt={name}
                                        loading="lazy"
                                    />
                                </span>
                                {name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.categories}>categories</div>
        </div>
    );
}
