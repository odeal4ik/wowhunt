'use client';

import { Icon } from '../../core-components/icon/icon';
import Arrow from '../../public/system-icons/arrow-rigth-white.svg';
import styles from './backtrack.module.css';

type BackButtonProps = {
    path: string;
};

export function BackButton({ path }: BackButtonProps) {
    return (
        <button
            onClick={() => window.history.back()}
            className={styles.backButton}>
            <Icon svg={Arrow} fill="" />
            <span>{path}</span>
        </button>
    );
}