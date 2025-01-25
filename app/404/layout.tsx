'use client';

import { Header } from '@/components/header/header';
import { Sidebar } from '@/components/sidebar/sidebar';
import { Splitter } from '@/components/splitter/splitter';
import { Support } from '@/components/support/support';

import styles from './error-page-layout.module.css';

export default function ErrorPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header isBlured />
            <section className={styles.container}>
                <div className={styles.wrapper}>
                    <Sidebar />
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
