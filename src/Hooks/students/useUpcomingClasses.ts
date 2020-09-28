import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { upcomingClassesSelector } from '../../Redux/Selectors/studentModule';
import { fetchUpcomingClasses } from '../../Redux/Actions/studentModuleActions';

function useUpcomingClasses() {
    const dispatch = useDispatch();
    const { isSuccess, isPending, count, nextClassCard } = useSelector(upcomingClassesSelector);

    useEffect(() => {
        if (!isSuccess) {
            dispatch(fetchUpcomingClasses());
        }
    }, [isSuccess]);

    return useMemo(
        () => ({
            isPending,
            nextClassCard,
            upcomingClassCard: nextClassCard,
        }),
        [count, isPending, nextClassCard]
    );
}

export default useUpcomingClasses;
