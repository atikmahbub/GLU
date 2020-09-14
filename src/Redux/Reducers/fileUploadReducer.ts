import { GET_FILE_URL } from '../ActionTypes/FileUploadTypes';

const initialState = {
    fileData: null,
};
export const fileUploadReducer = (state = initialState, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case GET_FILE_URL: {
            return { ...newState, fileData: action.payload };
        }
        default: {
            return { ...newState };
        }
    }
};
