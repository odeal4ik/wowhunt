'use client';

import { Header } from '@/components/header/header';
import { Sidebar } from '@/components/sidebar/sidebar';

import styles from './gold-layout.module.css';

export default function GoldOrderLayout({
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
                    <main>{children}</main>
                </div>
            </section>
        </>
    );
}
