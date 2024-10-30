import { useState } from 'react';
import styles from './catalog-burger-button.module.css';
import cn from 'classnames';

export function CatalogBurgerButton({ onClick }: { onClick?: () => void }) {
    const [isActive, setIsActive] = useState(false);

    function toggleCatalog() {
        setIsActive(!isActive);

        if (onClick) {
            onClick();
        }
    }

    return (
        <button
            onClick={toggleCatalog}
            className={cn(styles.burgerBtn, {
                [styles.active]: isActive,
            })}
            type="button">
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
}
