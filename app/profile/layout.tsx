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

    const { data, isLoading, isError, error } = useGetUser();

    if (isLoading) {
        <div className="">...Loading</div>;
    }

    if (isError) {
        push('/');
    }

    console.log({ data, isError, error });

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
