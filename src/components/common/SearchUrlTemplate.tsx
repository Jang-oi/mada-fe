import {Box, Button, Input, Typography} from '@mui/joy';
import {searchUrlState} from "../../recoil/searchUrl/atom";
import {useRecoilState} from "recoil";
import {useState} from "react";
import {useKeywordQuery} from "../../hooks/useKeywordQuery";

interface SearchUrlProps {
    title: string,
}

const SearchUrlTemplate = ({title}: SearchUrlProps) => {

    const [storageSearchUrl, setStorageSearchUrl] = useRecoilState<string>(searchUrlState);
    const [searchUrl, setSearchUrl] = useState(storageSearchUrl);

    const query = useKeywordQuery({url: searchUrl});
    const {isInitialLoading, data, isLoading, refetch} = query;

    const onSubmitHandler = (event: any) => {
        event.preventDefault();
        try {
            const isUrlValidate = !searchUrl.toLowerCase().includes('smartstore.naver.com') && !searchUrl.toLowerCase().includes('brand.naver.com');
            if (isUrlValidate) throw 'URL 확인 부탁드립니다.';

            setStorageSearchUrl(searchUrl);
            refetch();
        } catch (e) {
            alert(e);
        }
    }

    console.log(data, isInitialLoading, isLoading);

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
                    endDecorator={<Button variant="solid" color="primary" type="submit">Submit</Button>}
                />
            </form>
        </Box>
    );
};

export default SearchUrlTemplate;