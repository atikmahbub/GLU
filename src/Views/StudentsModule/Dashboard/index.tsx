import React, { FC } from 'react';
import DashboardPageContainer from '../../../Containers/Pages/DashboardPageContainer';
import useHomework from '../../../Hooks/students/useHomework';
import usePreviousClasses from '../../../Hooks/students/usePreviousClasses';

const StudentsDashboard: FC = () => {
    const { isPending: homeworkLoading, count: homeworkCount } = useHomework();
    const { isPending: previousClassesLoading, count: previousClassesCount } = usePreviousClasses();
    return (
        <DashboardPageContainer
            userType="students"
            school={{ homework: { isLoading: homeworkLoading, count: homeworkCount } }}
            personal={{ previousClasses: { isLoading: previousClassesLoading, count: previousClassesCount } }}
        />
    );
};

export default StudentsDashboard;
