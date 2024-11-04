import { useState } from 'react';
import cn from 'classnames';

import { Icon } from '../icon/icon';

import Chevron from '../../public/system-icons/chevron.svg';

import styles from './select.module.css';

export function Select() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('Title');
    return (
        <div className={styles.wrapper}>
            <div
                className={cn(styles.label, { [styles.open]: isOpen })}
                role="button"
                onClick={() => setIsOpen(!isOpen)}>
                {selected}
                <Icon svg={Chevron} />
            </div>
            {isOpen && (
                <ul className={styles.list}>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <li
                            className={cn(styles.item, {
                                [styles.selected]:
                                    selected === `Option ${index + 1}`,
                            })}
                            key={index}
                            onClick={() =>
                                setSelected(
                                    selected === `Option ${index + 1}`
                                        ? 'Title'
                                        : `Option ${index + 1}`,
                                )
                            }>
                            Option {index + 1}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
