import { useState } from 'react';
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
            <div
                className={`${styles.searchIcon} ${isSearchVisible ? styles.active : ''}`}
                onClick={() => {
                    setIsSearchVisible(!isSearchVisible);
                    if (isSearchVisible) {
                        setQuery('');
                    }
                }}>
            </div>
            {isSearchVisible && (
                <button 
                    className={styles.searchButton}
                    onClick={handleSubmitSearch}
                >
                    Search
                </button>
            )}
        </div>
    );
}
