import { API } from '../../Utility/API';
import { endponts } from '../../Utility/endpoints';

export const getallStudentAPIcall = () => {
    return (dispatch: any) => {
        API.get(endponts.student)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
