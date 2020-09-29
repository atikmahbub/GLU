import React, { FC } from 'react';
import EditProfilePageContainer from '../../../Containers/Pages/EditProfilePageContainer';
import useProfileInfo from '../../../Hooks/students/useProfileInfo';

const EditProfile: FC = () => {
    const { isPending, editProfileForm } = useProfileInfo();
    return <EditProfilePageContainer userType="students" isLoading={isPending} profile={editProfileForm} />;
};

export default EditProfile;
