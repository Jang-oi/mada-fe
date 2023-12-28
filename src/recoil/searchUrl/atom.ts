import {atom} from "recoil";
import {recoilPersist} from 'recoil-persist';

const {persistAtom} = recoilPersist();

export const searchUrlState = atom({
    key: "searchUrlState",
    default: '',
    effects_UNSTABLE: [persistAtom]
});