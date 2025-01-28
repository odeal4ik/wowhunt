'use client';

import { useEffect, useState } from 'react';
import { Header } from '@/components/header/header';
import { Sidebar } from '@/components/sidebar/sidebar';
import { Splitter } from '@/components/splitter/splitter';
import { Support } from '@/components/support/support';

import styles from './privacy-policy-layout.module.css';

export default function PrivacyPolicyLayout({
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
