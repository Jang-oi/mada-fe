import {Box, Button, Input, Typography} from '@mui/joy';
import {searchUrlState} from "../../recoil/searchUrl/atom";
import {useRecoilState} from "recoil";
import {useState} from "react";

interface SearchUrlProps {
    title: string,
}

const SearchUrlTemplate = ({title}: SearchUrlProps) => {

    const [storageSearchUrl, setStorageSearchUrl] = useRecoilState<string>(searchUrlState);
    const [searchUrl, setSearchUrl] = useState(storageSearchUrl);

    const onSubmitHandler = () => {
        try {
            const urlValidateMessage = 'URL 확인 부탁드립니다.';
            if (!searchUrl.toLowerCase().includes('smartstore.naver.com')) throw urlValidateMessage;
            if (!searchUrl.toLowerCase().includes('brand.naver.com')) throw urlValidateMessage;

            setStorageSearchUrl(searchUrl);
        } catch (e) {
            alert(e);
        }

    }

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography level={'h1'} variant="plain" color="neutral" sx={{mb: '20px'}}>{title}</Typography>
            <Input
                sx={{'--Input-decoratorChildHeight': '45px', width: '60vw'}}
                placeholder="네이버 스마트 스토어 URL 입력"
                required
                value={searchUrl}
                onChange={(event) => {
                    setSearchUrl(event.target.value)
                }}
                endDecorator={<Button variant="solid" color="primary" onClick={onSubmitHandler}>Submit</Button>}
            />
        </Box>
    );
};

export default SearchUrlTemplate;