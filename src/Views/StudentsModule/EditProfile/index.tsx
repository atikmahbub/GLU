import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditProfilePageContainer from '../../../Containers/Pages/EditProfilePageContainer';
import useProfileInfo from '../../../Hooks/students/useProfileInfo';
import { UpdateProfileForm } from '../../../Interfaces/students/forms';
import { fetchInfo, fetchUpdateInfo } from '../../../Redux/Actions/studentModuleActions';
import { OnUploadComplete } from '../../../Hooks/useFileUpload';
import { fetchUploadFile } from '../../../Redux/Actions/FileUploadAction';
import { uploadFileSelector } from '../../../Redux/Selectors/fileUpload';

const EditProfile: FC = () => {
    const dispatch = useDispatch();
    const { isPending: isUploadFilePending } = useSelector(uploadFileSelector);
    const { isPending, editProfileForm, isUpdatePending } = useProfileInfo();

    const handleSubmit = useCallback(
        (data: UpdateProfileForm) => {
            dispatch(fetchUpdateInfo(data));
        },
        [dispatch]
    );

    const handleUploadComplete: OnUploadComplete = useCallback(
        (fileName) => {
            dispatch(
                fetchUploadFile(fileName, () => {
                    dispatch(fetchInfo());
                })
            );
        },
        [dispatch]
    );

    return (
        <EditProfilePageContainer
            userType="students"
            isLoading={isPending || isUpdatePending || isUploadFilePending}
            profile={editProfileForm}
            onSubmit={handleSubmit}
            onUploadComplete={handleUploadComplete}
        />
    );
};

export default EditProfile;
