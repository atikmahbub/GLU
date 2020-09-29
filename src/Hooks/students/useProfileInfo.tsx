import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { infoSelector } from '../../Redux/Selectors/studentModule';
import { fetchInfo } from '../../Redux/Actions/studentModuleActions';

function useProfileInfo() {
    const dispatch = useDispatch();
    const { isSuccess, isPending, img, phone, email, name, address } = useSelector(infoSelector);

    useEffect(() => {
        if (!isSuccess) {
            dispatch(fetchInfo());
        }
    }, [isSuccess]);

    return useMemo(
        () => ({
            isPending,
            img,
            phone,
            email,
            name,
            address,
            profileCard: {
                img,
                phone,
                email,
                name,
                address,
            },
        }),
        [isPending, img, phone, email, name, address]
    );
}

export default useProfileInfo;
