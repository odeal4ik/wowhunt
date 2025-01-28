'use client';

import { Header } from '@/components/header/header';
import { Sidebar } from '@/components/sidebar/sidebar';

import styles from './profile-layout.module.css';

export default function ProfileLayout({
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
                    <main className={styles.content}>{children}</main>
                </div>
            </section>
        </>
    );
}
