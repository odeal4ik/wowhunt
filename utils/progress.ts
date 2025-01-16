interface UserProgress {
    image: string;
    title: string;
}

const PROGRESS = {
    GAMER_LEVEL: 70,
    IMAGES: {
        GAMER: '/images/level-gamer.png',
        BEGINNER: '/images/level-beginner.png'
    },
    TITLES: {
        GAMER: 'Gamer',
        BEGINNER: 'Beginner'
    }
} as const;

export const getUserProgress = (progress: number): UserProgress => {
    if (progress >= PROGRESS.GAMER_LEVEL) {
        return {
            image: PROGRESS.IMAGES.GAMER,
            title: PROGRESS.TITLES.GAMER,
        };
    }
    return {
        image: PROGRESS.IMAGES.BEGINNER,
        title: PROGRESS.TITLES.BEGINNER,
    };
};
