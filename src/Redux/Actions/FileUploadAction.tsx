import Axios from 'axios';
import { Dispatch } from 'react';
import { API } from '../../Utility/API';
import { endponts } from '../../Utility/endpoints';
import { GET_FILE_URL } from '../ActionTypes/FileUploadTypes';

export const getFileUploadAPIcall = (file: string) => {
    return (dispatch: Dispatch<any>) => {
        API.get(`${endponts.fileUpload}${file}`)
            .then((res) => {
                console.log(res);
                dispatch(fileUploadData(res.data.data));
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

export const uploadProfileAmznUrl = (url: string, image: File) => {
    return (dispatch: Dispatch<any>) => {
        let data = new FormData();

        data.append('file', image);
        Axios.put(`https://cors-anywhere.herokuapp.com/${url}`, data, {
            headers: {
                'x-amz-acl': 'public-read',
                'Content-Type': 'multipart/form-data',
            },
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const uploadProfileFileName = (file: string, token: string) => {
    const data = { fileName: file };
    return () => {
        API.put(`${endponts.uploadFileName}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
