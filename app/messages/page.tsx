'use client';

import { useState } from 'react';
import styles from './messages.module.css';
import MessageCard from '@/components/message-card/message-card';
import { TabsList } from '@/components/tabs-list/tabs-list';
import { Pagination } from '@/components/pagination/pagination';

export interface Message {
    id: number;
    date: string;
    status:
        | 'Success'
        | 'Error'
        | 'Order status'
        | 'Advertisement'
        | 'System'
        | 'Security';
    title: string;
    deadline?: string;
    characterName?: string;
    rating?: string;
    piloted?: string;
    options?: string;
    quantity?: number;
    comment?: string;
    hasSupport?: boolean;
    hasChat?: boolean;
}

const messages: Message[] = [
    {
        id: 1,
        date: '12 APR 2024 10:34',
        status: 'Success',
        title: 'Arena 2v2 Rating Boost | FREE Stream Arena 2v2 Rating Boost | FREE Stream Arena 2v2 Rating Boost | FREE Stream Arena 2v2 Rating Boost | FREE Stream',
        deadline: '12th July 2022 09:00',
        characterName: 'Timelost Fatebringer God roll)',
        rating: '1-1800',
        piloted: 'Selfplay / Piloted: Selfplay',
        options: 'Arena Options: Steam',
        quantity: 1,
        comment:
            'Arena 2v2 Rating Boost | FREE StreamArena 2v2 Rating Boost | FREE',
        hasSupport: true,
    },
    {
        id: 2,
        date: '12 APR 2024 10:34',
        status: 'Error',
        title: 'Arena 2v2 Rating Boost | FREE Stream',
        deadline: '15th July 2022 10:00',
        characterName: 'Shadow Priest',
        rating: '1-2100',
        piloted: 'Selfplay',
        options: 'Arena Options: Steam',
        quantity: 1,
        comment: 'Arena 2v2 Rating Boost | FREE Stream',
        hasChat: true,
    },
    {
        id: 3,
        date: '12 APR 2024 10:34',
        status: 'Order status',
        title: 'Arena 2v2 Rating Boost | FREE Stream',
        deadline: '20th July 2022 15:30',
        characterName: 'Fire Mage',
        rating: '1-1600',
        piloted: 'Piloted',
        options: 'Arena Options: Steam',
        quantity: 2,
        comment: 'Arena 2v2 Rating Boost | FREE Stream',
        hasSupport: true,
    },
    {
        id: 4,
        date: '12 APR 2024 10:34',
        status: 'Advertisement',
        title: 'Arena 2v2 Rating Boost | FREE Stream',
        deadline: '25th July 2022 12:00',
        characterName: 'Frost Death Knight',
        rating: '1-2000',
        piloted: 'Selfplay',
        options: 'Arena Options: Steam',
        quantity: 1,
        comment: 'Arena 2v2 Rating Boost | FREE Stream',
        hasChat: true,
    },
    {
        id: 5,
        date: '12 APR 2024 10:34',
        status: 'System',
        title: 'Arena 2v2 Rating Boost | FREE Stream',
        deadline: '30th July 2022 18:45',
        characterName: 'Holy Paladin',
        rating: '1-1900',
        piloted: 'Piloted',
        options: 'Arena Options: Steam',
        quantity: 3,
        comment: 'Arena 2v2 Rating Boost | FREE Stream',
        hasSupport: true,
    },
    {
        id: 6,
        date: '12 APR 2024 10:34',
        status: 'Security',
        title: 'Arena 2v2 Rating Boost | FREE Stream',
        deadline: '2nd August 2022 11:15',
        characterName: 'Restoration Druid',
        rating: '1-2200',
        piloted: 'Selfplay',
        options: 'Arena Options: Steam',
        quantity: 1,
        comment: 'Arena 2v2 Rating Boost | FREE Stream',
        hasChat: true,
    },
    {
        id: 7,
        date: '12 APR 2024 10:34',
        status: 'Success',
        title: 'Arena 2v2 Rating Boost | FREE Stream',
        deadline: '5th August 2022 14:20',
        characterName: 'Arms Warrior',
        rating: '1-1700',
        piloted: 'Piloted',
        options: 'Arena Options: Steam',
        quantity: 2,
        comment: 'Arena 2v2 Rating Boost | FREE Stream',
        hasSupport: true,
    },
    {
        id: 8,
        date: '12 APR 2024 10:34',
        status: 'Error',
        title: 'Arena 2v2 Rating Boost | FREE Stream',
        deadline: '8th August 2022 16:30',
        characterName: 'Affliction Warlock',
        rating: '1-2300',
        piloted: 'Selfplay',
        options: 'Arena Options: Steam',
        quantity: 1,
        comment: 'Arena 2v2 Rating Boost | FREE Stream',
        hasChat: true,
    },
    {
        id: 9,
        date: '12 APR 2024 10:34',
        status: 'Success',
        title: 'Arena 2v2 Rating Boost | FREE Stream',
        deadline: '12th August 2022 09:45',
        characterName: 'Enhancement Shaman',
        rating: '1-1500',
        piloted: 'Piloted',
        options: 'Arena Options: Steam',
        quantity: 4,
        comment: 'Arena 2v2 Rating Boost | FREE Stream',
        hasSupport: true,
    },
    {
        id: 10,
        date: '12 APR 2024 10:34',
        status: 'Advertisement',
        title: 'Arena 2v2 Rating Boost | FREE Stream',
        deadline: '15th August 2022 13:10',
        characterName: 'Subtlety Rogue',
        rating: '1-2400',
        piloted: 'Selfplay',
        options: 'Arena Options: Steam',
        quantity: 1,
        comment: 'Arena 2v2 Rating Boost | FREE Stream',
        hasChat: true,
    },
    {
        id: 11,
        date: '12 APR 2024 10:34',
        status: 'System',
        title: 'Arena 2v2 Rating Boost | FREE Stream',
        deadline: '18th August 2022 17:25',
        characterName: 'Discipline Priest',
        rating: '1-1850',
        piloted: 'Piloted',
        options: 'Arena Options: Steam',
        quantity: 2,
        comment: 'Arena 2v2 Rating Boost | FREE Stream',
        hasSupport: true,
    },
    {
        id: 12,
        date: '12 APR 2024 10:34',
        status: 'Security',
        title: 'Arena 2v2 Rating Boost | FREE Stream',
        deadline: '22nd August 2022 10:55',
        characterName: 'Fury Warrior',
        rating: '1-2150',
        piloted: 'Selfplay',
        options: 'Arena Options: Steam',
        quantity: 1,
        comment: 'Arena 2v2 Rating Boost | FREE Stream',
        hasChat: true,
    },
    {
        id: 13,
        date: '12 APR 2024 10:34',
        status: 'Success',
        title: 'Arena 2v2 Rating Boost | FREE Stream',
        deadline: '25th August 2022 15:40',
        characterName: 'Frost Mage',
        rating: '1-1950',
        piloted: 'Piloted',
        options: 'Arena Options: Steam',
        quantity: 3,
        comment: 'Arena 2v2 Rating Boost | FREE Stream',
        hasSupport: true,
    },
    {
        id: 14,
        date: '12 APR 2024 10:34',
        status: 'Order status',
        title: 'Arena 2v2 Rating Boost | FREE Stream',
        deadline: '28th August 2022 12:15',
        characterName: 'Demonology Warlock',
        rating: '1-2250',
        piloted: 'Selfplay',
        options: 'Arena Options: Steam',
        quantity: 1,
        comment: 'Arena 2v2 Rating Boost | FREE Stream',
        hasChat: true,
    },
    {
        id: 15,
        date: '12 APR 2024 10:34',
        status: 'Advertisement',
        title: 'Arena 2v2 Rating Boost | FREE Stream',
        deadline: '31st August 2022 19:30',
        characterName: 'Restoration Shaman',
        rating: '1-1750',
        piloted: 'Piloted',
        options: 'Arena Options: Steam',
        quantity: 2,
        comment: 'Arena 2v2 Rating Boost | FREE Stream',
        hasSupport: true,
    },
];

