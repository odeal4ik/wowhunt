'use client';

import { useEffect, useState } from 'react';
import { Header } from '@/components/header/header';
import { Sidebar } from '@/components/sidebar/sidebar';

import styles from './terms-and-condition-layout.module.css';
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
            setIsSidebarVisible(window.innerWidth >= 1024);
        };

        updateSidebarVisibility();
        window.addEventListener('resize', updateSidebarVisibility);
        return () => {
            window.removeEventListener('resize', updateSidebarVisibility);
        };
    }, []);

    return (
        <>
            <Header isBlured />
            <section className={styles.container}>
                <div className={styles.wrapper}>
                    <Sidebar isVisible={isSidebarVisible} />
                    <main className={styles.content}>
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
