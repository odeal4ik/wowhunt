import styles from './input-number.module.css';

export function InputNumber({
    defaultValue,
    min,
    max,
    id,
    name,
    onChange,
}: {
    defaultValue: number;
    min: number;
    max: number;
    id: string;
    name: string;
    onChange?: (value: number) => void;
}) {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(Number(e.target.value));
        }
    };

    return (
        <input
            className={styles.number}
            type="number"
            id={id}
            name={name}
            defaultValue={defaultValue}
            min={min}
            max={max}
            onChange={onChangeHandler}
        />
    );
}