const tabs = [
    { id: 'all', label: 'All' },
    { id: 'success', label: 'Success' },
    { id: 'order-status', label: 'Order status' },
    { id: 'system', label: 'System' },
    { id: 'advertisement', label: 'Advertisement' },
    { id: 'security', label: 'Security' },
    { id: 'error', label: 'Error' },
];

export default function Messages() {
    const [activeTab, setActiveTab] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const filteredMessages = messages.filter((message) => {
        if (activeTab === 'all') return true;
        return message.status.toLowerCase().replace(' ', '-') === activeTab;
    });

    const totalPages = Math.ceil(filteredMessages.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentMessages = filteredMessages.slice(startIndex, endIndex);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h3 className={styles.title}>Messages</h3>
                <TabsList
                    tabs={tabs.map((tab) => tab.label)}
                    activeTab={
                        tabs.find((tab) => tab.id === activeTab)?.label || ''
                    }
                    onTabChange={(label: string) => {
                        const tab = tabs.find((t) => t.label === label);
                        if (tab) {
                            setActiveTab(tab.id);
                            setCurrentPage(1);
                        }
                    }}
                    className={styles.tabs}
                    tabClassName={styles.tab}
                    activeTabClassName={styles.active}
                />

                <div className={styles.messages}>
                    {currentMessages.map((message) => (
                        <MessageCard key={message.id} message={message} />
                    ))}
                </div>

                {totalPages > 1 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={(page) => {
                            setCurrentPage(page);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    />
                )}
            </div>
        </div>
    );
}
