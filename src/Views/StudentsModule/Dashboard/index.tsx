import React, { FC } from 'react';
import DashboardPageContainer from '../../../Containers/Pages/DashboardPageContainer';
import useHomework from '../../../Hooks/students/useHomework';
import usePreviousClasses from '../../../Hooks/students/usePreviousClasses';
import useUpcomingClasses from '../../../Hooks/students/useUpcomingClasses';
import useProfileInfo from '../../../Hooks/students/useProfileInfo';

const StudentsDashboard: FC = () => {
    const { isPending: homeworkLoading, count: homeworkCount } = useHomework();
    const { isPending: previousClassesLoading, count: previousClassesCount } = usePreviousClasses();
    const {
        isPending: upcomingClassesLoading,
        count: upcomingClassesCount,
        dateSubjectCards,
        carouselClassCards,
    } = useUpcomingClasses();
    const { profileCard, isPending: isProfilePending } = useProfileInfo();

    return (
        <DashboardPageContainer
            userType="students"
            isLoading={isProfilePending || upcomingClassesLoading}
            school={{
                homework: { isLoading: homeworkLoading, count: homeworkCount },
                upcomingClasses: { isLoading: upcomingClassesLoading, count: upcomingClassesCount },
                profile: profileCard,
                dateSubjectCards,
            }}
            personal={{
                previousClasses: { isLoading: previousClassesLoading, count: previousClassesCount },
                upcomingClasses: { isLoading: upcomingClassesLoading, count: upcomingClassesCount },
                profile: profileCard,
                dateSubjectCards,
                carouselCards: carouselClassCards
            }}
        />
    );
};

export default StudentsDashboard;
