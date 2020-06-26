import { API } from '../../Utility/API';
import { endponts } from '../../Utility/endpoints';

export const getSchoolAPIcall = () => {
    return (dispatch: any) => {
        API.get(endponts.school)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
