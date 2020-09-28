import React, { FC } from 'react';
import DashboardPageContainer from '../../../Containers/Pages/DashboardPageContainer';
import useHomework from '../../../Hooks/students/useHomework';
import usePreviousClasses from '../../../Hooks/students/usePreviousClasses';
import useUpcomingClasses from '../../../Hooks/students/useUpcomingClasses';

const StudentsDashboard: FC = () => {
    const { isPending: homeworkLoading, count: homeworkCount } = useHomework();
    const { isPending: previousClassesLoading, count: previousClassesCount } = usePreviousClasses();
    const { isPending: upcomingClassesLoading, count: upcomingClassesCount } = useUpcomingClasses();
    return (
        <DashboardPageContainer
            userType="students"
            school={{
                homework: { isLoading: homeworkLoading, count: homeworkCount },
                upcomingClasses: { isLoading: upcomingClassesLoading, count: upcomingClassesCount },
            }}
            personal={{
                previousClasses: { isLoading: previousClassesLoading, count: previousClassesCount },
                upcomingClasses: { isLoading: upcomingClassesLoading, count: upcomingClassesCount },
            }}
        />
    );
};

export default StudentsDashboard;
