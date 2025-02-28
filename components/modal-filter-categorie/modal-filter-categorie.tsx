import React, { useState } from 'react';

import { Icon } from '@/core-components/icon/icon';

import Destiny2Gold from '@/images/icons-games/destiny2-gold.svg';
import WoWGold from '@/images/icons-games/wow-gold.svg';
import Close from '@/images/system-icons/close.svg';
import Search from '@/images/system-icons/search.svg';

import { useEscapeClose } from '../../hooks/useEscapeClose';
import styles from './modal-filter-categorie.module.css';

interface Category {
    id: string;
    name: string;
    game: string;
    gameIcon: SvgrComponent;
}

const categories: Category[] = [
    {
        id: '1',
        name: 'Nightfalls',
        game: 'Destiny 2',
        gameIcon: Destiny2Gold,
    },
    {
        id: '2',
        name: 'Seals & Triumphs',
        game: 'Destiny 2',
        gameIcon: Destiny2Gold,
    },
    {
        id: '3',
        name: 'Episode Echoes',
        game: 'Destiny 2',
        gameIcon: Destiny2Gold,
    },
    {
        id: '4',
        name: 'Mythic+ Dungeons',
        game: 'WoW TWW',
        gameIcon: WoWGold,
    },
    {
        id: '5',
        name: '🔥 HOT OFFERS 🔥',
        game: 'WoW TWW',
        gameIcon: WoWGold,
    },
    {
        id: '6',
        name: 'Heritage',
        game: 'WoW TWW',
        gameIcon: WoWGold,
    },
];

interface CategoriesModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CategoriesModal({ isOpen, onClose }: CategoriesModalProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<Category[]>(
        [],
    );

    useEscapeClose(isOpen, onClose);

    const filteredCategories = categories.filter((category) => {
        const searchLower = searchQuery.toLowerCase();
        return (
            category.name.toLowerCase().includes(searchLower) ||
            category.game.toLowerCase().includes(searchLower)
        );
    });

    const groupedCategories = filteredCategories.reduce(
        (acc, category) => {
            if (!acc[category.game]) {
                acc[category.game] = [];
            }
            acc[category.game].push(category);
            return acc;
        },
        {} as Record<string, Category[]>,
    );

    const toggleCategory = (category: Category) => {
        setSelectedCategories((prev) => {
            const isSelected = prev.some((c) => c.id === category.id);
            if (isSelected) {
                return prev.filter((c) => c.id !== category.id);
            }
            return [...prev, category];
        });
    };

    const removeCategory = (categoryId: string) => {
        setSelectedCategories((prev) =>
            prev.filter((c) => c.id !== categoryId),
        );
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modal} onClick={onClose}>
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>Choose categories</h2>
                    <button onClick={onClose} className={styles.closeButton}>
                        <Icon svg={Close} />
                    </button>
                </div>

                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        className={styles.searchInput}
                        placeholder="Search games or categories"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className={styles.searchIcon}>
                        <Icon svg={Search} />
                    </div>
                </div>

                <div className={styles.categoriesList}>
                    {Object.entries(groupedCategories).map(
                        ([game, gameCategories]) => (
                            <div key={game} className={styles.gameSection}>
                                <h3 className={styles.gameTitle}>
                                    <Icon
                                        svg={gameCategories[0].gameIcon}
                                        aria-label={game}
                                    />
                                    {game}
                                </h3>
                                <div className={styles.gameCategories}>
                                    {gameCategories.map((category) => (
                                        <div
                                            key={category.id}
                                            className={`${styles.categoryItem} ${
                                                selectedCategories.some(
                                                    (c) => c.id === category.id,
                                                )
                                                    ? styles.selected
                                                    : ''
                                            }`}
                                            onClick={() =>
                                                toggleCategory(category)
                                            }>
                                            <span
                                                className={styles.categoryName}>
                                                {category.name}
                                            </span>
                                            <span
                                                className={`${styles.categoryGame} 
                                                ${
                                                    selectedCategories.some(
                                                        (c) =>
                                                            c.id ===
                                                            category.id,
                                                    )
                                                        ? styles.selected
                                                        : ''
                                                }`}>
                                                {category.game}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ),
                    )}
                </div>

                {selectedCategories.length > 0 && (
                    <div className={styles.selectedSection}>
                        <h3 className={styles.selectedTitle}>Orders</h3>
                        <div className={styles.selectedCategories}>
                            {selectedCategories.map((category) => (
                                <div
                                    key={category.id}
                                    className={styles.selectedCategory}>
                                    <div
                                        className={styles.selectedCategoryInfo}>
                                        <p
                                            className={
                                                styles.selectedCategoryGame
                                            }>
                                            {category.game}:
                                        </p>
                                        <p
                                            className={
                                                styles.selectedCategoryName
                                            }>
                                            {category.name}
                                        </p>
                                    </div>

                                    <button
                                        className={styles.removeCategory}
                                        onClick={() =>
                                            removeCategory(category.id)
                                        }>
                                        <Icon svg={Close} />
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
