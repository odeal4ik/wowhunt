import styles from './message-card.module.css';
import { Message } from '../../app/messages/page';
import { useState } from 'react';

import {Icon} from '@/core-components/icon/icon';
import Support from '@/images/system-icons/support.svg';

interface MessageCardProps {
    message: Message;
}

export default function MessageCard({ message }: MessageCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div
            key={message.id}
            className={`${styles.messageCard} ${styles[message.status.toLowerCase().replace(' ', '-') + 'Border']}`}
            onClick={toggleExpand}>
            <div className={styles.messageHeader}>
                <div className={styles.statusContainer}>
                    <span className={styles.date}>{message.date}</span>
                    <span
                        className={`${styles.status} ${styles[message.status.toLowerCase().replace(' ', '-')]}`}>
                        {message.status}
                    </span>
                    <h3 className={styles.title}>{message.title}</h3>
                </div>

                <div className={styles.actions}>
                    {message.hasSupport && (
                        <button className={styles.supportButton}>
                            <Icon svg={Support} aria-label="Support" />
                            Support
                        </button>
                    ) }
                    {message.hasChat && (
                        <button className={styles.chatButton}>
                             <Icon svg={Support} aria-label="Support" />
                            Chat
                        </button>
                    )}
                    <button className={styles.moreInfoButton}>More info</button>
                </div>
            </div>
            {isExpanded && (
                <div className={styles.messageContent}>
                    <div className={styles.mainInfo}>
                        {message.deadline && (
                            <div className={styles.deadline}>
                                <span className={styles.label}>Deadline</span>
                                <span className={styles.value}>
                                    {message.deadline}
                                </span>
                            </div>
                        )}
                        {message.characterName && (
                            <div className={styles.characterName}>
                                {message.characterName}
                            </div>
                        )}
                        <div className={styles.details}>
                            {message.rating && (
                                <span>
                                    Select Your Current and Desired Rating:{' '}
                                    {message.rating}
                                </span>
                            )}
                            {message.piloted && <span>{message.piloted}</span>}
                            {message.options && <span>{message.options}</span>}
                        </div>
                        {message.quantity && (
                            <div className={styles.quantity}>
                                <span className={styles.label}>Quantity:</span>
                                <span className={styles.value}>
                                    {message.quantity}
                                </span>
                            </div>
                        )}
                        {message.comment && (
                            <div className={styles.comment}>
                                <span className={styles.label}>Comment:</span>
                                <span className={styles.value}>
                                    {message.comment}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
