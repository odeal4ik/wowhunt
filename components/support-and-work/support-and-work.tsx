import { ModelWorkWithUs } from '../model-work-with-us/model-work-with-us';
import styles from './support-and-work.module.css';
import cn from 'classnames';

export function SupportAndWork({
    isContactVisible,
    isModelVisible,
    isInCatalog,
}: {
    isContactVisible: boolean;
    isModelVisible: boolean;
    isInCatalog?: boolean;
}) {
    const localIsContactVisible = isContactVisible;
    const localIsModelVisible = isModelVisible;

    return (
        <div
            className={cn(styles.container, {
                [styles.containerCatalog]: isInCatalog,
            })}>
            {localIsModelVisible && (
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
                <a
                    href="/"
                    className={cn(styles.contact, {
                        [styles.showInCatalog]: isInCatalog,
                    })}>
                    <div className={styles.dot}></div>
                    <span className={styles.label}>Contact Support</span>
                </a>
            )}
        </div>
    );
}
