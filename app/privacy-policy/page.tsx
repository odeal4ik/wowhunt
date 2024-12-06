'use client';
import styles from './privacy-policy.module.css';
import Image from 'next/image';

export default function PrivacyPolicy() {
    const sections = [
        {
            title: 'What Information do we Collect?',
            description: `We collect information from you when you place an order, request a service or subscribe to our newsletter.\nAny data we request that is not required will be specified as voluntary or optional.\nWhen ordering the services on our site, as appropriate, you may be asked to enter your: name, e-mail address or discord tag. You may, however, visit our site anonymously.\nLike most websites, we use cookies to enhance your experience, gather general visitor information, and track visits to our website. Please refer to the 'do we use cookies?' section below for information about cookies and how we use them.`,
        },
        {
            title: 'What do we Use Your Information For?',
            beforeList:
                'Any of the information we collect from you may be used in one of the following ways:',
            list: [
                'To Personalize Your Experience: Your information helps us to better respond to your individual needs.\n',
                'To Improve Our Website: We continually strive to improve our website offerings based on the information and feedback we receive from you.',
                'To Improve Customer Service: Your information helps us to more effectively respond to your customer service requests and support needs.',
                'To Process Transactions: Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested by the customer.',
                'To Send Periodic Emails: The email address you provide for order processing, may be used to send you information and updates pertaining to your order or request, in addition to receiving occasional company news, updates, promotions, related product or service information, etc.',
            ],
            afterList: `The email address you provide for order processing, may be used to send you information and updates pertaining to your order or request,
                in addition to receiving occasional company news, updates, promotions, related product or service 
                information, etc.`,
        },
        {
            title: 'How do we Protect Your Information?',
            description: `We implement a variety of security measures to maintain the safety of your personal information when you submit a request, place an order or enter, submit, or access your personal information.\nThese security measures include: password protected directories and databases to safeguard your information, SSL (Secure Sockets Layered) technology to ensure that your information is fully encrypted and sent across the Internet securely or
                PCI Scanning to actively protect our servers from hackers and other vulnerabilities.\nWe offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment gateway providers database only to be accessible by those authorized with
                special access rights to such systems, and are required to keep the information confidential.\nAfter a transaction, your private information (credit cards, social security numbers, financials, etc.) will not be stored on our servers.`,
        },
        {
            title: 'Do we Use Cookies?',
            description: `Cookies are small files that a site or its service provider transfers to your computer’s hard drive through your Web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember
                certain information.\nWe use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits, keep track of advertisements and compile aggregate data about site traffic and site interaction so that we
                can offer better site experiences and tools in the future. We may contract with third-party service providers to assist us in better understanding our site visitors. These service providers are not permitted to use the information collected on our
                behalf except to help us conduct and improve our business.\nIf you prefer, you can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies via your browser settings. Like most websites, if you turn your cookies off, some of our services may not
                function properly. However, you can still place orders by contacting customer service.\nWe also use web beacons in conjunction with cookies to help us gather additional information about your visit to our website.`,
        },
        {
            title: 'The Cookies We Set:',
            description: `Email newsletters related cookies. This site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to
                subscribed/unsubscribed users.\nOrders processing related cookies. This site offers e-commerce or payment facilities and some cookies are essential to ensure that your order is remembered between pages so that we can process it properly.\nForms related cookies. When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.\nSite preferences cookies. In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that
                this information can be called whenever you interact with a page is affected by your preferences.`,
        },
        {
            title: 'Third Party Cookies',
            beforeList: `In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site:
                Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long
                you spend on the site and the pages that you visit so we can continue to produce engaging content. Provided by Google Inc. (United States) Privacy Shield participant.`,
            afterList: `As we sell services it’s important for us to understand statistics about how many of the visitors to our site actually make a purchase and as such this is the kind of data that these cookies will track. This is important to you as it means that we can
                accurately make business predictions that allow us to monitor our advertising and product costs to ensure the best possible price.`,
        },
        {
            title: 'Do we Disclose any Information to Outside Parties?',
            description: `We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information.
                This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
                We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others’ rights, property, or safety.
                However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.`,
        },
        {
            title: 'What Rights do you Have?',
            description: `Access your data: You may be able to receive a report about the data we store about you.
                Erasure: You may have a right to request the deletion of some your data.
                Object: You may object to the processing of your data if you believe we don’t have the appropriate rights to engage in that processing or if you wish to ask us not to process your personal data for direct marketing purposes.
                Rectification: You can correct your personal data if you feel it’s inaccurate.
                Restrict Processing: You can request that your data no longer be processed in certain cases, for instance, when you exercise your right to object as described above. When objecting, you will be given an option to restrict processing.
                Portability: Data portability is the ability to move data from one company to another (for instance, when you transfer your mobile phone service to another carrier). While this right is not very applicable to our current business, we will provide you
                with an electronic file with your most basic account information, should you request it.If you wish to perform any of the actions listed, please contact our Data Protection Officer by email: privacy@wowhunt.com.`,
        },

        {
            title: 'GDPR Compliance',
            description:
                'We have taken the necessary steps to ensure that we are compliant with the General Data Protection Regulation by protecting the personal data and privacy of EU citizens for transactions that occur within EU member states.',
        },
        {
            title: 'California Online Privacy Protection Act Compliance',
            description:
                'Because we value your privacy we have taken the necessary precautions to be in compliance with the California Online Privacy Protection Act. We therefore will not distribute your personal information to outside parties without your consent.',
        },
        {
            title: 'Childrens Online Privacy Protection Act Compliance',
            description:
                'We are in compliance with the requirements of COPPA (Childrens Online Privacy Protection Act), we do not collect any information from anyone under 13 years of age. Our website, products and services are all directed to people who are at least 13 years old or older.',
        },
        {
            title: 'CAN-SPAM Compliance',
            description:
                'We have taken the necessary steps to ensure that we are compliant with the CAN-SPAM Act of 2003 by never sending out misleading information.',
        },
        {
            title: 'Privacy Policy Customer Pledge',
            beforeList:
                'We pledge to you, our customer, that we have made a dedicated effort to bring our privacy policy in line with the the following important privacy laws and initiatives:\n',
            list: [
                'General Data Protection Regulation\n',
                'Federal Trade Commission Fair\n',
                'California Online Privacy Protection Act\n',
                'Childrens Online Privacy Protection Act\n',
                'Privacy Alliance\n',
                'Controlling the Assault of Non-Solicited Pornography and Marketing Act\n',
                'Trust Guard Privacy Requirements\n',
            ],
        },
        {
            title: 'Your Consent',
            description:
                'By using our site, you consent to our privacy policy.',
        },
        {
            title: 'Changes to our Privacy Policy',
            description: `If we decide to change our privacy policy, we will post those changes on this page, and/or update the Privacy Policy modification date below. Policy changes will apply only to information collected after the date of the change.`,
        },
        {
            title: '',
            description: 'This document was last updated on November 30, 2022.',
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.imageContainer}>
                    <Image
                        src="/images/privacy_policy.webp"
                        alt="Privacy Policy"
                        width={610}
                        height={605}
                        className={styles.agencyImg}
                    />
                    <h1 className={styles.title}>
                        Privacy Policy <br />{' '}
                        <span className={styles.titleSpan}>Offer</span>
                    </h1>
                </div>
                <div className={styles.texts}>
                    {sections.map((section, index) => (
                        <div key={index} className={styles.section}>
                            {section.title && (
                                <h2 className={styles.sectionTitle}>
                                    {section.title}
                                </h2>
                            )}
                            {section.description && (
                                <p className={styles.text}>
                                    {section.description.trim()}
                                </p>
                            )}
                            {section.beforeList && (
                                <p className={styles.text}>
                                    {section.beforeList}
                                </p>
                            )}
                            {section.list && (
                                <ul className={styles.list}>
                                    {section.list.map((item, i) => (
                                        <li key={i} className={styles.listItem}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {section.afterList && (
                                <p
                                    className={`${styles.text} ${section.title === 'Third Party Cookies' ? styles.thirdPartyCookiesAfterList : ''}`}>
                                    {section.afterList}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
