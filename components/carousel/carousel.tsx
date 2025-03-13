'use client';

import { useEffect, useState } from 'react';

import { Icon } from '@/core-components/icon/icon';

import TrustpilotStarGreen from '@/images/icons/trastpilot-star-green.svg';

import { Review, getReviews } from '@/queries/reviews/getReviews';

import styles from './carousel.module.css';

export function Carousel() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadReviews() {
            try {
                const data = await getReviews();
                if (data) {
                    setReviews(data);
                } else {
                    console.error('Unable to load reviews');
                }
            } catch (err) {
                console.error('Error loading reviews', err);
            } finally {
                setIsLoading(false);
            }
        }
        loadReviews();
    }, []);

    return (
        <section className={styles.wrapper}>
            <div className={styles.heading}>
                <div className={styles.title}>
                    <Icon svg={TrustpilotStarGreen} label="Star" />
                    <p>Trustpilot</p>
                </div>

                <div className={styles.reviews}>
                    <p>Excellent 4.9 out of 5</p>
                    <p>Based on 650 reviews</p>
                </div>
            </div>

            <div className={styles.carousel}>
                {isLoading ? (
                    <div className={styles.loading}>Loading...</div>
                ) : reviews.length > 0 ? (
                    reviews.map((review, index) => (
                        <div className={styles.item} key={index}>
                            <div className={styles.rating}>
                                <a
                                    href={
                                        review.link ||
                                        'https://www.trustpilot.com/review/wowhunt.com'
                                    }
                                    target="_blank">
                                    <div className={styles.stars}>
                                        {[...Array(review.rating)]
                                            .map((_, index) => (
                                                <Icon
                                                    key={index}
                                                    svg={TrustpilotStarGreen}
                                                    fill="currentColor"
                                                    label="star"
                                                />
                                            ))
                                            .reverse()}
                                    </div>
                                </a>
                                <p>{review.name}</p>
                            </div>
                            <div className={styles.review}>
                                <p className={styles.title}>{review.title}</p>
                                <p className={styles.description}>
                                    {review.text}
                                </p>
                            </div>
                        </div>
                    ))
                ) : null}
            </div>
        </section>
    );
}
