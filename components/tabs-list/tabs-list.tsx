import cn from 'classnames';

interface TabsListProps {
    tabs: string[];
    activeTab: string;
    onTabChange: (tab: string) => void;
    className?: string;
    tabClassName?: string;
    activeTabClassName?: string;
}

export function TabsList({
    tabs,
    activeTab,
    onTabChange,
    className,
    tabClassName,
    activeTabClassName,
}: TabsListProps) {
    return (
        <div className={className}>
            {tabs.map((name) => (
                <button
                    key={name}
                    type="button"
                    onClick={() => onTabChange(name)}
                    className={cn(tabClassName, {
                        [activeTabClassName ?? '']: activeTab === name,
                    })}>
                    {name}
                </button>
            ))}
        </div>
    );
}
