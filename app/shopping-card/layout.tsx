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
        const updateSidebarVisibility = () => {
            setIsSidebarVisible(window.innerWidth > 1024);
        };

        // Устанавливаем видимость при первой загрузке
        updateSidebarVisibility();

        // Добавляем слушатель изменения размера окна
        window.addEventListener('resize', updateSidebarVisibility);

        // Убираем слушатель при размонтировании
        return () => {
            window.removeEventListener('resize', updateSidebarVisibility);
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
