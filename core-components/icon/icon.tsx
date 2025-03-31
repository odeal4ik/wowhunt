import styles from './icon.module.css';

export function Icon({
    svg: Svg,
    fill,
    label,
    id = 'icon',
}: {
    svg: SvgrComponent;
    fill?: string;
    id?: string;
    label: string;
}) {
    return (
        <Svg
            className={styles.icon}
            id={id}
            xmlns="http://www.w3.org/2000/svg"
            fill={fill || 'currentColor'}
            aria-label={label}
        />
    );
}
