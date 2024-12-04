'use client';
import styles from './error-page.module.css';
import { ErrorPage } from '@/components/404/404';

export default function ErrorPage404() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <ErrorPage />
            </div>
        </div>
    );
}
