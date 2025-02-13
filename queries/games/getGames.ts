type Gemes = unknown;

export async function getGames(): Promise<Gemes | null> {
    try {
        const response = await fetch(`https://dev.wowhunt.com/games/get`, {
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
        });

        return response.json();
    } catch (error) {
        console.log(error);
        return null;
    }
}
