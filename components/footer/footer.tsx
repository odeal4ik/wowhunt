/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import { Icon } from '../../core-components/icon/icon';
import Logo from '@/images/logo/logo-dark.svg';
import styles from './footer.module.css';
import Image from 'next/image';

export function Footer() {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.footer}>
                <div className={styles.links}>
                    <div className={styles.logo}>
                        <Link href="/" className={styles.logoWrapper}>
                            <Icon svg={Logo} />
                            <span className={styles.name}>wowhunt</span>
                        </Link>
                        <div className={styles.copyrights}>
                            © WOWHUNT 2017-2023. All right reserved. Pauros LLC.
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
                        <a className={styles.title} href='/terms-and-condition'>
                            Terms and Conditions
                        </a>
                        <ul>
                            <li>
                                <a href="/privacy-policy">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.payments}>
                        {Array.from({ length: 13 }).map((_, index) => (
                            <Image
                                key={index}
                                src={`/payments-methods/payment${
                                    index + 1
                                }.svg`}
                                alt={`payment-${index + 1}`}
                                loading="lazy"
                                width={50}
                                height={50}
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
