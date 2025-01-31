export async function signUp({
    type,
    email,
    password,
    password_confirmation,
}: {
    type: boolean;
    email: string;
    password: string;
    password_confirmation: string;
}): Promise<{ token: string } | null> {
    try {
        const response = await fetch(`https://dev.wowhunt.com/api/register`, {
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
                Authorization: `Bearer 2|bnfWUaI7PlzRFgqRrppOa75qOhLrIj4lnJBUM3mQf1438fd1`,
            },
            method: 'POST',
            body: JSON.stringify({
                type,
                email,
                password,
                password_confirmation,
            }),
        });

        return response.json();
    } catch (error) {
        console.log(error);
        return null;
    }
}

// was registered with
// signUp({
//     type: false,
//     email: 'api@test2.email',
//     password: 'Aknn*7bbjb',
//     password_confirmation: 'Aknn*7bbjb',
// });
