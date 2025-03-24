'use client';

import Image from 'next/image';

import styles from './contact.module.css';

export default function Contact() {
    return (
        <div className={styles.content}>
            <div className={styles.imageWrapper}>
                <Image
                    src="/images/contact-us.webp"
                    alt="Background"
                    className={styles.image}
                    width={776}
                    height={770}
                />
            </div>
            <div className={styles.text}>
                <h1>Contact us</h1>

                <div className={styles.item}>
                    <h2>NEED HELP? WRITE TO US</h2>
                    <p>Contact Email: support@wowhunt.com</p>
                    <p>Customer Support Discord: WOWHUNT#8888</p>
                </div>

                <div className={styles.item}>
                    <h2>BECOME A BOOSTER</h2>
                    <p>
                        If you want to work together with our team, leave a
                        request on the header in the section &quot;Work With
                        Us&quot;.
                    </p>
                </div>

                <div className={styles.item}>
                    <h2>OUR ADRESS</h2>
                    <p>
                        Georgia, Tbilisi city, Krtsanisi district, Nino and Ilia
                        Nakashidzeebi street, N 1, (former Avlevi), apartment N
                        3, building N 3
                    </p>
                </div>
            </div>
        </div>
    );
}
