import { useEffect, useMemo, useState } from 'react';
import { API } from '../../Utility/API';
import { studentsEndpoints } from '../../Utility/endpoints';
import { dataToFeaturedCard } from '../../Helper/students/upcomingClasses';

function useFeatureSubjects() {
    const [state, setState] = useState<any>({
        featuredSubjectsCard: null,
    });

    useEffect(() => {
        API.get(studentsEndpoints.getFeatureSubject).then(({ data: { success, data } }) => {
            if (success) {
                setState((prevState: any) => ({
                    ...prevState,
                    featuredSubjectsCard: dataToFeaturedCard(data)
                }))
            }
        });
    }, []);

    return useMemo(() => state, [state]);
}

export default useFeatureSubjects;
