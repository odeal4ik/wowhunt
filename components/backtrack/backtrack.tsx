'use client';

import { Icon } from '../../core-components/icon/icon';
import Arrow from '../../public/system-icons/arrow-rigth-white.svg';
import styles from './backtrack.module.css';

export function BackButton() {
    return (
        <button
            onClick={() => window.history.back()}
            className={styles.backButton}>
            <Icon svg={Arrow} fill="" />
            <span>Back to Shopping</span>
        </button>
    );
}