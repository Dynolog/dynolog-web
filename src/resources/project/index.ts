import { api } from "../../configuration";

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

export type ProjectQueryParams = {
    user_id: string
}

export const index = (params: ProjectQueryParams) =>
    api.get<Project[]>('/projects', { params });

export const create = (body: Omit<Project, 'id' | 'user'> & { userId: string, currency: string }) =>
    api.post<Project>('/projects', body);

const Projects = {
    index,
    create
};

export default Projects;