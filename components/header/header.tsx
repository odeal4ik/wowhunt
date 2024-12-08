/* eslint-disable @next/next/no-img-element */
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import { CatalogButton } from '../catalog-button/catalog-button';
import { Catalog } from '../catalog/catalog';
import { CatalogBurgerButton } from '../catalog-burger-button/catalog-burger-button';
import { Icon } from '../../core-components/icon/icon';
import { SupportAndWork } from '../support-and-work/support-and-work';

import Logo from '@/images/logo/logo.svg';

import styles from './header.module.css';

export function Header({ isBlured }: { isBlured?: boolean }) {
    const [isCatalogVisible, setIsCatalogVisible] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isCatalogVisible ? 'hidden' : 'visible';
    }, [isCatalogVisible]);

    function toggleCatalogVisibility() {
        setIsCatalogVisible(!isCatalogVisible);
    }

    return (
        <header
            className={cn(styles.header, {
                [styles.blured]: isCatalogVisible || isBlured,
            })}>
            <div className={styles.wrapper}>
                <div className={styles.leftWrapper}>
                    <CatalogBurgerButton onClick={toggleCatalogVisibility} />

                    <Link className={styles.logoWrapper} href="/">
                        <Icon svg={Logo} />

                        <div className={styles.name}>
                            <span>wow</span>
                            <span>hunt</span>
                        </div>
                    </Link>

                    <CatalogButton onClick={toggleCatalogVisibility} />

                    <div className={styles.searchWrapper}>
                        <input
                            className={styles.search}
                            type="text"
                            placeholder="Search"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    localStorage.setItem(
                                        'dataSearch',
                                        e.currentTarget.value,
                                    );
                                    window.location.href = '/search';
                                }
                            }}
                        />
                    </div>

                            <SupportAndWork />
                </div>

                <div className={styles.rightWrapper}>
                    <div className={styles.trustAndLanguage}>
                        <a
                            href="https://www.trustpilot.com/review/wowhunt.com"
                            target="_blank"
                            className={styles.trust}>
                            <img
                                src="/images/trustpilot.png"
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
                                    defaultChecked
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
                            src="/images/basket.svg"
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
