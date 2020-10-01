import { useCallback, useMemo, useState } from 'react';
import useToggle from './useToggle';
import { API } from '../Utility/API';
import { endponts } from '../Utility/endpoints';
import Axios from 'axios';

export type OnUploadComplete = (fileName: string) => void;

function useFileUpload(onComplete: OnUploadComplete) {
    const [file, setFile] = useState<File | null>(null);
    const [isLoading, toggleLoading] = useToggle(false);

    const clearFile = useCallback(() => {
        setFile(null);
    }, []);

    const handleUploadClick = useCallback(() => {
        if (file) {
            toggleLoading();
            API.get(endponts.fileUpload + file.name).then(({ data: { data, success } }) => {
                if (success) {
                    Axios.put(`https://cors-anywhere.herokuapp.com/${data.url}`, file, {
                        headers: {
                            'x-amz-acl': 'public-read',
                            'Content-Type': 'image/jpeg',
                        },
                    }).then(({ status }) => {
                        if (status === 200) {
                            onComplete(data.fileName);
                            clearFile();
                            toggleLoading();
                        }
                    });
                }
            });
        }
    }, [file, toggleLoading, onComplete]);

    return useMemo(
        () => ({
            file,
            setFile,
            handleUploadClick,
            isLoading,
            clearFile,
        }),
        [file, setFile, handleUploadClick, isLoading, clearFile]
    );
}

export default useFileUpload;
