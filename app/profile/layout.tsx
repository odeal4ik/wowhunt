'use client';

import { useRouter } from 'next/navigation';

import { Header } from '@/components/header/header';
import { Sidebar } from '@/components/sidebar/sidebar';

import { useGetUser } from '@/queries/auth/getUser';

import styles from './profile-layout.module.css';

export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { push } = useRouter();

    const { isLoading, isError } = useGetUser();

    if (isError) {
        push('/');
        return null;
    }

    return (
        <>
            <Header isBlured />
            <section className={styles.container}>
                <div className={styles.wrapper}>
                    <Sidebar />
                    <main className={styles.content}>
                        {isLoading ? '...Loading' : children}
                    </main>
                </div>
            </section>
        </>
    );
}
