"use client";

import { useEffect, useState } from 'react';
import { Header } from '@/components/header/header';
import { Breadcrumbs } from '@/components/breadcrumbs/breadcrumbs';
import { Sidebar } from '@/components/sidebar/sidebar';

import styles from './shopping-card-layout.module.css';
import { Splitter } from '@/components/splitter/splitter';
import { Support } from '@/components/support/support';

export default function ShoppingCardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 1024px)');
        
        const updateSidebarVisibility = (e: MediaQueryListEvent | MediaQueryList) => {
            setIsSidebarVisible(e.matches);
        };

        // Устанавливаем начальное состояние
        updateSidebarVisibility(mediaQuery);

        // Добавляем слушатель изменения медиа-запроса
        mediaQuery.addEventListener('change', updateSidebarVisibility);

        // Убираем слушатель при размонтировании
        return () => {
            mediaQuery.removeEventListener('change', updateSidebarVisibility);
        };
    }, []);

    return (
        <>
            <Header isBlured />

            <section className={styles.shoppingCardContainer}>
                <div className={styles.wrapper}>
                    <Sidebar isVisible={isSidebarVisible} />

                    <main className={styles.content}>
                        <Breadcrumbs />
                        {children}

                        <div className={styles.other}>
                            <Splitter title="24/7 ONLINE SUPPORT" />
                            <Support />
                        </div>
                    </main>
                </div>
            </section>
        </>
    );
}
