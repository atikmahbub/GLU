import { useDispatch, useSelector } from 'react-redux';
import { subjectsSelector } from '../../Redux/Selectors/studentModule';
import { useEffect, useMemo } from 'react';
import { fetchSubjects } from '../../Redux/Actions/studentModuleActions';

function useSubjects() {
    const dispatch = useDispatch();
    const { isSuccess, isPending, data, count } = useSelector(subjectsSelector);

    useEffect(() => {
        if (!isSuccess) {
            dispatch(fetchSubjects());
        }
    }, [isSuccess]);

    return useMemo(
        () => ({
            count,
            data,
            isPending,
        }),
        [count, data, isPending]
    );
}

export default useSubjects;
