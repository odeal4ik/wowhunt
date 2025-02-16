import styles from './icon.module.css';

export function Icon({
    svg: Svg,
    fill,
}: {
    svg: SvgrComponent;
    fill?: string;
}) {
    return (
        <Svg
            className={styles.icon}
            xmlns="http://www.w3.org/2000/svg"
            fill={fill || 'currentColor'}
        />
    );
}
