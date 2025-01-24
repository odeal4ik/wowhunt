interface UserProgress {
    image: string;
    title: string;
    description: string;
}

const PROGRESS = {
    GAMER_LEVEL: 70,
    IMAGES: {
        GAMER: '/images/level-gamer.png',
        BEGINNER: '/images/level-beginner.png',
    },
    TITLES: {
        GAMER: 'Gamer',
        BEGINNER: 'Beginner',
    },
    DESCRIPTION:
        'Your progress is the amount accumulated through your purchases, make them to get more rewards.',
} as const;

export const getUserProgress = (progress: number): UserProgress => {
    if (progress >= PROGRESS.GAMER_LEVEL) {
        return {
            image: PROGRESS.IMAGES.GAMER,
            title: PROGRESS.TITLES.GAMER,
            description: PROGRESS.DESCRIPTION,
        };
    }
    return {
        image: PROGRESS.IMAGES.BEGINNER,
        title: PROGRESS.TITLES.BEGINNER,
        description: PROGRESS.DESCRIPTION,
    };
};
