import Link from 'next/link';

import styles from './sidebar.module.css';

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

export function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <ul className={styles.list}>
                {categories.map((name) => (
                    <li key={name} className={styles.item}>
                        <Link href={`/${name.toLowerCase().replace(' ', '-')}`}>
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
