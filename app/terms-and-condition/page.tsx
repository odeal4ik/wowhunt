'use client';

import Image from 'next/image';

import styles from './terms-and-condition.module.css';

export default function TermsAndCondition() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    src="/images/terms-and-condition.webp"
                    alt="agency-img"
                    width={610}
                    height={605}
                    loading="lazy"
                    className={styles.agencyImg}
                />
                <h1 className={styles.title}>
                    Terms and <br />
                    Conditions <br />{' '}
                    <span className={styles.titleSpan}>Offer</span>
                </h1>
            </div>
            <div className={styles.texts}>
                <div className={styles.section}>
                    <p className={styles.text}>
                        These terms and conditions (“Terms”, “Agreement”) are an
                        agreement between wowhunt.com (GameCoaching LLC, 8 The
                        Green STE A, Dover, 19901, Delaware, United States of
                        America) online website (“wowhunt”, “us”, “we” or “our”)
                        and you (“user”, “you” or “your”). This Agreement sets
                        forth the general terms and conditions of your use of
                        the https://wowhunt.com website and any of its Services
                        (collectively, “Website” or “Services”).
                    </p>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Age Requirement</h2>

                    <p className={styles.text}>
                        You must be at least 13 years of age to use this
                        Website. By using this Website and by agreeing to this
                        Agreement you warrant and represent that you are at
                        least 13 years of age.
                    </p>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        Billing and Payments
                    </h2>

                    <p className={styles.text}>
                        You shall pay all fees or charges to your account in
                        accordance with the fees, charges, and billing terms in
                        effect at the time a fee or charge is due and payable.
                        If, in our judgment, your purchase constitutes a
                        high-risk transaction, we will require you to provide us
                        with a copy of your valid government-issued photo
                        identification, proof of address, and possibly a copy of
                        a recent bank statement for the credit or debit card
                        used for the purchase. We reserve the right to change
                        services and service pricing at any time. We also
                        reserve the right to refuse any order you place with us.
                        We may, in our sole discretion, limit or cancel
                        quantities purchased per person, per household or per
                        order. These restrictions may include orders placed by
                        or under the same customer account, the same PayPal
                        account, the same credit card, and/or orders that use
                        the same billing address. In the event that we make a
                        change to or cancel an order, we may attempt to notify
                        you by contacting the e-mail and/or other contact
                        information provided at the time the order was made.
                    </p>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        Refund Policy and Cancelations
                    </h2>

                    <p className={styles.text}>
                        If we did not manage to complete your order in the
                        specified time terms, you have the right to request a
                        refund, or we may refund the money in our own
                        discretion. You have the right to cancel your order and
                        ask for a full refund at any time before the start of
                        the service. You have the right to cancel your order
                        after the start of the service and ask for a partial
                        refund. In this case, the amount of the refund will be
                        proportional to the volume of the unfinished services.
                    </p>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        Accuracy of Information
                    </h2>
                    <p className={styles.text}>
                        Occasionally there may be information on the Website
                        that contains typographical errors, inaccuracies or
                        omissions that may relate to pricing, availability,
                        promotions and offers. We reserve the right to correct
                        any errors, inaccuracies or omissions, and to change or
                        update information or cancel orders if any information
                        on the Website or on any related Service is inaccurate
                        at any time without prior notice (including after you
                        have submitted your order). We undertake no obligation
                        to update, amend or clarify information on the Website
                        including, without limitation, pricing information,
                        except as required by law. No specified update or
                        refresh date applied on the Website should be taken to
                        indicate that all information on the Website or on any
                        related Service has been modified or updated.
                    </p>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Communication</h2>
                    <p className={styles.text}>
                        When visiting wowhunt.com, it means you are
                        communicating with us electronically. You are consenting
                        to receive electronic communications from us. We might
                        be using such methods as Live chat, Discord or Email to
                        communicate with you. You are agreeing that any
                        information provided to us is truthful and factual
                        without any intentional alterations or omissions.
                    </p>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        Intellectual Property Rights
                    </h2>
                    <p className={styles.text}>
                        This Agreement does not transfer to you any intellectual
                        property owned by wowhunt or third-parties, and all
                        rights, titles, and interests in and to such property
                        will remain (as between the parties) solely with wowhunt
                        and/or other respective companies. Your use of our
                        Website and Services grants you no right or license to
                        reproduce or otherwise use any wowhunt or third-party
                        trademarks.
                    </p>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        Disclaimer of Warranty
                    </h2>
                    <p className={styles.text}>
                        You agree that your use of our Website or Services is
                        provided on an “as is” and “as available” basis. We
                        expressly disclaim all warranties of any kind, whether
                        express or implied. We make no warranty that the
                        Services will meet your requirements, or that the
                        Service will be uninterrupted, timely, secure, or
                        error-free; nor do we make any warranty as to the
                        results that may be obtained from the use of the Service
                        or as to the accuracy or reliability of any information
                        obtained through the Service.
                    </p>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Indemnification</h2>
                    <p className={styles.text}>
                        You agree to indemnify and hold wowhunt and its
                        affiliates, directors, officers, employees, and agents
                        harmless from and against any liabilities, losses,
                        damages or costs, including reasonable attorneys’ fees,
                        incurred in connection with or arising from any
                        third-party allegations, claims, actions, disputes, or
                        demands asserted against any of them as a result of or
                        relating to your use of the Website or Services or any
                        willful misconduct on your part.
                    </p>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        Changes and Amendments
                    </h2>
                    <p className={styles.text}>
                        We reserve the right to modify this Agreement or its
                        policies relating to the Website or Services at any
                        time, effective upon posting of an updated version of
                        this Agreement on the Website. When we do we will revise
                        the updated date at the bottom of this page. Continued
                        use of the Website after any such changes shall
                        constitute your consent to such changes.
                    </p>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        Acceptance of These Terms
                    </h2>
                    <p className={styles.text}>
                        You acknowledge that you have read this Agreement and
                        agree to all its terms and conditions. By using the
                        Website or its Services you agree to be bound by this
                        Agreement. If you do not agree to abide by the terms of
                        this Agreement, you are not authorized to use or access
                        the Website and its Services.
                    </p>
                </div>
                <div className={styles.section}>
                    <p className={styles.text}>
                        This document was last updated on November 30, 2022
                    </p>
                </div>
            </div>
        </div>
    );
}
