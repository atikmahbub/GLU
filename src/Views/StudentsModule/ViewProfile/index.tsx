import React, { FC } from 'react';
import ViewProfilePageContainer from '../../../Containers/Pages/ViewProfilePageContainer';
import useProfileInfo from '../../../Hooks/students/useProfileInfo';

const ViewProfile: FC = () => {
    const { profileCard, isPending, about } = useProfileInfo();
    return (
        <ViewProfilePageContainer userType="students" isLoading={isPending} profileCard={profileCard} about={about} />
    );
};

export default ViewProfile;
