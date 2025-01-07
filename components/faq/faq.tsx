import { useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import styles from './faq.module.css';

const faqItems = [
    {
        question: 'How does it work?',
        answer: [
            'Before buying Gold for WoW DF, we recommend you send a message to a seller to clarify all details and discuss a delivery method;',
            'Make an order;',
            'Receive the selected amount of gold via the discussed method;',
        ],
        isOpen: false,
    },
    {
        question: 'Why is gold so important in WoW DF?',
        answer: [
            'Gold is essential for purchasing gear, consumables, and crafting materials',
            'It allows you to buy mounts, pets, and cosmetic items',
            'You need gold for repairs, enchants, and gems',
            'Gold is crucial for participating in the in-game economy and auction house',
        ],
        isOpen: false,
    },
    {
        question: 'How to earn gold in Wow Dragonflight?',
        answer: [
            'Complete daily and weekly quests',
            'Farm valuable materials and resources',
            'Play the auction house by buying low and selling high',
            'Run old raids and dungeons for valuable items',
            'Level up professions and craft high-demand items',
        ],
        isOpen: false,
    },
    {
        question: 'Is it safe to buy gold in WoW DF?',
        answer: [
            'We use secure payment methods to protect your transactions',
            'Our delivery methods are designed to be safe and discreet',
            'We have years of experience in gold trading',
            'Our customer support team is available 24/7 to assist you',
        ],
        isOpen: false,
    },
    {
        question: 'Who are you?',
        answer: [
            'We are a professional team of WoW enthusiasts',
            'Operating since 2010 in the gaming industry',
            'Trusted by thousands of satisfied customers',
            'Dedicated to providing the best service and competitive prices',
        ],
        isOpen: false,
    },
    {
        question: 'Why prices are so low?',
        answer: [
            'We work directly with reliable gold farmers',
            'Our efficient operations allow us to minimize overhead costs',
            'We maintain high volume of trades which enables better pricing',
            'Regular special offers and discounts for our customers',
        ],
        isOpen: false,
    },
    {
        question: 'Why should i trust you?',
        answer: [
            'Over 10 years of successful operation in the market',
            'Thousands of positive reviews from satisfied customers',
            'Transparent pricing and delivery policies',
            'Professional customer support available 24/7',
            'Money-back guarantee if we fail to deliver',
        ],
        isOpen: false,
    },
    {
        question: 'How can i be sure in quality?',
        answer: [
            'We maintain strict quality control standards',
            'All our gold comes from legitimate in-game sources',
            'Fast delivery times - usually within 15 minutes',
            "Full refund guarantee if we don't meet our promises",
            'Regular quality audits of our service',
        ],
        isOpen: false,
    },
];

export function Faq() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaqItem = (index: number) => {
        setOpenFaqIndex((currentIndex) =>
            currentIndex === index ? null : index,
        );
    };

    return (
        <div className={styles.faq}>
            {faqItems.map((item, index) => (
                <div
                    key={index}
                    className={cn(styles.faqItem, {
                        [styles.open]: openFaqIndex === index,
                    })}
                    onClick={() => toggleFaqItem(index)}>
                    <button
                        type="button"
                        className={styles.faqQuestion}>
                        <p>{item.question}</p>
                        <Image
                            src={
                                openFaqIndex === index
                                    ? '/system-icons/minus.svg'
                                    : '/system-icons/plus.svg'
                            }
                            alt="Toggle"
                            width={24}
                            height={24}
                            className={styles.faqIcon}
                        />
                    </button>
                    {openFaqIndex === index && (
                        <div className={styles.faqAnswer}>
                            {item.answer.map((text, index) => (
                                <p key={index}>{text}</p>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
