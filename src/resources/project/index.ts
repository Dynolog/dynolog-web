export interface Project {
    id: string;
    name: string;
    color: string;
    hourlyRate: number;
    user: {
        id: string;
        name: string;
    };
}