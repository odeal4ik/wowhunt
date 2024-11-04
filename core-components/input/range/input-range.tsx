import { useState } from 'react';
import styles from './input-range.module.css';

export function InputRange({
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
    const [value, setValue] = useState(
        Math.round(100 / (max - min)) * (defaultValue - min),
    );

    const onLocalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const percent = (100 / (max - min)) * (Number(e.target.value) - min);
        setValue(percent);

        if (onChange) {
            onChange(Number(e.target.value));
        }
    };
    return (
        <div
            className={styles.wrapper}
            style={
                {
                    '--_input-range-value': `${value}%`,
                } as React.CSSProperties
            }>
            <input
                className={styles.range}
                id={id}
                name={name}
                type="range"
                min={min}
                max={max}
                defaultValue={defaultValue}
                onChange={onLocalChange}
            />
        </div>
    );
}
