import { useEffect, useMemo, useState } from 'react';
import { API } from '../../Utility/API';
import { studentsEndpoints } from '../../Utility/endpoints';
import { dataToBannerCards, dataToFeaturedCard, dataToImageCard } from '../../Helper/students/featureTeachers';

function useFeatureTeachers() {
    const [state, setState] = useState<any>({
        teachersBannerCards: [],
        teachersImageCards: [],
        featuredTeachersCard: null,
    });

    useEffect(() => {
        API.get(studentsEndpoints.getFeatureTeacher).then(({ data }) => {
            if (data.success) {
                setState((prevState: any) => ({
                    ...prevState,
                    teachersBannerCards: dataToBannerCards(data.data),
                    teachersImageCards: dataToImageCard(data.data),
                    featuredTeachersCard: dataToFeaturedCard(data.data),
                }));
            }
        });
    }, []);

    return useMemo(() => state, [state]);
}

export default useFeatureTeachers;
