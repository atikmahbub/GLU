import { useEffect, useMemo, useState } from 'react';
import { API } from '../../Utility/API';
import { studentsEndpoints } from '../../Utility/endpoints';
import { dataToFeaturedCard, dataToNextClassCard } from '../../Helper/students/upcomingClasses';

function useUpcomingClasses() {
    const [state, setState] = useState<any>({
        nextClassCard: null,
        featuredSubjectsCard: null,
        upcomingClassCard: null,
    });

    useEffect(() => {
        API.get(studentsEndpoints.getUpcomingSessions).then(({ data: { data, success } }) => {
            if (success && data.upcomingSessionDetail.length) {
                setState((prevState: any) => ({
                    ...prevState,
                    nextClassCard: dataToNextClassCard(data.upcomingSessionDetail[0]),
                    featuredSubjectsCard: dataToFeaturedCard(data.upcomingSessionDetail),
                    upcomingClassCard: dataToNextClassCard(data.upcomingSessionDetail[0])
                }));
            }
        });
    }, []);

    return useMemo(() => state, [state]);
}

export default useUpcomingClasses;
