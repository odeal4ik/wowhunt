import { ModelWorkWithUs } from '../model-work-with-us/model-work-with-us';
import styles from './support-and-work.module.css';

export function SupportAndWork() {
    return (
        <>
            <ModelWorkWithUs>
                <button className={styles.modal}>Work With Us</button>
            </ModelWorkWithUs>

            <a href="/" className={styles.contact}>
                <div className={styles.dot}></div>
                <span className={styles.label}>Contact Support</span>
            </a>
        </>
    );
}
