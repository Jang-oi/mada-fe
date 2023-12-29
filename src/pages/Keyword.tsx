import React from 'react';
import SearchUrlTemplate from "../components/common/SearchUrlTemplate";
import {useKeywordQuery} from "../hooks/useKeywordQuery";
import {useRecoilValue} from "recoil";
import {searchUrlState} from "../recoil/searchUrl/atom";
import LoadingComponent from "../components/common/LoadingComponent";

const Keyword = () => {

    // const storageSearchUrl = useRecoilValue<string>(searchUrlState);
    //
    // const query = useKeywordQuery({url: storageSearchUrl});
    //
    // const {isInitialLoading, data, isLoading} = query;
    // console.log(data, isInitialLoading, isLoading);
    // if (isInitialLoading) return <LoadingComponent/>

    return (
        <>
            <SearchUrlTemplate title={'KEYWORD'}/>
        </>
    );
};

export default Keyword;