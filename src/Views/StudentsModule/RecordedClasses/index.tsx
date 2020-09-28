import React, { FC } from 'react';
import RecordedClassesPageContainer from '../../../Containers/Pages/RecordedClassesPageContainer';
import usePreviousClasses from '../../../Hooks/students/usePreviousClasses';

const RecordedClasses: FC = () => {
    const { prevClassImageCards, isPending, count } = usePreviousClasses();
    return (
        <RecordedClassesPageContainer
            userType="students"
            total={count}
            current={count}
            isLoading={isPending}
            data={prevClassImageCards}
        />
    );
};

export default RecordedClasses;
