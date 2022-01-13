import { api } from '../../configuration';
import { Page } from '../shared/Page';

export interface TimeEntry {
    id: number;
    description: string;
    start: string;
    stop: string;
}

export const index = (params: any = {}) =>
    api.get<Page<TimeEntry>>('/time-entries', { params });

export const create = (body: Omit<TimeEntry, 'id'>) =>
    api.post<TimeEntry>('/time-entries', body);

const TimeEntries = {
    index,
    create,
};

export default TimeEntries;
