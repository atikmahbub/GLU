import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { upcomingClassesSelector } from '../../Redux/Selectors/studentModule';
import { fetchUpcomingClasses } from '../../Redux/Actions/studentModuleActions';
import { dataToDateSubjectCards, dataToImageCards } from '../../Helper/students/upcomingClasses';

function useUpcomingClasses() {
    const dispatch = useDispatch();
    const { isSuccess, isPending, count, nextClassCard, data } = useSelector(upcomingClassesSelector);

    useEffect(() => {
        if (!isSuccess) {
            dispatch(fetchUpcomingClasses());
        }
    }, [isSuccess]);

    return useMemo(
        () => ({
            isPending,
            count,
            nextClassCard,
            upcomingClassCard: nextClassCard,
            upcomingClassImageCards: dataToImageCards(data),
            dateSubjectCards: dataToDateSubjectCards(data)
        }),
        [count, isPending, nextClassCard, count, nextClassCard]
    );
}

export default useUpcomingClasses;
