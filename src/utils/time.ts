import { differenceInMilliseconds } from "date-fns";
import { TimeEntry } from "../resources/time-entry";

const pad = (time: number): string => {
    const integer = parseInt(String(time))
    return (integer < 10 ? '0' : '') + integer;
};

export const toHHMMSS = ({ start, stop }: Pick<TimeEntry, 'start' | 'stop'>): string => {
    const milliseconds = differenceInMilliseconds(new Date(stop), new Date(start))

    const secs = milliseconds / 1000;
    const hours = secs / 3600;
    const minutes = (secs % 3600) / 60;
    const seconds = secs % 60;

    return [
        hours,
        minutes,
        seconds
    ].map(pad).join(":")
}