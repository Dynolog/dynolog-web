import { api } from '../../configuration';

export interface Summary {
    totalTime: string;
    totalAmountByCurrency:
    {
        currency: string,
        amount: number
    }[];
    nonBillableHours: {
        totalTime: string;
        timeEntries: [
            {
                id: string;
                description: string;
                start: string;
                stop: string;
            },
            {
                id: string;
                description: string;
                start: string;
                stop: string;
            }
        ]
    },
    projects: [
        {
            id: string;
            totalTime: string;
            currency: string;
            color: string;
            billableHoursAmount: number;
            name: string;
        }
    ]
}

export type SummaryQueryParams = {
    start_date: Date;
    end_date: Date;
    user_id: string;
}

export const summary = (search: SummaryQueryParams) => {

    let params = new URLSearchParams([
        ["start_date", search.start_date.toISOString()],
        ["end_date", search.end_date.toISOString()],
        ["user_id", search.user_id]
    ])

    return api.get<Summary>('/reports/summary', { params })
}

const Reports = {
    summary
};

export default Reports;
