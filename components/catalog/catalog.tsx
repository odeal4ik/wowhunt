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

    return (
        <div className={cn(styles.catalog, { [styles.visible]: isVisible })}>
            <div className={styles.menu}>
                <span className={styles.menuTitle}>CHOOSE THE GAME</span>

                <ul className={styles.menuList}>
                    {gameNames.map(({ name, icon }) => (
                        <li key={name} className={styles.menuItem}>
                            <a
                                href="#"
                                onMouseOver={() => setActiveCategory(name)}>
                                <span className={styles.menuIcon}>
                                    <Suspense fallback={'Loading...'}>
                                        <Icon svg={icon} />
                                    </Suspense>
                                </span>

                                {name}

                                <span className={styles.menuArrow}>
                                    <Icon svg={Arrow} fill="" />
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <CatalogCategories activeCategory={activeCategory} />
        </div>
    );
}
