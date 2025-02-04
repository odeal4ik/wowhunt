import Link from 'next/link';
import { ModelWorkWithUs } from '../model-work-with-us/model-work-with-us';
import styles from './support-and-work.module.css';
import cn from 'classnames';

export function SupportAndWork({
    isContactVisible,
    isModalVisible,
    isInCatalog,
}: {
    isContactVisible: boolean;
    isModalVisible: boolean;
    isInCatalog?: boolean;
}) {
    const localIsContactVisible = isContactVisible;
    const localisModalVisible = isModalVisible;

    return (
        <div
            className={cn(styles.container, {
                [styles.containerCatalog]: isInCatalog,
            })}>
            {localisModalVisible && (
                <ModelWorkWithUs>
                    <button
                        className={cn(styles.modal, {
                            [styles.showInCatalog]: isInCatalog,
                            [styles.modalCatalog]: isInCatalog,
                        })}>
                        Work With Us
                    </button>
                </ModelWorkWithUs>
            )}
            {localIsContactVisible && (
                <Link
                    href="/"
                    className={cn(styles.contact, {
                        [styles.showInCatalog]: isInCatalog,
                    })}>
                    <div className={styles.dot}></div>
                    <span className={styles.label}>Contact Support</span>
                </Link>
            )}
        </div>
    );
}
