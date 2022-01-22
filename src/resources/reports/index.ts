import { api } from '../../configuration';

export interface Summary {
    totalTime: string,
    billableHoursAmount: number
}

export type SummaryQueryParams = {
    start_date: Date;
    end_date: Date;
    user_id: number;
}

export const summary = (search: SummaryQueryParams) => {

    let params = new URLSearchParams([
        ["start_date", search.start_date.toISOString()],
        ["end_date", search.end_date.toISOString()],
        ["user_id", search.user_id.toString()]
    ])

    return api.get<Summary>('/reports/summary', { params })
}

const Reports = {
    summary
};

export default Reports;
