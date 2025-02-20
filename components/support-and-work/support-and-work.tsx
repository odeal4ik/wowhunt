import cn from 'classnames';
import Link from 'next/link';

import { ModelWorkWithUs } from '../model-work-with-us/model-work-with-us';
import { OpenLogInModalButton } from '../open-login-modal-button/open-login-modal-button';
import styles from './support-and-work.module.css';

export function SupportAndWork({
    location = 'header',
}: {
    location?: 'header' | 'catalog';
}) {
    const containerClass = cn(styles.container, {
        [styles.containerCatalog]: location === 'catalog',
    });

    return (
        <div className={containerClass}>
            <div className={styles.loginButton}>
                <OpenLogInModalButton />
            </div>

            <ModelWorkWithUs>
                <button className={styles.modal}>Work With Us</button>
            </ModelWorkWithUs>

            <Link href="/" className={styles.contact}>
                <div className={styles.dot}></div>
                <span className={styles.label}>Contact Support</span>
            </Link>
        </div>
    );
}
