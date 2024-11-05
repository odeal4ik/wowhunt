import styles from './checkbox.module.css';

export function Checkbox({
    id,
    label,
    name,
    value,
    price,
    defaultChecked,
}: {
    id: string;
    label: string;
    name: string;
    value: string;
    price?: string;
    defaultChecked?: boolean;
}) {
    return (
        <label htmlFor={id} className={styles.label}>
            {price ? (
                <>
                    <span>{label}</span>
                    <span>{price}</span>
                </>
            ) : (
                label
            )}
            <input
                className={styles.input}
                type="radio"
                name={name}
                value={value}
                id={id}
                defaultChecked={defaultChecked}
            />
        </label>
    );
}
