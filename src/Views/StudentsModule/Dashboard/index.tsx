import React, { FC } from 'react';
import DashboardPageContainer from '../../../Containers/Pages/DashboardPageContainer';
import useHomework from '../../../Hooks/students/useHomework';

const StudentsDashboard: FC = () => {
    const { isPending: homeworkLoading, count: homeworkCount } = useHomework();
    return (
        <DashboardPageContainer
            userType="students"
            school={{ homework: { isLoading: homeworkLoading, count: homeworkCount } }}
        />
    );
};

export default StudentsDashboard;
