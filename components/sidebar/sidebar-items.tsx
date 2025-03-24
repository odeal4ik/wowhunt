import Link from 'next/link';
import { Icon } from '@/core-components/icon/icon';
import styles from './sidebar.module.css';

interface CategoryItemProps {
    name: string;
}

export function CategoryItem({ name }: CategoryItemProps) {
    return (
        <li className={styles.item}>
            <Link href={`/${name.toLowerCase().replace(' ', '-')}`}>
                {name}
            </Link>
        </li>
    );
}

interface PrivacyPageItemProps {
    name: string;
    icon: SvgrComponent;
}

export function PrivacyPageItem({ name, icon }: PrivacyPageItemProps) {
    return (
        <li className={styles.item}>
            <Link href={`/${name.toLowerCase().replace(/ /g, '-')}`}>
                <Icon svg={icon} label={name} />
                {name}
            </Link>
        </li>
    );
}