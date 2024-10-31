import Link from 'next/link';

import { Header } from '@/components/header/header';

import styles from './game-layout.module.css';

const categories = [
    'Wins',
    'Operators',
    'Game Providers',
    'Game Types',
    'Features',
    'Themes',
    'Volatility',
    'RTP',
];

export default function GameLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header isBlured />

            <section className={styles.game}>
                <div className={styles.sidebar}>
                    <ul className={styles.list}>
                        {categories.map((name) => (
                            <li key={name} className={styles.item}>
                                <Link
                                    href={`/${name
                                        .toLowerCase()
                                        .replace(' ', '-')}`}>
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <main className={styles.content}>{children}</main>
            </section>
        </>
    );
}
