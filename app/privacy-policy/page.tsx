'use client';
import styles from './privacy-policy.module.css';
import Image from 'next/image';

export default function PrivacyPolicy() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.imageContainer}>
                    <Image
                        src="/images/privacy_policy.webp"
                        alt="Privacy Policy"
                        width={619}
                        height={619}
                        className={styles.agencyImg}
                    />
                    <h1 className={styles.title}>
                        Privacy Policy <br />{' '}
                        <span className={styles.titleSpan}>Offer</span>
                    </h1>
                </div>
                <div className={styles.texts}>
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            What Information do we Collect?
                        </h2>
                        <p className={styles.text}>
                            We collect information from you when you place an
                            order, request a service or subscribe to our
                            newsletter.
                        </p>
                        <p className={styles.text}>
                            Any data we request that is not required will be
                            specified as voluntary or optional.
                        </p>
                        <p className={styles.text}>
                            When ordering the services on our site, as
                            appropriate, you may be asked to enter your: name,
                            e-mail address or discord tag. You may, however,
                            visit our site anonymously.Like most websites, we
                            use cookies to enhance your experience, gather
                            general visitor information, and track visits to our
                            website. Please refer to the 'do we use cookies?'
                            section below for information about cookies and how
                            we use them.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            What do we Use Your Information For?
                        </h2>
                        <p className={styles.text}>
                            Any of the information we collect from you may be
                            used in one of the following ways:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                To Personalize Your Experience
                            </li>
                            <li className={styles.listItem}>
                                Your information helps us to better respond to
                                your individual needs.
                            </li>
                            <li className={styles.listItem}>
                                To Improve Our Website
                            </li>
                            <li className={styles.listItem}>
                                We continually strive to improve our website
                                offerings based on the information and feedback
                                we receive from you.
                            </li>
                            <li className={styles.listItem}>
                                To Improve Customer Service
                            </li>
                            <li className={styles.listItem}>
                                Your information helps us to more effectively
                                respond to your customer service requests and
                                support needs.
                            </li>
                            <li className={styles.listItem}>
                                To Process Transactions
                            </li>
                            <li className={styles.listItem}>
                                Your information, whether public or private,
                                will not be sold, exchanged, transferred, or
                                given to any other company for any reason
                                whatsoever, without your consent, other than for
                                the express purpose of delivering the purchased
                                product or service requested by the customer.
                            </li>
                            <li className={styles.listItem}>
                                To Send Periodic Emails
                            </li>
                        </ul>
                        <p className={styles.text}>
                            The email address you provide for order processing,
                            may be used to send you information and updates
                            pertaining to your order or request, in addition to
                            receiving occasional company news, updates,
                            promotions, related product or service information,
                            etc.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            How do we Protect Your Information?
                        </h2>
                        <p className={styles.text}>
                            We implement a variety of security measures to
                            maintain the safety of your personal information
                            when you submit a request, place an order or enter,
                            submit, or access your personal information.
                        </p>
                        <p className={styles.text}>
                            These security measures include: password protected
                            directories and databases to safeguard your
                            information, SSL (Secure Sockets Layered) technology
                            to ensure that your information is fully encrypted
                            and sent across the Internet securely or PCI
                            Scanning to actively protect our servers from
                            hackers and other vulnerabilities.
                        </p>
                        <p className={styles.text}>
                            We offer the use of a secure server. All supplied
                            sensitive/credit information is transmitted via
                            Secure Socket Layer (SSL) technology and then
                            encrypted into our Payment gateway providers
                            database only to be accessible by those authorized
                            with special access rights to such systems, and are
                            required to keep the information confidential.
                        </p>
                        <p className={styles.text}>
                            After a transaction, your private information
                            (credit cards, social security numbers, financials,
                            etc.) will not be stored on our servers.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            Do we Use Cookies?
                        </h2>
                        <p className={styles.text}>
                            Cookies are small files that a site or its service
                            provider transfers to your computer’s hard drive
                            through your Web browser (if you allow) that enables
                            the sites or service providers systems to recognize
                            your browser and capture and remember certain
                            information.
                        </p>
                        <p className={styles.text}>
                            We use cookies to help us remember and process the
                            items in your shopping cart, understand and save
                            your preferences for future visits, keep track of
                            advertisements and compile aggregate data about site
                            traffic and site interaction so that we can offer
                            better site experiences and tools in the future. We
                            may contract with third-party service providers to
                            assist us in better understanding our site visitors.
                            These service providers are not permitted to use the
                            information collected on our behalf except to help
                            us conduct and improve our business.
                        </p>
                        <p className={styles.text}>
                            If you prefer, you can choose to have your computer
                            warn you each time a cookie is being sent, or you
                            can choose to turn off all cookies via your browser
                            settings. Like most websites, if you turn your
                            cookies off, some of our services may not function
                            properly. However, you can still place orders by
                            contacting customer service.
                        </p>
                        <p className={styles.text}>
                            We also use web beacons in conjunction with cookies
                            to help us gather additional information about your
                            visit to our website.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            The Cookies We Set:
                        </h2>
                        <p className={styles.text}>
                            Email newsletters related cookies. This site offers
                            newsletter or email subscription services and
                            cookies may be used to remember if you are already
                            registered and whether to show certain notifications
                            which might only be valid to subscribed/unsubscribed
                            users.
                        </p>
                        <p className={styles.text}>
                            Orders processing related cookies. This site offers
                            e-commerce or payment facilities and some cookies
                            are essential to ensure that your order is
                            remembered between pages so that we can process it
                            properly.
                        </p>
                        <p className={styles.text}>
                            Forms related cookies. When you submit data to
                            through a form such as those found on contact pages
                            or comment forms cookies may be set to remember your
                            user details for future correspondence.
                        </p>
                        <p className={styles.text}>
                            Site preferences cookies. In order to provide you
                            with a great experience on this site we provide the
                            functionality to set your preferences for how this
                            site runs when you use it. In order to remember your
                            preferences we need to set cookies so that this
                            information can be called whenever you interact with
                            a page is affected by your preferences.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            Third Party Cookies
                        </h2>
                        <p className={styles.text}>
                            In some special cases we also use cookies provided
                            by trusted third parties. The following section
                            details which third party cookies you might
                            encounter through this site: Google Analytics which
                            is one of the most widespread and trusted analytics
                            solution on the web for helping us to understand how
                            you use the site and ways that we can improve your
                            experience. These cookies may track things such as
                            how long you spend on the site and the pages that
                            you visit so we can continue to produce engaging
                            content. Provided by Google Inc. (United
                            States) Privacy Shield participant.
                        </p>
                        <p className={`${styles.text} ${styles.textSecondary}`}>
                            As we sell services it’s important for us to
                            understand statistics about how many of the visitors
                            to our site actually make a purchase and as such
                            this is the kind of data that these cookies will
                            track. This is important to you as it means that we
                            can accurately make business predictions that allow
                            us to monitor our advertising and product costs to
                            ensure the best possible price.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            Do we Disclose any Information to Outside Parties?
                        </h2>
                        <p className={styles.text}>
                            We do not sell, trade, or otherwise transfer to
                            outside parties your personally identifiable
                            information. This does not include trusted third
                            parties who assist us in operating our website,
                            conducting our business, or servicing you, so long
                            as those parties agree to keep this information
                            confidential. We may also release your information
                            when we believe release is appropriate to comply
                            with the law, enforce our site policies, or protect
                            ours or others’ rights, property, or safety.
                            However, non-personally identifiable visitor
                            information may be provided to other parties for
                            marketing, advertising, or other uses.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            What Rights do you Have?
                        </h2>
                        <p className={styles.text}>
                            Access your data: You may be able to receive a
                            report about the data we store about you.
                        </p>
                        <p className={styles.text}>
                            Erasure: You may have a right to request the
                            deletion of some your data.
                        </p>
                        <p className={styles.text}>
                            Object: You may object to the processing of your
                            data if you believe we don’t have the appropriate
                            rights to engage in that processing or if you wish
                            to ask us not to process your personal data for
                            direct marketing purposes.
                        </p>
                        <p className={styles.text}>
                            Rectification: You can correct your personal data if
                            you feel it’s inaccurate.
                        </p>
                        <p className={styles.text}>
                            Restrict Processing: You can request that your data
                            no longer be processed in certain cases, for
                            instance, when you exercise your right to object as
                            described above. When objecting, you will be given
                            an option to restrict processing.
                        </p>
                        <p className={styles.text}>
                            Portability: Data portability is the ability to move
                            data from one company to another (for instance, when
                            you transfer your mobile phone service to another
                            carrier). While this right is not very applicable to
                            our current business, we will provide you with an
                            electronic file with your most basic account
                            information, should you request it.
                        </p>
                        <p className={styles.text}>
                            If you wish to perform any of the actions listed,
                            please contact our Data Protection Officer by
                            email: privacy@wowhunt.com.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>GDPR Compliance</h2>
                        <p className={styles.text}>
                            We have taken the necessary steps to ensure that we
                            are compliant with the General Data Protection
                            Regulation by protecting the personal data and
                            privacy of EU citizens for transactions that occur
                            within EU member states.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            California Online Privacy Protection Act Compliance
                        </h2>
                        <p className={styles.text}>
                            Because we value your privacy we have taken the
                            necessary precautions to be in compliance with the
                            California Online Privacy Protection Act. We
                            therefore will not distribute your personal
                            information to outside parties without your consent.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            Childrens Online Privacy Protection Act Compliance
                        </h2>
                        <p className={styles.text}>
                            We are in compliance with the requirements of COPPA
                            (Childrens Online Privacy Protection Act), we do not
                            collect any information from anyone under 13 years
                            of age. Our website, products and services are all
                            directed to people who are at least 13 years old or
                            older.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            CAN-SPAM Compliance
                        </h2>
                        <p className={styles.text}>
                            We have taken the necessary steps to ensure that we
                            are compliant with the CAN-SPAM Act of 2003 by never
                            sending out misleading information.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            Privacy Policy Customer Pledge
                        </h2>
                        <p className={styles.text}>
                            We pledge to you, our customer, that we have made a
                            dedicated effort to bring our privacy policy in line
                            with the the following important privacy laws and
                            initiatives:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                General Data Protection Regulation
                            </li>
                            <li className={styles.listItem}>
                                Federal Trade Commission Fair
                            </li>
                            <li className={styles.listItem}>
                                California Online Privacy Protection Act
                            </li>
                            <li className={styles.listItem}>
                                Childrens Online Privacy Protection Act
                            </li>
                            <li className={styles.listItem}>
                                Privacy Alliance
                            </li>
                            <li className={styles.listItem}>
                                Controlling the Assault of Non-Solicited
                                Pornography and Marketing Act
                            </li>
                            <li className={styles.listItem}>
                                Trust Guard Privacy Requirements
                            </li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Your Consent</h2>
                        <p className={styles.text}>
                            By using our site, you consent to our privacy
                            policy.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            Changes to our Privacy Policy
                        </h2>
                        <p className={styles.text}>
                            If we decide to change our privacy policy, we will
                            post those changes on this page, and/or update the
                            Privacy Policy modification date below. Policy
                            changes will apply only to information collected
                            after the date of the change.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <p className={styles.text}>
                            This document was last updated on November 30, 2022
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
