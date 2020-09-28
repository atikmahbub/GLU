import { useEffect, useMemo } from 'react';
import { dataToImageCard } from '../../Helper/students/previousClasses';
import { useDispatch, useSelector } from 'react-redux';
import { previousClassesSelector } from '../../Redux/Selectors/studentModule';
import { fetchPreviousClasses } from '../../Redux/Actions/studentModuleActions';

function usePreviousClasses() {
    const dispatch = useDispatch()
    const { isSuccess, isPending, data } = useSelector(previousClassesSelector)

    useEffect(() => {
        if (!isSuccess) {
            dispatch(fetchPreviousClasses())
        }
    }, [isSuccess])

    return useMemo(() => ({
        isPending,
        prevClassImageCards: dataToImageCard(data)
    }), [isPending]);
}

export default usePreviousClasses;
