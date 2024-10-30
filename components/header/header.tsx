/* eslint-disable @next/next/no-img-element */
'use client';
import cn from 'classnames';
import { useEffect, useState } from 'react';

import { CatalogButton } from '../catalog-button/catalog-button';
import { Catalog } from '../catalog/catalog';
import { CatalogBurgerButton } from '../catalog-burger-button/catalog-burger-button';

import styles from './header.module.css';

export function Header() {
    const [isCatalogVisible, setIsCatalogVisible] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isCatalogVisible ? 'hidden' : 'auto';
    }, [isCatalogVisible]);

    function toggleCatalogVisibility() {
        setIsCatalogVisible(!isCatalogVisible);
    }

    return (
        <header className={styles.header}>
            <div
                className={cn(styles.wrapper, {
                    [styles.blured]: isCatalogVisible,
                })}>
                <div className={styles.leftWrapper}>
                    <CatalogBurgerButton onClick={toggleCatalogVisibility} />

                    <a className={styles.logoWrapper}>
                        <img
                            src="./images/logo.svg"
                            alt="logo"
                            loading="lazy"
                            className={styles.logo}
                        />

                        <div className={styles.name}>
                            <span>wow</span>
                            <span>hunt</span>
                        </div>
                    </a>

                    <CatalogButton onClick={toggleCatalogVisibility} />

                    <div className={styles.searchWrapper}>
                        <input
                            className={styles.search}
                            type="text"
                            placeholder="Search"
                        />
                    </div>

                    <span className={styles.modal}>Work With Us</span>

                    <a href="/" className={styles.contact}>
                        <div className={styles.dot}></div>
                        <span className={styles.label}>Contact Support</span>
                    </a>
                </div>

                <div className={styles.rightWrapper}>
                    <div className={styles.trustAndLanguage}>
                        <a
                            href="https://www.trustpilot.com/review/wowhunt.com"
                            target="_blank"
                            className={styles.trust}>
                            <img
                                src="./images/trustpilot.png"
                                alt="trust pilot"
                                loading="lazy"
                            />
                            <div className={styles.trustLabel}>
                                TrustScore 4.9 | 650 reviews
                            </div>
                        </a>

                        <div className={styles.languageWrapper}>
                            <div className={styles.languageBtn}>
                                <input
                                    id="0"
                                    type="radio"
                                    name="radio-lang"
                                    value="eu"
                                />
                                <label htmlFor="0">Eu</label>
                            </div>

                            <div className={styles.languageBtn}>
                                <input
                                    id="1"
                                    type="radio"
                                    name="radio-lang"
                                    value="us"
                                />
                                <label htmlFor="1">Us</label>
                            </div>
                        </div>
                    </div>

                    <a className={styles.basket} href="/shopping-card">
                        <img
                            src="./images/basket.svg"
                            alt="Basket"
                            loading="lazy"
                        />
                    </a>
                </div>
            </div>

            <Catalog isVisible={isCatalogVisible} />
        </header>
    );
}
