'use client';

import cn from 'classnames';
import { Suspense, useState } from 'react';

import { Icon } from '@/core-components/icon/icon';
import Chevron from '@/images/system-icons/arrow-сhevron.svg';
import { CatalogCategories } from '../catalog-categories/catalog-categories';
import { SupportAndWork } from '../support-and-work/support-and-work';
import styles from './catalog.module.css';
import { gameNames } from './mocks';

export function Catalog({ isVisible }: { isVisible: boolean }) {
    const [activeCategory, setActiveCategory] = useState<string>(
        gameNames[0].name,
    );

    const [visibleCategory, setVisibleCategory] = useState<string>('');

    function setActiveCategoryVisible() {
        if (window && window.innerWidth <= 700) {
            setVisibleCategory(activeCategory);
        }
    }

    return (
        <div
            className={cn(styles.catalog, {
                [styles.visible]: isVisible,
            })}>
            <div
                className={cn(styles.menu, {
                    [styles.withChoosedCategory]: Boolean(visibleCategory),
                })}>
                <SupportAndWork location="catalog" />

                <span className={styles.menuTitle}>CHOOSE THE GAME</span>

                <ul className={styles.menuList}>
                    {gameNames.map(({ name, icon }) => (
                        <li key={name} className={styles.menuItem}>
                            <button
                                type="button"
                                onMouseOver={() => setActiveCategory(name)}
                                onClick={setActiveCategoryVisible}>
                                <span className={styles.menuIcon}>
                                    <Suspense fallback={'Loading...'}>
                                        <Icon svg={icon} fill='' />
                                    </Suspense>
                                </span>

                                {name}

                                <span className={styles.menuArrow}>
                                    <Icon svg={Chevron} fill="currentColor" />
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <CatalogCategories
                activeCategory={activeCategory}
                visibleCategory={visibleCategory}
                clearVisibleCategory={() => setVisibleCategory('')}
            />
        </div>
    );
}
