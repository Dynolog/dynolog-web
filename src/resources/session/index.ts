import { AxiosResponse } from 'axios';
import { api } from '../../configuration';

export interface User {
  id: string;
  name: string;
  email: string;
  timezone: string;
  dateFormat: string;
  timeFormat: string;
  roles: string[];
}

export interface Session {
  user: User;
  access_token: string;
  expires_in: Date;
  refresh_token: string;
  token_type: string;
}

interface CreateSessionProps {
  email: string;
  password: string;
}

export const create = ({ email, password }: CreateSessionProps): Promise<AxiosResponse<Session>> =>
  api.post('/sessions', {
    email,
    password,
  });

const Sessions = {
  create,
};

export default Sessions;
