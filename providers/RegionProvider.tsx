'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type RegionType = 'us' | 'eu';

interface RegionContextType {
    region: RegionType;
    setRegion: (region: RegionType) => void;
}

const RegionContext = createContext<RegionContextType | undefined>(undefined);

export function RegionProvider({ children }: { children: React.ReactNode }) {

    const [region, setRegion] = useState<RegionType>('eu');

    useEffect(() => {
        const savedRegion = localStorage.getItem('region') as RegionType;
        if (savedRegion) {
            setRegion(savedRegion);
        }
    }, []);

    return (
        <RegionContext.Provider value={{ region, setRegion }}>
            {children}
        </RegionContext.Provider>
    );
}

export function useRegion() {
    const context = useContext(RegionContext);
    if (!context) {
        throw new Error('useRegion must be used within a RegionProvider');
    }
    return context;
}
