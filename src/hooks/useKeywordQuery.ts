import {axiosAPI} from "../utils/axios";
import {useQuery} from '@tanstack/react-query';
import {RequestAxiosTypes} from "../types/axiosTypes";

export const QUERY_KEY_KEYWORD = 'GET_KEYWORD';

export const useKeywordQuery = (params: RequestAxiosTypes) => {
    const fetcher = async () => {
        return await axiosAPI('/getKeyword', params);
    };

    return useQuery({
        queryKey: [QUERY_KEY_KEYWORD],
        queryFn: fetcher,
        enabled: false,
        select: (data) => {
            return data.data.data;
        },
    });
};