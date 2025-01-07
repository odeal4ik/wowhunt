'use client';

import { useState } from 'react';
import styles from './booster-profile-card-orders.module.css';
import Image from 'next/image';

export function BoosterProfileCardOrders() {

    const [isMoreOrders, setIsMoreOrders] = useState(false);
    const [activeGame, setActiveGame] = useState<string | null>(null);

    const mockOrders = [
        {
            id: '1',
            game: 'D2: Seals & Triumphs',
            img: '../system-icons/destiny2.svg',
            title: 'Nerub-ar Palace Raid | Heroic + Normal Bundle',
            price: 5.75,
            details: {
                faction: 'Method',
                methodOfCompletion: 'MyPlus Bundle',
                mythicBundle: '3+1 FREE M+ 5',
                timerOption: 'No Timer Guarantee',
                specificDungeons: 'Loot Traders',
                completionSpeed: 'Normal',
                extraOptions: '500K Gold',
            },
            region: '№51719',
            country: 'US',
            countryFlag: '../system-icons/us-flag.svg',
        },
        {
            id: '2',
            game: 'D2: Seals & Triumphs',
            img: '../system-icons/destiny2.svg',
            title: 'Nerub-ar Palace Raid | Heroic + Normal Bundle',
            price: 5.75,
            details: {
                faction: 'Method',
                methodOfCompletion: 'MyPlus Bundle',
                mythicBundle: '3+1 FREE M+ 5',
                timerOption: 'No Timer Guarantee',
                specificDungeons: 'Loot Traders',
                completionSpeed: 'Normal',
                extraOptions: '500K Gold',
            },
            region: '№51719',
            country: 'US',
            countryFlag: '../system-icons/us-flag.svg',
        },
        {
            id: '3',
            game: 'D2: Episode Echoes',
            img: '../system-icons/destiny2.svg',
            title: 'Nerub-ar Palace Raid | Heroic + Normal Bundle',
            price: 5.75,
            details: {
                faction: 'Method',
                methodOfCompletion: 'MyPlus Bundle',
                mythicBundle: '3+1 FREE M+ 5',
                timerOption: 'No Timer Guarantee',
                specificDungeons: 'Specific dungeons (check comments)',
            },
            region: '№51719',
            country: 'US',
            countryFlag: '../system-icons/us-flag.svg',
        },
        {
            id: '4',
            game: 'WoW TWW: Heritage',
            img: '../system-icons/destiny2.svg',
            title: 'Nerub-ar Palace Raid | Heroic + Normal Bundle',
            price: 5.75,
            details: {
                faction: 'Method',
                methodOfCompletion: 'MyPlus Bundle',
                mythicBundle: '3+1 FREE M+ 5',
                timerOption: 'No Timer Guarantee',
            },
            region: '№51719',
            country: 'US',
            countryFlag: '../system-icons/us-flag.svg',
        },
        {
            id: '5',
            game: 'D2: Seals & Triumphs D2: Seals & Triumphs',
            img: '../system-icons/destiny2.svg',
            title: 'Nerub-ar Palace Raid | Heroic + Normal Bundle Nerub-ar Palace Raid | Heroic + Normal Bundle',
            price: 5.75,
            details: {
                faction: 'Method Method Method Method',
                methodOfCompletion:
                    'MyPlus Bundle MyPlus Bundle MyPlus BundleMyPlus Bundle',
                mythicBundle:
                    '3+1 FREE M+ 5 3+1 FREE M+ 5 3+1 FREE M+ 5 3+1 FREE M+ 5',
                timerOption:
                    'No Timer Guarantee No Timer Guarantee No Timer GuaranteeNo Timer Guarantee',
                specificDungeons:
                    'Loot Traders Loot Traders Loot Traders Loot Traders',
                completionSpeed: 'Normal Normal Normal Normal',
                extraOptions: '500K Gold 500K Gold 500K Gold 500K Gold',
            },
            region: '№51719',
            country: 'US',
            countryFlag: '../system-icons/us-flag.svg',
        },
    ];

    if (mockOrders.length === 0) {
        return (
            <div className={styles.noServicesMessage}>
                Just mark which services you can do and we will show you best offers!
            </div>
        );
    }

    const games = Array.from(new Set(mockOrders.map((order) => order.game)));

    const renderDetailRow = (
        label: string,
        value: string | string[] | undefined,
        key: string,
    ) => {
        if (!value) return null;

        if (Array.isArray(value)) {
            return (
                <div key={key} className={styles.row}>
                    <p className={styles.label}>{label}</p>
                    <p className={styles.value}>
                        <p className={styles.dungeonCount}></p>
                        {value.join(', ')}
                    </p>
                </div>
            );
        }

        return (
            <div key={key} className={styles.row}>
                <p className={styles.label}>{label}</p>
                <p className={styles.value}>{value}</p>
            </div>
        );
    };

    const filteredOrders = activeGame
        ? mockOrders.filter((order) => order.game === activeGame)
        : mockOrders;

    return (
        <div className={styles.container}>
            <nav className={styles.gamesNav}>
                {games.map((game) => {
                     mockOrders.find(
                        (order) => order.game === game,
                    );
                    return (
                        <div
                            key={game}
                            className={`${styles.gameItem} ${
                                activeGame === game ? styles.active : ''
                            }`}
                            onClick={() =>
                                setActiveGame(activeGame === game ? null : game)
                            }>
                            {game}
                            <Image
                                className={styles.closeIcon}
                                src="../system-icons/close.svg"
                                alt="Close"
                                width={10}
                                height={10}
                            />
                        </div>
                    );
                })}
            </nav>
            <div
                className={`${styles.wrapper} ${isMoreOrders ? styles.showAll : ''}`}>
                {filteredOrders.map((order) => (
                    <div key={order.id} className={styles.card}>
                        <div className={styles.header}>
                            <div className={styles.gameInfo}>
                                <h3 className={styles.title}>{order.title}</h3>
                                <div className={styles.allianceContainer}>
                                    <Image
                                        className={styles.allianceIcon}
                                        src={order.img}
                                        alt={order.game}
                                        width={15}
                                        height={15}
                                    />
                                    <p className={styles.allianceTitle}>
                                        {order.game}
                                    </p>
                                </div>

                                <p className={styles.price}>
                                    ${order.price.toFixed(2)}
                                </p>
                                <p className={styles.notice}>
                                    Tap the button before talking to a customer
                                    or placing an order.
                                </p>
                            </div>
                        </div>

                        <div className={styles.actions}>
                            <button className={styles.takeButton}>Take</button>
                            <button className={styles.skipButton}>Skip</button>
                        </div>

                        <div className={styles.details}>
                            {Object.entries(order.details).map(
                                ([key, value]) => {
                                    const label = key
                                        .replace(/([A-Z])/g, ' $1')
                                        .trim()
                                        .replace(
                                            /^(\w)(.*)$/,
                                            (match, first, rest) =>
                                                first.toUpperCase() +
                                                rest.toLowerCase(),
                                        );
                                    return renderDetailRow(
                                        label,
                                        value,
                                        `${order.id}-${key}`,
                                    );
                                },
                            )}
                        </div>

                        <div className={styles.footer}>
                            <p className={styles.region}>{order.region}</p>
                            <figure className={styles.country}>
                                <Image
                                    src={order.countryFlag}
                                    alt={order.country}
                                    className={styles.flag}
                                    width={15}
                                    height={10}
                                />
                                <figcaption>{order.country}</figcaption>
                            </figure>
                        </div>
                    </div>
                ))}
            </div>
            {filteredOrders.length > 1 && (
                <button
                    type="button"
                    className={styles.showMore}
                    onClick={() => setIsMoreOrders(!isMoreOrders)}>
                    {isMoreOrders ? 'SHOW LESS' : 'SHOW MORE'}
                </button>
            )}
        </div>
    );
}
