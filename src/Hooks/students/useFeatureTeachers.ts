import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataToBannerCards, dataToFeaturedCard, dataToImageCard } from '../../Helper/students/featureTeachers';
import { teachersSelector } from '../../Redux/Selectors/studentModule';
import { fetchTeachers } from '../../Redux/Actions/studentModuleActions';

function useFeatureTeachers() {
    const dispatch = useDispatch();
    const { isSuccess, isPending, data } = useSelector(teachersSelector);

    useEffect(() => {
        if (!isSuccess) {
            dispatch(fetchTeachers())
        }
    }, [isSuccess])

    return useMemo(() => ({
        isPending,
        teachersBannerCards: dataToBannerCards(data),
        teachersImageCards: dataToImageCard(data.slice(0, 4)),
        featuredTeachersCard: dataToFeaturedCard(data),
    }), [isPending, data]);
}

export default useFeatureTeachers;
