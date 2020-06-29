import { API } from '../../Utility/API';
import { endponts } from '../../Utility/endpoints';
import { handleError } from './errorHandler';
import { TEACHER_INFO } from '../ActionTypes/teacherTypes';

export const getallparentAPIcall = () => {
    return (dispatch: any) => {
        API.get(endponts.parent)
            .then((res) => {
                console.log(res);
                dispatch(parentList(res.data.data))
            })
            .catch((err) => {
                handleError(dispatch,err);
            });
    };
};


export const parentList = (data:any) => {
    return {
        type: TEACHER_INFO,
        payload: data
    }
}