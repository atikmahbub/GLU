import React, { FC } from 'react';
import LiveClassesPageContainer from '../../../Containers/Pages/LiveClassesPageContainer';
import useUpcomingClasses from '../../../Hooks/students/useUpcomingClasses';

const LiveClasses: FC = () => {
    const { isPending, upcomingClassImageCards, count } = useUpcomingClasses();
    return (
        <LiveClassesPageContainer
            userType="students"
            current={count}
            total={count}
            isLoading={isPending}
            data={upcomingClassImageCards}
        />
    );
};

export default LiveClasses;
