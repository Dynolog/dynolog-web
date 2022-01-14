export const toHHMMSS = (secs: any) => {
    const secondsInNumber = parseInt(secs, 10);
    const hours = Math.floor(secondsInNumber / 3600);
    const minutes = Math.floor(secondsInNumber / 60) % 60;
    const seconds = secondsInNumber % 60;

    return [hours, minutes, seconds]
        .map(value => value < 10 ? "0" + value : value)
        .join(":")
}

export const diffHours = (startDate: string, finalDate: string) => {
    const startDateInSeconds = new Date(startDate).getTime() / 1000;
    const finalDateInSeconds = new Date(finalDate).getTime() / 1000;

    const diffInSeconds = finalDateInSeconds - startDateInSeconds;

    return toHHMMSS(diffInSeconds)
}