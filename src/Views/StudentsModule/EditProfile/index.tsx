import React, { FC } from 'react';
import EditProfilePageContainer from '../../../Containers/Pages/EditProfilePageContainer';
import useProfileInfo from '../../../Hooks/students/useProfileInfo';

const EditProfile: FC = () => {
    const { isPending, editProfileForm, isUpdatePending } = useProfileInfo();
    return (
        <EditProfilePageContainer
            userType="students"
            isLoading={isPending || isUpdatePending}
            profile={editProfileForm}
        />
    );
};

export default EditProfile;
