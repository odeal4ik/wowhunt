import { Suspense } from 'react';
import styles from './catalog.module.css';
import cn from 'classnames';

import { Icon } from '../../core-components/icon/icon';
import { gameNames } from './mocks';

export default function Catalog({ isVisible }: { isVisible: boolean }) {
    return (
        <div className={cn(styles.catalog, { [styles.visible]: isVisible })}>
            <div className={styles.menu}>
                <span className={styles.menuTitle}>CHOOSE THE GAME</span>
                <ul className={styles.menuList}>
                    {gameNames.map(({ name, icon }) => (
                        <li key={name} className={styles.menuItem}>
                            <a href="#">
                                <span className={styles.iconWrapper}>
                                    <Suspense fallback={'Loading...'}>
                                        <Icon svg={icon} />
                                    </Suspense>
                                </span>

                                {name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.categories}>categories</div>
        </div>
    );
}
