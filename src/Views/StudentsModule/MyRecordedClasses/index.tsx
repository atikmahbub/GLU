import React, { FC } from 'react';
import RecordedClassesPageContainer from '../../../Containers/Pages/RecordedClassesPageContainer';
import { liveClasses } from '../../../data/tutorProfile';

const MyRecordedClasses: FC = () => {
    return (
        <RecordedClassesPageContainer
            userType="students"
            isLoading={false}
            total={4}
            current={4}
            data={liveClasses}
            purchased
        />
    );
};

export default MyRecordedClasses;
