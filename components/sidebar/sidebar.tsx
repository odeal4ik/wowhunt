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

interface SidebarProps {
    isVisible?: boolean;
}

export function Sidebar({ isVisible = true }: SidebarProps) {
    if (!isVisible) {
        return null;
    }

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
