/* eslint-disable @next/next/no-img-element */
'use client';

import cn from 'classnames';
import { useState } from 'react';
import styles from './how-it-works.module.css';

const howItWorkslist = [
    {
        id: 1,
        image: '/images/choise-frame.png',
        title: 'Choise your boost',
        description:
            'Choose the services you are interested in and click on button “Buy Now”. If you have any question ask it in live chat',
        icon: '/system-icons/choise.svg',
    },
    {
        id: 2,
        image: '/images/place-frame.png',
        title: 'Place your order',
        description:
            'Go to the shopping cart, fill out your contact information and character data, then click on the checkout button',
        icon: '/system-icons/cart.svg',
    },
    {
        id: 3,
        image: '/images/in-touch-frame.png',
        title: `We'll be in touch`,
        description:
            'We will contact you within 5 minutes to clarify the details of your order and start performing the service',
        icon: '/system-icons/call-support.svg',
    },
];

export function HowItWorks() {
    const [activeItem, setActiveItem] = useState(howItWorkslist[0]);

    return (
        <section className={styles.wrapper}>
            <div className={styles.image}>
                <img
                    loading="lazy"
                    src={activeItem.image}
                    alt={`How it works ${activeItem.id}`}
                />
            </div>

            <div className={styles.accordeon}>
                {howItWorkslist.map((item) => (
                    <button
                        className={cn(styles.item, [
                            activeItem.id === item.id && styles.active,
                        ])}
                        key={item.id}
                        onClick={() => setActiveItem(item)}>
                        <div className={styles.icon}>
                            <img
                                loading="lazy"
                                src={item.icon}
                                alt={`How it works icon ${item.id}`}
                            />
                        </div>

                        <div className={styles.content}>
                            <div className={styles.title}>{item.title}</div>

                            <div
                                className={cn(styles.text, {
                                    [styles.active]: activeItem.id === item.id,
                                })}>
                                {item.description}
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
}
