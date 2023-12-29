import axios from 'axios';
import {RequestAxiosTypes} from '../types/axiosTypes';

const BASE_URL_API = 'http://localhost:3001/mada/api/v1/';

/**
 * @param url
 * @param params
 */
export const axiosAPI = (url: string, params: RequestAxiosTypes) => {
    return axios.create({baseURL: BASE_URL_API}).post(url, {
        ...params,
    });
}