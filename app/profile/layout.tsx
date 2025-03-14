'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Header } from '@/components/header/header';
import { Sidebar } from '@/components/sidebar/sidebar';

import { useGetUser } from '@/queries/auth/getUser';

import styles from './profile-layout.module.css';

export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();

    const { data, isLoading, isError } = useGetUser();

    useEffect(() => {
        if (isError || (!isLoading && !data)) {
            router.push('/');
        }
    }, [isError, data, isLoading, router]);

    return (
        <>
            <Header isBlured />
            <section className={styles.container}>
                <div className={styles.wrapper}>
                    <Sidebar />
                    {isLoading || !data ? (
                        <div className={styles.shimmer}>...Loading</div>
                    ) : (
                        <main className={styles.content}>{children}</main>
                    )}
                </div>
            </section>
        </>
    );
}
