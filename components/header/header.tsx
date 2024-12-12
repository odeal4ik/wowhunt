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
import { SearchWrapper } from '../search-wrapper/search-wrapper';

import Logo from '@/images/logo/logo.svg';

import styles from './header.module.css';

export function Header({ isBlured }: { isBlured?: boolean }) {
    const [isCatalogVisible, setIsCatalogVisible] = useState(false);
    const [isContactVisible, setContactVisible] = useState(true);
    const [isModelVisible, setModelVisible] = useState(true);

    useEffect(() => {
        document.body.style.overflow = isCatalogVisible ? 'hidden' : 'visible';
    }, [isCatalogVisible]);

    useEffect(() => {
        const handleResize = () => {
            setContactVisible(window.innerWidth > 1600);
            setModelVisible(window.innerWidth > 1280);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function toggleCatalogVisibility() {
        setIsCatalogVisible(!isCatalogVisible);
    }

    const handleSearch = (query: string) => {
        localStorage.setItem('dataSearch', query);
        window.location.href = '/search';
    };

    return (
        <header
            className={cn(styles.header, {
                [styles.blured]: isCatalogVisible || isBlured,
            })}
        >
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

                    <SearchWrapper onSearch={handleSearch} />

                    <SupportAndWork
                        isModelVisible={isModelVisible}
                        isContactVisible={isContactVisible}
                    />
                </div>

                <div className={styles.rightWrapper}>
                    <div className={styles.trustAndLanguage}>
                        <a
                            href="https://www.trustpilot.com/review/wowhunt.com"
                            target="_blank"
                            className={styles.trust}
                        >
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

            {isCatalogVisible && (
                <Catalog
                    isVisible={isCatalogVisible}
                    isContactVisible={isContactVisible}
                    isModelVisible={isModelVisible}
                />
            )}
        </header>
    );
}
