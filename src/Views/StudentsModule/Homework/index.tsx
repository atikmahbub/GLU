import React, { FC } from 'react';
import HomeworkPageContainer from '../../../Containers/Pages/HomeworkPageContainer';
import useHomework from '../../../Hooks/students/useHomework';

const Homework: FC = () => {
    const { isPending, overdueCount, incompleteCount, count, homeworks, overdueHomeworks } = useHomework();
    return (
        <HomeworkPageContainer
            userType="students"
            isLoading={isPending}
            incompleteCount={incompleteCount}
            overdueCount={overdueCount}
            totalCount={count}
            homeworks={homeworks}
            overdueHomework={overdueHomeworks}
        />
    );
};

export default Homework;
