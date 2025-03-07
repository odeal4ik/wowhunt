import Link from 'next/link';

import Logo from '@/images/logo/logo-dark.svg';
import Payment1 from '@/images/payment/payments-methods/payment1.svg';
import Payment2 from '@/images/payment/payments-methods/payment2.svg';
import Payment3 from '@/images/payment/payments-methods/payment3.svg';
import Payment4 from '@/images/payment/payments-methods/payment4.svg';
import Payment5 from '@/images/payment/payments-methods/payment5.svg';
import Payment6 from '@/images/payment/payments-methods/payment6.svg';
import Payment7 from '@/images/payment/payments-methods/payment7.svg';
import Payment8 from '@/images/payment/payments-methods/payment8.svg';
import Payment9 from '@/images/payment/payments-methods/payment9.svg';
import Payment10 from '@/images/payment/payments-methods/payment10.svg';
import Payment11 from '@/images/payment/payments-methods/payment11.svg';
import Payment12 from '@/images/payment/payments-methods/payment12.svg';
import Payment13 from '@/images/payment/payments-methods/payment13.svg';

import { Icon } from '@/core-components/icon/icon';
import styles from './footer.module.css';

const paymentIcons = [
    Payment1,
    Payment2,
    Payment3,
    Payment4,
    Payment5,
    Payment6,
    Payment7,
    Payment8,
    Payment9,
    Payment10,
    Payment11,
    Payment12,
    Payment13,
];

export function Footer() {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.footer}>
                <div className={styles.links}>
                    <div className={styles.logo}>
                        <Link href="/" className={styles.logoWrapper}>
                            <Icon svg={Logo} label="Logo" />
                            <span className={styles.name}>wowhunt</span>
                        </Link>
                        <div className={styles.copyrights}>
                            © WOWHUNT 2017-2023. All right reserved. Pauros
                            LLC.
                        </div>
                        <div className={styles.email}>
                            Contact Email: support@wowhunt.com
                        </div>
                    </div>

                    <div className={styles.list}>
                        <span className={styles.title}>WotLK</span>
                        <ul>
                            <li>
                                <a href="#">HOT OFFERS</a>
                            </li>
                            <li>
                                <a href="#">Season 4 Offers</a>
                            </li>
                            <li>
                                <a href="#">Pandaria Remix</a>
                            </li>
                            <li>
                                <a href="#">Power Leveling</a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.list}>
                        <Link
                            className={styles.title}
                            href="/terms-and-condition">
                            Terms and Conditions
                        </Link>
                        <ul>
                            <li>
                                <Link href="/privacy-policy">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.payments}>
                        {paymentIcons.map((icon, index) => (
                            <Icon 
                            key={index}
                            svg={icon}
                            label={`payment-${index + 1}`}
                        />
                        ))}
                    </div>
                </div>

                <div className={styles.disclaimer}>
                    WOWHUNT is not endorsed by or in any way affiliated with
                    Blizzard Entertainment, Bungie or other game developers, and
                    does not reflect the views of the aforementioned
                    organizations or anyone officially involved in the
                    production or management of franchises. WOWHUNT is not
                    selling ingame items, only offers different services to make
                    players in game skill better.
                </div>
            </div>
        </footer>
    );
}
