import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import EditProfilePageContainer from '../../../Containers/Pages/EditProfilePageContainer';
import useProfileInfo from '../../../Hooks/students/useProfileInfo';
import { UpdateProfileForm } from '../../../Interfaces/students/forms';
import { fetchUpdateInfo } from '../../../Redux/Actions/studentModuleActions';

const EditProfile: FC = () => {
    const dispatch = useDispatch()
    const { isPending, editProfileForm, isUpdatePending } = useProfileInfo();

    const handleSubmit = useCallback((data: UpdateProfileForm) => {
        dispatch(fetchUpdateInfo(data))
    }, [dispatch])

    return (
        <EditProfilePageContainer
            userType="students"
            isLoading={isPending || isUpdatePending}
            profile={editProfileForm}
            onSubmit={handleSubmit}
        />
    );
};

export default EditProfile;
