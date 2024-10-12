import styles from './splitter.module.css';

export function Splitter({ title }: { title: string }) {
    return <div className={styles.splitter}>{title}</div>;
}
