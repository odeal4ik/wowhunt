'use client';

import cn from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

import CallSupport from '@/images/icons/call-support.svg';
import Cart from '@/images/icons/cart.svg';
import Choise from '@/images/icons/choise.svg';

import { Icon } from '../../core-components/icon/icon';
import styles from './how-it-works.module.css';

const howItWorkslist = [
    {
        id: 1,
        image: '/images/frame-choise.webp',
        title: 'Choise your boost',
        description:
            'Choose the services you are interested in and click on button “Buy Now”. If you have any question ask it in live chat',
        icon: Choise,
    },
    {
        id: 2,
        image: '/images/frame-place.webp',
        title: 'Place your order',
        description:
            'Go to the shopping cart, fill out your contact information and character data, then click on the checkout button',
        icon: Cart,
    },
    {
        id: 3,
        image: '/images/frame-in-touch.webp',
        title: `We'll be in touch`,
        description:
            'We will contact you within 5 minutes to clarify the details of your order and start performing the service',
        icon: CallSupport,
    },
];

export function HowItWorks() {
    const [activeItem, setActiveItem] = useState(howItWorkslist[0]);

    return (
        <section className={styles.wrapper}>
            <div className={styles.image}>
                <Image
                    loading="lazy"
                    src={activeItem.image}
                    alt={`How it works ${activeItem.id}`}
                    width={550}
                    height={373}
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
                            <Icon
                                svg={item.icon}
                                aria-label={`How it works icon ${item.id}`}
                            />
                        </div>

                        <div className={styles.content}>
                            <p className={styles.title}>{item.title}</p>

                            <p
                                className={cn(styles.text, {
                                    [styles.active]: activeItem.id === item.id,
                                })}>
                                {item.description}
                            </p>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
}
