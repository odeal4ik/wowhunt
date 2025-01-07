import Image from 'next/image';
import cn from 'classnames';
import styles from './gold-cards.module.css';
import { useState, useEffect } from 'react';

interface GoldCard {
    id: number;
    name: string;
    deliveryTime: string;
    inStock: number;
    count: number;
    price: number;
}

interface GoldCardsProps {
    initialCards: GoldCard[];
    activeRegion: string;
    activeFaction: string;
    onCardsChange?: (cards: GoldCard[]) => void;
}

export function GoldCards({
    initialCards,
    activeRegion,
    activeFaction,
    onCardsChange,
}: GoldCardsProps) {
    const [cards, setCards] = useState(initialCards);
    const [isMoreOrders, setIsMoreOrders] = useState(false);

    useEffect(() => {
        onCardsChange?.(cards);
    }, [cards, onCardsChange]);

    const handleIncreaseAmount = (cardId: number) => {
        setCards((prevCards) =>
            prevCards.map((card) =>
                card.id === cardId ? { ...card, count: card.count + 100 } : card,
            ),
        );
    };

    const handleDecreaseAmount = (cardId: number) => {
        setCards((prevCards) =>
            prevCards.map((card) =>
                card.id === cardId && card.count > 0
                    ? { ...card, count: card.count - 100 }
                    : card,
            ),
        );
    };

    return (
        <div className={styles.cardsWrapper}>
            <div
                className={cn(styles.cards, {
                    [styles.showAll]: isMoreOrders,
                })}>
                {cards.map((card) => (
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
                                onClick={() => handleDecreaseAmount(card.id)}>
                                −
                            </button>
                            <p className={styles.cardAmountValue}>
                                {card.count.toLocaleString()} K
                            </p>
                            <button
                                type="button"
                                className={styles.cardAmountBtn}
                                onClick={() => handleIncreaseAmount(card.id)}>
                                +
                            </button>
                        </div>

                        <div className={styles.cardPrice}>
                            <p className={styles.cardPriceValue}>
                                €{((card.price * card.count) / 100).toFixed(2)}
                            </p>
                            <p className={styles.cardPriceUnit}>For {card.count.toLocaleString()}K</p>
                        </div>

                        <button className={styles.cardBuyButton}>
                            Buy now
                        </button>
                    </div>
                ))}
            </div>
            {cards.length > 1 && (
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