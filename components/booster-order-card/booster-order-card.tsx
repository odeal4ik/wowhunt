import styles from './booster-order-card.module.css';
import Image from 'next/image';

interface BoosterOrderCard {
    id: number;
    game: string;
    img: string;
    title: string;
    price: number;
    details: {
        label: string;
        value: string;
    }[];
    numberOrder: string;
    country: string;
    countryFlag: string;
}

export function BoosterOrderCard({
    price,
    title,
    details,
    game,
    img,
    country,
    countryFlag,
    numberOrder,
}: BoosterOrderCard) {
    const formattedPrice = price.toFixed(2);
    const [integerPart, decimalPart] = formattedPrice.split('.');

    return (
        <div className={styles.container}>
            <div className={styles.gameNameWrapper}>
                <Image
                    src={img}
                    alt={game}
                    width={15}
                    height={15}
                />
                <p className={styles.gameName}>{game}</p>
            </div>

            <p className={styles.orderTitle}>{title}</p>

            <p className={styles.price}>
                <span>${integerPart}</span>
                <span className={styles.priceDecimal}>.{decimalPart}</span>
            </p>

            <p className={styles.orderDetails}>
                Tap the button before talking to a customer or placing an order.
            </p>

            <div className={styles.actions}>
                <button className={`${styles.takeButton} ${styles.button}`}>Take</button>
                <button className={`${styles.skipButton} ${styles.button}`}>Skip</button>
            </div>

            <div className={styles.details}>
                {details.map((detail, index) => (
                    <div key={index} className={styles.detailRow}>
                        <p className={`${styles.detailLabel} ${styles.label}`}>{detail.label}</p>
                        <p className={`${styles.detailValue} ${styles.label}`}>{detail.value}</p>
                    </div>
                ))}
            </div>

            <div className={styles.footer}>
                <p className={styles.numberOrder}>{numberOrder}</p>
                <figure className={styles.country}>
                    <Image
                        src={countryFlag}
                        alt={country}
                        className={styles.flag}
                        width={15}
                        height={10}
                    />
                    <figcaption>{country}</figcaption>
                </figure>
            </div>
        </div>
    );
}
