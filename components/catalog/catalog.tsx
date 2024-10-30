import { Suspense, useState } from 'react';
import styles from './catalog.module.css';
import cn from 'classnames';

import Arrow from '../../public/system-icons/arrow-right.svg';

import { Icon } from '../../core-components/icon/icon';
import { gameNames } from './mocks';
import { CatalogCategories } from '../catalog-categories/catalog-categories';

export function Catalog({ isVisible }: { isVisible: boolean }) {
    const [activeCategory, setActiveCategory] = useState<string>(
        gameNames[0].name,
    );

    const [visibleCategory, setVisibleCategory] = useState<string>('');

    function setActiveCategoryVisible() {
        if (window.innerWidth <= 700) {
            console.log(window.innerWidth);
            setVisibleCategory(activeCategory);
            console.log(visibleCategory);
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
                                        <Icon svg={icon} />
                                    </Suspense>
                                </span>

                                {name}

                                <span className={styles.menuArrow}>
                                    <Icon svg={Arrow} fill="" />
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
