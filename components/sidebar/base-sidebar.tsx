import styles from './sidebar.module.css';

interface BaseSidebarProps {
    isVisible: boolean;
    children: React.ReactNode;
}

export function BaseSidebar({ isVisible, children }: BaseSidebarProps) {
    if (!isVisible) {
        return null;
    }

    return (
        <div className={styles.sidebar}>
            <ul className={styles.list}>{children}</ul>
        </div>
    );
}
