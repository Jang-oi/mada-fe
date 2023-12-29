import {MenuTypes} from "../types/menuTypes";

export function openNewTab(url: string) {
    const newTab = window.open(url, '_blank');
    if (newTab) {
        newTab.focus();
    } else {
        console.error('팝업이 차단되었거나 새 탭을 열 수 없습니다.');
    }
}

export function formatDate(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

/**
 * 숫자 세자리 컴마와 소수점 두자리 반올림
 * @param setNumber
 */
export const setLocaleString = (setNumber : number) => {
    const option = {
        maximumFractionDigits: 2,
    };
    return (setNumber).toLocaleString('ko-KR', option);
};

export const menuData: MenuTypes[] = [
    {menu: 'HOME', url: '/'},
    {menu: 'KEYWORD', url: '/keyword'},
    {menu: 'DATE', url: '/date'},
    {menu: 'REVIEW', url: '/review'},
];