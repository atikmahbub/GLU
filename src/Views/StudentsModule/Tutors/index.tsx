import React, { FC } from 'react';
import TutorsPageContainer from '../../../Containers/Pages/TutorsPageContainer';
import useFeatureTeachers from '../../../Hooks/students/useFeatureTeachers';

const Tutors: FC = () => {
    const { teachersImageCards, isPending, count } = useFeatureTeachers();
    return (
        <TutorsPageContainer
            userType="students"
            total={count}
            current={count}
            isLoading={isPending}
            data={teachersImageCards}
        />
    );
};

export default Tutors;
