import React, { useState } from 'react';
import styles from './modal-filter-categorie.module.css';
import Image from 'next/image';
import { useEscapeClose } from '../../hooks/useEscapeClose';

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
        gameIcon: '../../system-icons/destiny2-gold.svg',
    },
    {
        id: '2',
        name: 'Seals & Triumphs',
        game: 'Destiny 2',
        gameIcon: '../../system-icons/destiny2-gold.svg',
    },
    {
        id: '3',
        name: 'Episode Echoes',
        game: 'Destiny 2',
        gameIcon: '../../system-icons/destiny2-gold.svg',
    },
    {
        id: '4',
        name: 'Mythic+ Dungeons',
        game: 'WoW TWW',
        gameIcon: '../../system-icons/wow-gold.svg',
    },
    {
        id: '5',
        name: '🔥 HOT OFFERS 🔥',
        game: 'WoW TWW',
        gameIcon: '../../system-icons/wow-gold.svg',
    },
    {
        id: '6',
        name: 'Heritage',
        game: 'WoW TWW',
        gameIcon: '../../system-icons/wow-gold.svg',
    },
];

interface CategoriesModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CategoriesModal({ isOpen, onClose }: CategoriesModalProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategories, setSelectedCategories]= useState<Category[]>([]);

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
                        <Image
                            src="/system-icons/close.svg"
                            alt="Close"
                            width={14}
                            height={14}
                        />
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
                    <Image
                        src="/system-icons/magnifier-color.svg"
                        alt="Search"
                        width={24}
                        height={24}
                        className={styles.searchIcon}
                    />
                </div>

                <div className={styles.categoriesList}>
                    {Object.entries(groupedCategories).map(
                        ([game, gameCategories]) => (
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
                                    <div className={styles.selectedCategoryInfo}>
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
                                        <Image
                                            src="/system-icons/close.svg"
                                            alt="Close"
                                            width={14}
                                            height={14}
                                        />
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
