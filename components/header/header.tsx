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
import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/api/auth/getUser';
import { BtnLogIn } from '../btnLogIn/btnLogIn';

export function Header({ isBlured }: { isBlured?: boolean }) {
    const [isCatalogVisible, setIsCatalogVisible] = useState(false);

    const { data, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: () =>
            getUser({
                token: '1|H2nydiqMc6wFtD7ymhstMcSy1X9nh2pMDkcv9vq0253e0fd4',
            }),
    });

    console.log(data, isLoading);

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

                    <SearchWrapper />

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

                    <Link className={styles.basket} href="/shopping-card">
                        <img
                            src="/images/basket.svg"
                            alt="Basket"
                            loading="lazy"
                        />
                    </Link>
                    <div className={styles.btnLogIn}>
                        <BtnLogIn />
                    </div>
                </div>
            </div>

            {isCatalogVisible && <Catalog isVisible={isCatalogVisible} />}
        </header>
    );
}
