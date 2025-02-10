import Link from 'next/link';
import { ModelWorkWithUs } from '../model-work-with-us/model-work-with-us';
import styles from './support-and-work.module.css';
import cn from 'classnames';
import { ButtonOpenModalLogIn } from '../button-open-modal-logIn/button-open-modal-logIn';

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
                <ButtonOpenModalLogIn />
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
