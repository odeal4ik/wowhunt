import styles from './icon.module.css';

export function Icon({
    svg: Svg,
    fill,
    label,
}: {
    svg: SvgrComponent;
    fill?: string;
    label: string;
}) {
    return (
        <Svg
            className={styles.icon}
            xmlns="http://www.w3.org/2000/svg"
            fill={fill || 'currentColor'}
            aria-label={label}
        />
    );
}
