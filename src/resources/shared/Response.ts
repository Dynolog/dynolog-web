import { AxiosResponse } from "axios";

export type Response<T> = Promise<AxiosResponse<T>>;