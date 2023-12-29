import SearchUrlTemplate from "../components/common/SearchUrlTemplate";
import {useRecoilValue} from "recoil";
import {reviewState} from "../recoil/smartStore/atom";
import {Table} from "@mui/joy";
import {setLocaleString} from "../utils/commonUits";

interface ReviewItem {
    productOptionContent: string;
    cnt: number;
    reviewScore: number;
}

const Review = () => {

    const reviewData = useRecoilValue(reviewState);
    return (
        <>
            <SearchUrlTemplate title={'REVIEW'}/>
            <Table stripe={'even'}
                   sx={{width: '80vw', mr: 'auto', ml: 'auto', mt: '60px'}}>
                <thead>
                <tr>
                    <th style={{width: '10%', textAlign: 'center'}}>순위</th>
                    <th style={{width: '70%', textAlign: 'center'}}>옵션명</th>
                    <th style={{width: '10%', textAlign: 'center'}}>리뷰 개수</th>
                    <th style={{width: '10%', textAlign: 'center'}}>리뷰 점수</th>
                </tr>
                </thead>
                <tbody>
                {reviewData && reviewData.map((reviewItem: ReviewItem, reviewIndex) => {
                    return (
                        <tr key={reviewIndex} style={{textAlign: 'center', fontSize: '18px'}}>
                            <td>{reviewIndex + 1}</td>
                            <td>{reviewItem.productOptionContent}</td>
                            <td>{setLocaleString(reviewItem.cnt)}</td>
                            <td>{setLocaleString(reviewItem.reviewScore / reviewItem.cnt)}</td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
        </>
    );
};

export default Review;