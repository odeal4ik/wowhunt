'use client';

import { useRouter } from 'next/navigation';

import { Icon } from '@/core-components/icon/icon';
import Chevron from '@/images/system-icons/arrow-сhevron.svg';
import styles from './backtrack.module.css';

interface BackButtonProps {
    path: string;
}

export function BackButton({ path }: BackButtonProps) {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className={styles.backButton}>
            <Icon svg={Chevron} fill="currentColor" />
            <span>{path}</span>
        </button>
    );
}