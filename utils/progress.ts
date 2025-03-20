interface UserProgress {
    title: string;
    description: string;
}

const PROGRESS = {
    GAMER_LEVEL: 70,
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
            title: PROGRESS.TITLES.GAMER,
            description: PROGRESS.DESCRIPTION,
        };
    }
    return {
        title: PROGRESS.TITLES.BEGINNER,
        description: PROGRESS.DESCRIPTION,
    };
};
