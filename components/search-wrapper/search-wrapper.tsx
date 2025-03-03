import { useState } from 'react';

import { Icon } from '@/core-components/icon/icon';

import Search from '@/images/system-icons/search.svg';

import styles from './search-wrapper.module.css';

export function SearchWrapper() {
    const [query, setQuery] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const handleSubmitSearch = () => {
        if (query.trim()) {
            localStorage.setItem('dataSearch', query);
            window.location.href = '/search';
        }
    };

    return (
        <div className={styles.searchWrapper}>
            <input
                className={`${styles.search} ${isSearchVisible ? styles.active : ''}`}
                type="text"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSubmitSearch();
                    }
                }}
            />
            <button
                className={`${styles.searchIcon} ${isSearchVisible ? styles.active : ''}`}
                onClick={() => {
                    if (query) {
                        handleSubmitSearch();
                    } else {
                        setIsSearchVisible(!isSearchVisible);
                    }
                }}>
                <Icon svg={Search} fill="#9F9FB7" area-label="Search" />
            </button>
            {isSearchVisible && (
                <button
                    className={styles.searchButton}
                    onClick={handleSubmitSearch}>
                    Search
                </button>
            )}
        </div>
    );
}
