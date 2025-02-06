import styles from './pagination.module.css';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
}

export function Pagination({
    currentPage,
    totalPages,
    onPageChange,
    className,
}: PaginationProps) {
    const renderPaginationButtons = () => {
        const buttons = [];
        const visiblePages = 3;
        let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
        const endPage = Math.min(totalPages, startPage + visiblePages - 1);
        
        if (endPage - startPage + 1 < visiblePages) {
            startPage = Math.max(1, endPage - visiblePages + 1);
        }
        
        if (startPage > 1) {
            buttons.push(
                <button
                    key={1}
                    className={`${styles.pageButton} ${currentPage === 1 ? styles.activePage : ''}`}
                    onClick={() => onPageChange(1)}>
                    1
                </button>,
            );
            if (startPage > 2) {
                buttons.push(
                    <span key="dotsStart" className={styles.dots}>
                        ...
                    </span>,
                );
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <button
                    key={i}
                    className={`${styles.pageButton} ${currentPage === i ? styles.activePage : ''}`}
                    onClick={() => onPageChange(i)}>
                    {i}
                </button>,
            );
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                buttons.push(
                    <span key="dotsEnd" className={styles.dots}>
                        ...
                    </span>,
                );
            }
            buttons.push(
                <button
                    key={totalPages}
                    className={`${styles.pageButton} ${currentPage === totalPages ? styles.activePage : ''}`}
                    onClick={() => onPageChange(totalPages)}>
                    {totalPages}
                </button>,
            );
        }

        return buttons;
    };

    return (
        <div className={`${styles.pagination} ${className || ''}`}>
            {currentPage > 1 && (
                <button
                    className={`${styles.pageButton} ${styles.navButton}`}
                    onClick={() => onPageChange(currentPage - 1)}
                />
            )}
            {renderPaginationButtons()}
            {currentPage < totalPages && (
                <button
                    className={`${styles.pageButton} ${styles.navButton}`}
                    onClick={() => onPageChange(currentPage + 1)}
                />
            )}
        </div>
    );
}
