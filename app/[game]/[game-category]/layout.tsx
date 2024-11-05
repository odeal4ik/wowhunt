'use client';

import cn from 'classnames';

import styles from './game-category-layout.module.css';
import { Icon } from '@/core/icon/icon';

import Chat from '@/images/icons/writting.svg';
import { InputRange } from '@/core/input/range/input-range';
import { InputSlider } from '@/core/input/slider/input-slider';
import { InputNumber } from '@/core/input/number/input-number';
import { Select } from '@/core/select/select';
import { Checkbox } from '@/core/input/checkbox/checkbox';

export default function GameCategoryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className={styles['categoty-layout']}>
            {children}
            <div className={styles.filters}>
                <div className={styles.item}>
                    <span className={styles.label}>Region</span>

                    <div className={styles.region}>
                        <div className={styles.languageBtn}>
                            <input
                                id="region-1"
                                type="radio"
                                name="region"
                                value="eu"
                                defaultChecked
                            />
                            <label htmlFor="region-1">Eu</label>
                        </div>

                        <div className={styles.languageBtn}>
                            <input
                                id="region-2"
                                type="radio"
                                name="region"
                                value="us"
                            />
                            <label htmlFor="region-2">Us</label>
                        </div>
                    </div>
                </div>

                <div className={styles.item}>
                    <span className={cn(styles.label, styles.withLine)}>
                        <span>Quantity</span>
                        <span />
                    </span>

                    <div className={cn(styles.inputs, styles.singles)}>
                        <InputNumber
                            id="quantity-number"
                            name="quantity-number"
                            defaultValue={5}
                            min={1}
                            max={10}
                        />
                        <InputRange
                            defaultValue={5}
                            min={1}
                            max={10}
                            id="quantity-range"
                            name="quantity-range"
                        />
                    </div>
                </div>

                <div className={styles.item}>
                    <span className={cn(styles.label, styles.withLine)}>
                        <span>ranks</span>
                        <span />
                    </span>

                    <div className={cn(styles.inputs, styles.doubles)}>
                        <InputNumber
                            id="rank-number-1"
                            name="rank-number-1"
                            defaultValue={2}
                            min={1}
                            max={10}
                        />
                        -
                        <InputNumber
                            id="rank-number-2"
                            name="rank-number-2"
                            defaultValue={8}
                            min={1}
                            max={10}
                        />
                    </div>
                    <div className={styles.inputs}>
                        <InputSlider
                            defaultValue1={2}
                            defaultValue2={8}
                            min={1}
                            max={10}
                            id="rank-range"
                            name="rank-range"
                        />
                    </div>
                    <div className={styles['rank-selects']}>
                        <Select />
                        -
                        <Select />
                    </div>
                </div>

                <div className={styles.item}>
                    <span className={cn(styles.label, styles.withLine)}>
                        <span>Raid Mode (Required)</span>
                        <span />
                    </span>

                    <div className={styles.checkboxes}>
                        <Checkbox
                            name="mode"
                            value="1"
                            id="raid-mode-1"
                            label="10 players"
                            defaultChecked
                        />
                        <Checkbox
                            name="mode"
                            value="2"
                            id="raid-mode-2"
                            label="25 players"
                            price="€107.19"
                        />
                    </div>
                </div>

                <div className={styles.item}>
                    <span className={cn(styles.label, styles.withLine)}>
                        <span>Choose Difficulty</span>
                        <span />
                    </span>

                    <div>
                        <Select />
                    </div>
                </div>

                <div className={styles.item}>
                    <span className={cn(styles.label, styles.withLine)}>
                        <span>Loot Options</span>
                        <span />
                    </span>

                    <div className={styles['loot-options']}>
                        <label htmlFor="loot-1">
                            Item
                            <input id="loot-1" type="radio" name="loot" />
                        </label>
                        <label htmlFor="loot-2">
                            Item
                            <input id="loot-2" type="radio" name="loot" />
                        </label>
                        <label htmlFor="loot-3">
                            Item
                            <input id="loot-3" type="radio" name="loot" />
                        </label>
                    </div>
                </div>

                <div className={styles.price}>€53.99</div>

                <div className={styles.submition}>
                    <button className={styles.submit} type="submit">
                        BUY NOW
                    </button>
                    <button className={styles.chat} type="button">
                        <Icon svg={Chat} fill="#9f9fb7" />
                        CHAT
                    </button>
                </div>
            </div>
        </section>
    );
}
