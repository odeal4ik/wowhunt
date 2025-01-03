import React, { useState, useEffect } from 'react';
import styles from './booster-profile-cards-boost.module.css';
import Image from 'next/image';

interface BoosterCard {
    type: 'new' | 'pro' | 'main';
    img: string;
    title: string;
    description: string;
}

const boosterCards: BoosterCard[] = [
    {
        type: 'new',
        img: 'young-booster',
        title: 'Young Booster',
        description: 'Start completing tasks to raise your booster level.',
    },
    {
        type: 'pro',
        img: 'regular-booster',
        title: 'Regular Booster',
        description:
            'To reach the next level you need to have 6 completed orders.',
    },
    {
        type: 'main',
        img: 'main-booster',
        title: 'Main Booster',
        description:
            'To reach the next level you need to have 8 completed orders.',
    },
];

interface Category {
    id: string;
    name: string;
    game: string;
    gameIcon: string;
}

const categories: Category[] = [
    {
        id: '1',
        name: 'Nightfalls',
        game: 'Destiny 2',
        gameIcon: '../../system-icons/destiny2-gold.svg'
    },
    {
        id: '2',
        name: 'Seals & Triumphs',
        game: 'Destiny 2',
        gameIcon: '../../system-icons/destiny2-gold.svg'
    },
    {
        id: '3',
        name: 'Episode Echoes',
        game: 'Destiny 2',
        gameIcon: '../../system-icons/destiny2-gold.svg'
    },
    {
        id: '4',
        name: 'Mythic+ Dungeons',
        game: 'WoW TWW',
        gameIcon: '../../system-icons/wow-gold.svg'
    },
    {
        id: '5',
        name: '🔥 HOT OFFERS 🔥',
        game: 'WoW TWW',
        gameIcon: '../../system-icons/wow-gold.svg'
    },
    {
        id: '6',
        name: 'Heritage',
        game: 'WoW TWW',
        gameIcon: '../../system-icons/wow-gold.svg'
    }
];

interface CategoriesModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function CategoriesModal({ isOpen, onClose }: CategoriesModalProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

    useEffect(() => {
        if (!isOpen) return;

        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscKey);
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isOpen, onClose]);

    const filteredCategories = categories.filter(category => {
        const searchLower = searchQuery.toLowerCase();
        return (
            category.name.toLowerCase().includes(searchLower) ||
            category.game.toLowerCase().includes(searchLower)
        );
    });

    const groupedCategories = filteredCategories.reduce((acc, category) => {
        if (!acc[category.game]) {
            acc[category.game] = [];
        }
        acc[category.game].push(category);
        return acc;
    }, {} as Record<string, Category[]>);

    const toggleCategory = (category: Category) => {
        setSelectedCategories(prev => {
            const isSelected = prev.some(c => c.id === category.id);
            if (isSelected) {
                return prev.filter(c => c.id !== category.id);
            }
            return [...prev, category];
        });
    };

    const removeCategory = (categoryId: string) => {
        setSelectedCategories(prev => prev.filter(c => c.id !== categoryId));
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>Choose categories</h2>
                    <button onClick={onClose} className={styles.closeButton}>
                        <Image
                            src="/system-icons/close.svg"
                            alt="Close"
                            width={24}
                            height={24}
                            className={styles.closeIcon}
                        />
                    </button>
                </div>

                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        className={styles.searchInput}
                        placeholder="Search games or categories"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                    <Image
                        src="/system-icons/magnifier-color.svg"
                        alt="Search"
                        width={24}
                        height={24}
                        className={styles.searchIcon}
                    />
                </div>

                <div className={styles.categoriesList}>
                    {Object.entries(groupedCategories).map(([game, gameCategories]) => (
                        <div key={game} className={styles.gameSection}>
                            <h3 className={styles.gameTitle}>
                                <Image
                                    src={gameCategories[0].gameIcon}
                                    alt={game}
                                    width={24}
                                    height={24}
                                    className={styles.gameIcon}
                                />
                                {game}
                            </h3>
                            <div className={styles.gameCategories}>
                                {gameCategories.map(category => (
                                    <div
                                        key={category.id}
                                        className={`${styles.categoryItem} ${
                                            selectedCategories.some(c => c.id === category.id)
                                                ? styles.selected
                                                : ''
                                        }`}
                                        onClick={() => toggleCategory(category)}>
                                        <span className={styles.categoryName}>
                                            {category.name}
                                        </span>
                                        <span className={styles.categoryGame}>
                                            {category.game}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {selectedCategories.length > 0 && (
                    <div className={styles.selectedSection}>
                        <h3 className={styles.selectedTitle}>Orders</h3>
                        <div className={styles.selectedCategories}>
                            {selectedCategories.map(category => (
                                <div key={category.id} className={styles.selectedCategory}>
                                    <p className={styles.selectedCategoryGame}>
                                        {category.game === 'Destiny 2' ? 'D2' : 'WoW'}:
                                    </p>
                                    <p className={styles.selectedCategoryName}>
                                        {category.name}
                                    </p>
                                    <button
                                        className={styles.removeCategory}
                                        onClick={() => removeCategory(category.id)}>
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className={styles.modalFooter}>
                    <button
                        className={styles.chooseButton}
                        onClick={() => {
                            onClose();
                        }}>
                        Choose
                    </button>
                    <button className={styles.cancelButton} onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export function BoosterProfileCardsBoost() {
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

    return (
        <div className={styles.boosterCardsSection}>
            <div className={styles.boosterStatus}>
                <p className={styles.statusTitle}>Young Booster</p>
                <p className={styles.statusProgress}>0 OF 4 ORDERS</p>
            </div>
            <p className={styles.statusDescription}>
                To reach the next level you need to have 4 completed orders.
            </p>

            <div className={styles.boosterCards}>
                {boosterCards.map((card) => (
                    <div
                        key={card.type}
                        className={`${styles.boosterCard} ${
                            card.type === 'new' ? styles.active : ''
                        }`}>
                        <div className={styles.cardBadge}>
                            <Image
                                src={`/images/${card.img}.png`}
                                alt={`${card.title} badge`}
                                width={47}
                                height={40}
                            />
                        </div>
                        <p className={styles.cardLabel}>{card.type}</p>
                        <div className={styles.cardContent}>
                            <p className={styles.cardTitle}>{card.title}</p>
                            <p className={styles.cardDescription}>
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <button
                className={styles.servicesButton}
                onClick={() => setIsCategoriesOpen(true)}>
                Services that i can do
            </button>

            <CategoriesModal
                isOpen={isCategoriesOpen}
                onClose={() => setIsCategoriesOpen(false)}
            />
        </div>
    );
}
