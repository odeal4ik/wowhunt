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
    const percent = (num: number) =>
        Math.round(100 / (max - min)) * (num - min);

    const [value, setValue] = useState(percent(defaultValue));

    const onLocalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(percent(Number(e.target.value)));

        if (onChange) {
            onChange(Number(e.target.value));
        }
    };
    return (
        <div className={styles.wrapper}>
            <div
                className={styles.track}
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
            <div className={styles.steps}>
                {Array.from({ length: 10 }).map((_, i) => (
                    <span key={i}>{i + 1}</span>
                ))}
            </div>
        </div>
    );
}
