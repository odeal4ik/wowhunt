'use client';

import { Header } from '@/components/header/header';
import { Sidebar } from '@/components/sidebar/sidebar';

import styles from './contact-layout.module.css';
import { Splitter } from '@/components/splitter/splitter';
import { Support } from '@/components/support/support';

export default function ContactLayout({
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
