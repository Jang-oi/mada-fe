import {Box, Button, Input, Typography} from '@mui/joy';
import {searchUrlState} from "../../recoil/searchUrl/atom";
import {useRecoilState, useSetRecoilState} from "recoil";
import React, {useState} from "react";
import {useSmartStoreQuery} from "../../hooks/useSmartStoreQuery";
import LoadingComponent from "./LoadingComponent";
import {keywordState, productDateState, reviewState} from "../../recoil/smartStore/atom";

interface SearchUrlProps {
    title: string,
}

const SearchUrlTemplate = ({title}: SearchUrlProps) => {

    const setReview = useSetRecoilState(reviewState);
    const setKeyword = useSetRecoilState(keywordState);
    const setProductDate = useSetRecoilState(productDateState);

    const [storageSearchUrl, setStorageSearchUrl] = useRecoilState<string>(searchUrlState);
    const [searchUrl, setSearchUrl] = useState(storageSearchUrl);
    const {isFetching,  refetch} = useSmartStoreQuery({url: searchUrl}, title);

    const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const isUrlValidate = !searchUrl.toLowerCase().includes('smartstore.naver.com') && !searchUrl.toLowerCase().includes('brand.naver.com');
            if (isUrlValidate) throw 'URL 확인 부탁드립니다.';

            const newTitle = title.toLowerCase().replace(/\s/g, '')

            switch (newTitle) {
                case 'keyword' :
                    setKeyword([]);
                    break;
                case 'review' :
                    setReview([]);
                    break;
                case 'productdate' :
                    setProductDate([]);
                    break;
            }

            setStorageSearchUrl(searchUrl);
            refetch().then((response) => {
                if (response.isSuccess) {
                    switch (newTitle) {
                        case 'keyword' :
                            setKeyword(response.data);
                            break;
                        case 'review' :
                            setReview(response.data);
                            break;
                        case 'productdate' :
                            setProductDate(response.data);
                            break;
                        default :
                            alert('없는 타입입니다. 관리자에게 문의해주세요.');
                    }
                }
            });
        } catch (e) {
            alert(e);
        }
    }

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography level={'h1'} variant="plain" color="neutral" sx={{mb: '20px'}}>{title}</Typography>
            <form onSubmit={onSubmitHandler}>
                <Input
                    sx={{'--Input-decoratorChildHeight': '45px', width: '60vw'}}
                    placeholder="네이버 스마트 스토어 URL 입력"
                    required
                    value={searchUrl}
                    onChange={(event) => {
                        setSearchUrl(event.target.value)
                    }}
                    disabled={isFetching}
                    endDecorator={<Button variant="solid" color="primary" type="submit">Submit</Button>}
                />
            </form>
            {isFetching && <LoadingComponent/>}
        </Box>
    );
};

export default SearchUrlTemplate;