import styles from './checkbox.module.css';

export function Checkbox({
    id,
    label,
    name,
    value,
}: {
    id: string;
    label: string;
    name: string;
    value: string;
}) {
    return (
        <label htmlFor={id} className={styles.label}>
            {label}
            <input
                className={styles.input}
                type="radio"
                name={name}
                value={value}
                id={id}
            />
        </label>
    );
}
