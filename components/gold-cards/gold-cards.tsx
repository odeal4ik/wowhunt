import Image from 'next/image';
import cn from 'classnames';
import styles from './gold-cards.module.css';
import { useState } from 'react';

const goldCards = [
    {
        id: 1,
        name: 'Aegwynn Gold',
        deliveryTime: '10 min delivery time',
        inStock: 15002584,
        count: 100,
        price: 4.38,
    },
    {
        id: 2,
        name: 'Aegwynn Gold',
        deliveryTime: '10 min delivery time',
        inStock: 15002584,
        count: 10500,
        price: 4.38,
    },
    {
        id: 3,
        name: 'Aegwynn Gold',
        deliveryTime: '10 min delivery time',
        inStock: 15002584,
        count: 5300,
        price: 4.38,
    },
    {
        id: 4,
        name: 'Aegwynn Gold',
        deliveryTime: '10 min delivery time',
        inStock: 15002584,
        count: 45700,
        price: 4.38,
    },
    {
        id: 5,
        name: 'Aegwynn Gold',
        deliveryTime: '10 min delivery time',
        inStock: 15002584,
        count: 20600,
        price: 4.38,
    },
    {
        id: 6,
        name: 'Aegwynn Gold',
        deliveryTime: '10 min delivery time',
        inStock: 15002584,
        count: 14600,
        price: 4.38,
    },
    {
        id: 7,
        name: 'Aegwynn Gold',
        deliveryTime: '10 min delivery time',
        inStock: 15002584,
        count: 18700,
        price: 4.38,
    },
    {
        id: 8,
        name: 'Aegwynn Gold',
        deliveryTime: '10 min delivery time',
        inStock: 15002584,
        count: 0,
        price: 4.38,
    },
    {
        id: 9,
        name: 'Aegwynn Gold',
        deliveryTime: '10 min delivery time',
        inStock: 15002584,
        count: 2345600,
        price: 4.38,
    }
];

interface GoldCardsProps {
    activeRegion: string;
    activeFaction: string;
}

interface GoldCard {
    id: number;
    name: string;
    deliveryTime: string;
    inStock: number;
    count: number;
    price: number;
}

export function GoldCards({ activeRegion, activeFaction }: GoldCardsProps) {
    const [cards, setCards] = useState<GoldCard[]>(goldCards);
    const [showAllCards, setShowAllCards] = useState(false);

    const cardsToShow = showAllCards ? cards : cards.slice(0, 8);

    const handleChangeAmount = (cardId: number, newAmount: number) => {
        setCards((prevCards) =>
            prevCards.map((card) =>
                card.id === cardId ? { ...card, count: newAmount } : card,
            ),
        );
    };

    return (
        <div className={styles.cardsWrapper}>
            <div
                className={cn(styles.cards, {
                    [styles.showAll]: showAllCards,
                })}>
                {cardsToShow.map((card) => (
                    <div key={card.id} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <Image
                                src="/system-icons/gold-icon.svg"
                                alt="Gold"
                                width={40}
                                height={40}
                                className={styles.cardIcon}
                            />
                            <div className={styles.cardInfo}>
                                <p className={styles.cardName}>{card.name}</p>
                                <p className={styles.cardDelivery}>
                                    {card.deliveryTime}
                                </p>
                            </div>
                        </div>

                        <div className={styles.cardDetails}>
                            <div className={styles.cardRegion}>
                                <Image
                                    src={`/system-icons/${activeRegion.toLowerCase()}-flag.svg`}
                                    alt={activeRegion}
                                    width={16}
                                    height={16}
                                />
                                <p>{activeRegion}</p>
                            </div>
                            <div className={styles.cardFaction}>
                                <Image
                                    src={`/system-icons/${activeFaction.toLowerCase()}.svg`}
                                    alt={activeFaction}
                                    width={16}
                                    height={16}
                                />
                                <p>{activeFaction}</p>
                            </div>
                        </div>

                        <p className={styles.cardStock}>
                            {card.inStock.toLocaleString()}K in stock
                        </p>

                        <div className={styles.cardAmount}>
                            <button
                                type="button"
                                className={styles.cardAmountBtn}
                                onClick={() => handleChangeAmount(card.id, Math.max(card.count - 100, 0))}>
                                −
                            </button>
                            <p className={styles.cardAmountValue}>
                                {card.count.toLocaleString()} K
                            </p>
                            <button
                                type="button"
                                className={styles.cardAmountBtn}
                                onClick={() => handleChangeAmount(card.id, card.count + 100)}>
                                +
                            </button>
                        </div>

                        <div className={styles.cardPrice}>
                            <p className={styles.cardPriceValue}>
                                €{((card.price * card.count) / 100).toFixed(2)}
                            </p>
                            <p className={styles.cardPriceUnit}>
                                For {card.count.toLocaleString()}K
                            </p>
                        </div>

                        <button className={styles.cardBuyButton}>
                            Buy now
                        </button>
                    </div>
                ))}
            </div>
            {cards.length >= 8 && (
                <button
                    type="button"
                    className={styles.showMore}
                    onClick={() => setShowAllCards(!showAllCards)}>
                    {showAllCards ? 'SHOW LESS' : 'SHOW MORE'}
                </button>
            )}
        </div>
    );
}
