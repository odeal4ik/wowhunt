'use client';

// import { useQuery } from '@tanstack/react-query';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Icon } from '@/core-components/icon/icon';

import { CatalogBurgerButton } from '@/components/catalog-burger-button/catalog-burger-button';

import Logo from '@/images/logo/logo.svg';

import { useGetUser } from '@/queries/auth/getUser';

// import { getUser } from '@/api/auth/getUser';

import { ButtonOpenModalLogIn } from '../button-open-modal-logIn/button-open-modal-logIn';
import { CatalogButton } from '../catalog-button/catalog-button';
import { Catalog } from '../catalog/catalog';
import { ModalSignUp } from '../modal-sing-up/modal-sing-up';
import { SearchWrapper } from '../search-wrapper/search-wrapper';
import { SupportAndWork } from '../support-and-work/support-and-work';
import styles from './header.module.css';

export function Header({ isBlured }: { isBlured?: boolean }) {
    const [isCatalogVisible, setIsCatalogVisible] = useState(false);
    const [isSignUpModalVisible, setSignUpModalVisible] = useState(false);

    const { data: userData } = useGetUser();

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
                            <Image
                                src="/images/trustpilot.png"
                                alt="trust pilot"
                                width={142}
                                height={20}
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
                        <Image
                            src="/system-icons/basket.svg"
                            alt="Basket"
                            width={18}
                            height={18}
                            loading="lazy"
                        />
                    </Link>

                    {/* TODO add loading for button */}
                    {userData ? (
                        <div className={styles.btnLogIn}>LOGOUT</div>
                    ) : (
                        <div className={styles.btnLogIn}>
                            <ButtonOpenModalLogIn />
                        </div>
                    )}
                </div>
            </div>

            {isCatalogVisible && <Catalog isVisible={isCatalogVisible} />}

            {isSignUpModalVisible && (
                <ModalSignUp onClose={() => setSignUpModalVisible(false)} />
            )}
        </header>
    );
}
