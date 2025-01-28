import cn from 'classnames';
import styles from './region-faction-server-selector.module.css';

interface RegionSelectorProps {
    activeRegion: string;
    activeFaction: string;
    onRegionChange: (region: string) => void;
    onFactionChange: (faction: string) => void;
}

export function RegionFactionServerSelector({
    activeRegion,
    activeFaction,
    onRegionChange,
    onFactionChange,
}: RegionSelectorProps) {
    return (
        <div className={styles.regionSelector}>
            <p className={styles.regionSelectorTitle}>
                Select your region, faction, and server
            </p>
            <div className={styles.regionSelectorContent}>
                <div className={styles.regionButtons}>
                    <button
                        onClick={() => onRegionChange('EU')}
                        className={cn(styles.regionBtn, {
                            [styles.active]: activeRegion === 'EU',
                        })}>
                        EU
                    </button>
                    <button
                        onClick={() => onRegionChange('US')}
                        className={cn(styles.regionBtn, {
                            [styles.active]: activeRegion === 'US',
                        })}>
                        US
                    </button>
                </div>
                <div className={styles.factionButtons}>
                    <button
                        onClick={() => onFactionChange('Alliance')}
                        className={cn(styles.factionBtn, {
                            [styles.active]: activeFaction === 'Alliance',
                        })}>
                        Alliance
                    </button>
                    <button
                        onClick={() => onFactionChange('Horde')}
                        className={cn(styles.factionBtn, {
                            [styles.active]: activeFaction === 'Horde',
                        })}>
                        Horde
                    </button>
                </div>
                <div className={styles.serverSelect}>
                    <select className={styles.select}>
                        <option>Choose server</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
