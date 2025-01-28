import { useState } from 'react';
import styles from './catalog-button.module.css';
import cn from 'classnames';

export function CatalogButton({ onClick }: { onClick?: () => void }) {
    const [isActive, setIsActive] = useState(false);

    function toggleCatalog() {
        setIsActive(!isActive);
        if (onClick) {
            onClick();
        }
    }

    return (
        <button
            className={styles.catalogBtn}
            type="button"
            onClick={toggleCatalog}>
            <div
                className={cn(styles.burgerIcon, {
                    [styles.active]: isActive,
                })}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <span>Catalog</span>
        </button>
    );
}
