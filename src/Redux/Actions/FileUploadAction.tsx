import Axios from 'axios';
import { Dispatch } from 'react';
import { API } from '../../Utility/API';
import { endponts } from '../../Utility/endpoints';
import { GET_FILE_URL } from '../ActionTypes/FileUploadTypes';
import { spinner } from './uiAction';

export const getFileUploadAPIcall = (file: string, token?: string) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        const data: any = {};
        if (token !== '' && token !== null && token !== undefined) {
            data.Authorization = `Bearer ${token}`;
        }
        API.get(`${endponts.fileUpload}${file}`, {
            headers: {
                ...data,
            },
        })
            .then((res) => {
                console.log(res);
                dispatch(fileUploadData(res.data.data));
                dispatch(spinner(false));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const fileUploadData = (data: any) => {
    return {
        type: GET_FILE_URL,
        payload: data,
    };
};

export const uploadProfileAmznUrl = (url: string, image: File, callBack?: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        const data = image;
        console.log('my image', image);
        Axios.put(`https://cors-anywhere.herokuapp.com/${url}`, data, {
            headers: {
                'x-amz-acl': 'public-read',
                'Content-Type': 'image/jpeg',
            },
        })
            .then((res) => {
                console.log(res);
                dispatch(spinner(false));
                if (callBack) {
                    callBack();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const uploadProfileFileName = (file: string, token: string) => {
    const data = { fileName: file };
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.put(`${endponts.uploadFileName}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                dispatch(spinner(false));
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
