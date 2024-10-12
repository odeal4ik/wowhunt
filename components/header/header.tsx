'use client';

import { useRef } from 'react';
import styles from './header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.leftWrapper}>
                <a className={styles.logoWrapper}>
                    <img
                        src="./images/logo.svg"
                        alt="logo"
                        className={styles.logo}
                    />

                    <div className={styles.name}>
                        <span>wow</span>
                        <span>hunt</span>
                    </div>
                </a>

                <button className={styles.catalogBtn}>
                    <img src="./images/catalog.png" alt="catalog" />

                    <span>Catalog</span>
                </button>

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
                        <img src="./images/trustpilot.png" alt="trust pilot" />
                        <div className={styles.trustLabel}>
                            TrustScore 4.9 | 650 reviews
                        </div>
                    </a>

                    <div className={styles.languageWrapper}>
                        <div className={styles.languageBtn}>
                            <input id="0" type="radio" name="radio-lang" />
                            <label htmlFor="0">Eu</label>
                        </div>

                        <div className={styles.languageBtn}>
                            <input id="1" type="radio" name="radio-lang" />
                            <label htmlFor="1">Us</label>
                        </div>
                    </div>
                </div>

                <a className={styles.basket} href="/shopping-card">
                    <img src="./images/basket.svg" alt="Basket" />
                </a>
            </div>
        </header>
    );
}
