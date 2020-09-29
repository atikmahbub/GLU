import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { infoSelector } from '../../Redux/Selectors/studentModule';
import { fetchInfo } from '../../Redux/Actions/studentModuleActions';

function useProfileInfo() {
    const dispatch = useDispatch();
    const { isSuccess, isPending, data, profileCard, editProfileForm } = useSelector(infoSelector);

    useEffect(() => {
        if (!isSuccess) {
            dispatch(fetchInfo());
        }
    }, [isSuccess]);

    return useMemo(
        () => ({
            isPending,
            data,
            profileCard,
            editProfileForm,
            about: data.about
        }),
        [isPending, data, profileCard, editProfileForm]
    );
}

export default useProfileInfo;
