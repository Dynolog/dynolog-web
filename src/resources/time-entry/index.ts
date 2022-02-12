import { api } from '../../configuration';
import { Page } from '../shared/Page';

export interface TimeEntry {
    id: string;
    description: string;
    start: string;
    stop: string;
    user: {
        id: string;
        name: string;
    };
    project: {
        id: string;
        name: string;
        color: string;
    }
}

export type TimeEntryQueryParams = {
    page?: number;
    size?: number;
    user_id: string
    start_date: Date;
    end_date: Date;
}

export const index = (params: TimeEntryQueryParams) =>
    api.get<Page<TimeEntry>>('/time-entries', { params });

export const create = (body: Omit<TimeEntry, 'id'>) =>
    api.post<TimeEntry>('/time-entries', body);

const TimeEntries = {
    index,
    create,
};

export default TimeEntries;
