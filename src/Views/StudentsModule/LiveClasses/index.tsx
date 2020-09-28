import React, { FC } from 'react';
import LiveClassesPageContainer from '../../../Containers/Pages/LiveClassesPageContainer';
import useUpcomingClasses from '../../../Hooks/students/useUpcomingClasses';

const LiveClasses: FC = () => {
    const { isPending, upcomingClassImageCards } = useUpcomingClasses();
    return (
        <LiveClassesPageContainer isLoading={isPending} userType="students" data={upcomingClassImageCards} />
    )
}

export default LiveClasses
