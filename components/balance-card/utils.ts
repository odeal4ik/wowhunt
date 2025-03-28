export const calculateDate = (daysAgo: number) => {
    const date = new Date();
    date.setDate(date.getUTCDate() - daysAgo);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    return `${day}.${month}`;
};
