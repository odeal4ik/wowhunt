import dynamic from 'next/dynamic';

import { Icon } from '@/core-components/icon/icon';

import styles from './progress-image.module.css';

const CustomerSkeleton = () => {
    return <div className={styles.smallSkeleton} />;
};

const BoosterSkeleton = () => {
    return <div className={styles.bigSkeleton} />;
};

const BoosterLevel1 = dynamic<SvgrComponent>(
    () => import('@/images/levels/booster-lvl-1.svg'),
    {
        ssr: false,
        loading: BoosterSkeleton,
    },
);

const BoosterLevel2 = dynamic<SvgrComponent>(
    () => import('@/images/levels/booster-lvl-2.svg'),
    {
        ssr: false,
        loading: BoosterSkeleton,
    },
);

const BoosterLevel3 = dynamic<SvgrComponent>(
    () => import('@/images/levels/booster-lvl-3.svg'),
    {
        ssr: false,
        loading: BoosterSkeleton,
    },
);

const CustomerLevel1 = dynamic<SvgrComponent>(
    () => import('@/images/levels/user-lvl-1.svg'),
    {
        ssr: false,
        loading: CustomerSkeleton,
    },
);

const CustomerLevel2 = dynamic<SvgrComponent>(
    () => import('@/images/levels/user-lvl-2.svg'),
    {
        ssr: false,
        loading: CustomerSkeleton,
    },
);

const CustomerLevel3 = dynamic<SvgrComponent>(
    () => import('@/images/levels/user-lvl-3.svg'),
    {
        ssr: false,
        loading: CustomerSkeleton,
    },
);

const CustomerLevel4 = dynamic<SvgrComponent>(
    () => import('@/images/levels/user-lvl-4.svg'),
    {
        ssr: false,
        loading: CustomerSkeleton,
    },
);

const CustomerLevel5 = dynamic<SvgrComponent>(
    () => import('@/images/levels/user-lvl-5.svg'),
    {
        ssr: false,
        loading: CustomerSkeleton,
    },
);

const CustomerLevelIcon = {
    1: CustomerLevel1 as SvgrComponent,
    2: CustomerLevel2 as SvgrComponent,
    3: CustomerLevel3 as SvgrComponent,
    4: CustomerLevel4 as SvgrComponent,
    5: CustomerLevel5 as SvgrComponent,
};

const BoosterLevelIcon = {
    1: BoosterLevel1 as SvgrComponent,
    2: BoosterLevel2 as SvgrComponent,
    3: BoosterLevel3 as SvgrComponent,
};

interface ProfileVariantProps {
    isBooster: true;
    level: 1 | 2 | 3;
}

interface BoosterVariantProps {
    isBooster: false;
    level: 1 | 2 | 3 | 4 | 5;
}

type ProgressBlockProps = ProfileVariantProps | BoosterVariantProps;

export function ProgressImage({ level, isBooster }: ProgressBlockProps) {
    return (
        <Icon
            svg={isBooster ? BoosterLevelIcon[level] : CustomerLevelIcon[level]}
            label={String(level)}
            fill="none"
        />
    );
}
