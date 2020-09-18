import { useEffect, useMemo, useState } from 'react';
import { API } from '../../Utility/API';
import { studentsEndpoints } from '../../Utility/endpoints';
import { BannerCardElement, ImageCardElement } from '../../components/Cards/types';
import { dataToBannerCards, dataToImageCard } from '../../Helper/students/featureTeachers';

function useFeatureTeachers() {
    const [state, setState] = useState<any>([]);
    const [bannerCards, setBannerCards] = useState<BannerCardElement[]>([]);
    const [imageCards, setImageCards] = useState<ImageCardElement[]>([]);

    useEffect(() => {
        API.get(studentsEndpoints.getFeatureTeacher).then(({ data }) => {
            if (data.success) {
                setState(data.data);
                setBannerCards(dataToBannerCards(data.data));
                setImageCards(dataToImageCard(data.data))
            }
        });
    }, []);

    return useMemo(() => [state, bannerCards, imageCards], [state, bannerCards, imageCards]);
}

export default useFeatureTeachers;
