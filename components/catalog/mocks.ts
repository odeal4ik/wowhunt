import { lazy } from 'react';

export const gameNames = [
    {
        name: 'Adventure Quest',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-1.svg'
                ),
        ),
    },
    {
        name: 'Battle Arena',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-2.svg'
                ),
        ),
    },
    {
        name: 'Cosmic Odyssey',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-3.svg'
                ),
        ),
    },
    {
        name: 'Dragon Slayer',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-4.svg'
                ),
        ),
    },
    {
        name: 'Elemental Clash',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-5.svg'
                ),
        ),
    },
    {
        name: 'Fantasy Kingdom',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-6.svg'
                ),
        ),
    },
    {
        name: 'Galactic Wars',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-7.svg'
                ),
        ),
    },
    {
        name: "Hero's Journey",
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-8.svg'
                ),
        ),
    },
    {
        name: 'Island Escape',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-9.svg'
                ),
        ),
    },
    {
        name: 'Jungle Expedition',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-10.svg'
                ),
        ),
    },
    {
        name: "Knight's Honor",
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-11.svg'
                ),
        ),
    },
    {
        name: 'Lost Treasure',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-12.svg'
                ),
        ),
    },
    {
        name: 'Mystic Lands',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-13.svg'
                ),
        ),
    },
    {
        name: 'Ninja Showdown',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-14.svg'
                ),
        ),
    },
    {
        name: 'Ocean Explorer',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-15.svg'
                ),
        ),
    },
    {
        name: "Pirate's Cove",
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-16.svg'
                ),
        ),
    },
    {
        name: 'Quest for Glory',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-17.svg'
                ),
        ),
    },
    {
        name: 'Robot Invasion',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-18.svg'
                ),
        ),
    },
    {
        name: 'Space Frontier',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-19.svg'
                ),
        ),
    },
    {
        name: 'Treasure Hunt',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-20.svg'
                ),
        ),
    },
    {
        name: 'Underworld Adventure',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-21.svg'
                ),
        ),
    },
    {
        name: 'Viking Saga',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-22.svg'
                ),
        ),
    },
    {
        name: "Wizard's Duel",
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-23.svg'
                ),
        ),
    },
    {
        name: 'Xenon Wars',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-24.svg'
                ),
        ),
    },
    {
        name: "Yeti's Lair",
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-25.svg'
                ),
        ),
    },
    {
        name: 'Zombie Apocalypse',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-26.svg'
                ),
        ),
    },
    {
        name: 'Alien Encounter',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-27.svg'
                ),
        ),
    },
    {
        name: 'Battle Royale',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-28.svg'
                ),
        ),
    },
    {
        name: 'Cyberpunk City',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-29.svg'
                ),
        ),
    },
    {
        name: 'Dungeon Crawler',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-30.svg'
                ),
        ),
    },
    {
        name: 'Epic Quest',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-31.svg'
                ),
        ),
    },
    {
        name: 'Fantasy World',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-32.svg'
                ),
        ),
    },
    {
        name: 'Galactic Empire',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-33.svg'
                ),
        ),
    },
    {
        name: 'Heroic Legends',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-34.svg'
                ),
        ),
    },
    {
        name: 'Island Survival',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-35.svg'
                ),
        ),
    },
    {
        name: 'Jungle Safari',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-36.svg'
                ),
        ),
    },
    {
        name: 'Kingdom Conquest',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-37.svg'
                ),
        ),
    },
    {
        name: 'Lost Civilization',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-38.svg'
                ),
        ),
    },
    {
        name: 'Mystic Quest',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-39.svg'
                ),
        ),
    },
    {
        name: 'Ninja Warriors',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-40.svg'
                ),
        ),
    },
    {
        name: 'Ocean Adventure',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-41.svg'
                ),
        ),
    },
    {
        name: "Pirate's Treasure",
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-42.svg'
                ),
        ),
    },
    {
        name: 'Quest for Power',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-43.svg'
                ),
        ),
    },
    {
        name: 'Robot Revolution',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-44.svg'
                ),
        ),
    },
    {
        name: 'Space Odyssey',
        icon: lazy(
            async () =>
                await import(
                    '@/images/catalog-game-icons/catalog-game-icon-45.svg'
                ),
        ),
    },
];
