import { useEffect, useMemo, useState } from 'react';
import { API } from '../../Utility/API';
import { studentsEndpoints } from '../../Utility/endpoints';
import { dataToNextClassCard } from '../../Helper/students/upcomingClasses';

function useUpcomingClasses() {
    const [state, setState] = useState<any>({
        nextClassCard: null,
        upcomingClassCard: null,
    });

    useEffect(() => {
        API.get(studentsEndpoints.getUpcomingSessions).then(({ data: { data, success } }) => {
            if (success && data.upcomingSessions.length) {
                setState((prevState: any) => ({
                    ...prevState,
                    nextClassCard: dataToNextClassCard(data.upcomingSessions[0]),
                    upcomingClassCard: dataToNextClassCard(data.upcomingSessions[0])
                }));
            }
        });
    }, []);

    return useMemo(() => state, [state]);
}

export default useUpcomingClasses;
