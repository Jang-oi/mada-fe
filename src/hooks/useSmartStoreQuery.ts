import {axiosAPI} from "../utils/axios";
import {useQuery} from '@tanstack/react-query';
import {RequestAxiosTypes} from "../types/axiosTypes";


export const useSmartStoreQuery = (params: RequestAxiosTypes, title : string) => {
    title = title.toLowerCase().replace(/\s/g, '');

    let QUERY_KEY_SMART_STORE = title;
    const fetcher = async () => {
        return await axiosAPI(`/get${title}`, params);
    };

    return useQuery({
        queryKey: [QUERY_KEY_SMART_STORE],
        queryFn: fetcher,
        enabled: false,
        select: (data) => {
            return data.data.data;
        }
    });
};