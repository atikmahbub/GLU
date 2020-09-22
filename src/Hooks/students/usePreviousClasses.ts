import { useEffect, useMemo, useState } from 'react';
import { API } from '../../Utility/API';
import { studentsEndpoints } from '../../Utility/endpoints';
import { dataToImageCard } from '../../Helper/students/previousClasses';

function usePreviousClasses() {
    const [state, setState] = useState<any>({
        prevClassImageCards: []
    });

    useEffect(() => {
        API.get(studentsEndpoints.getPreviousSessions).then(({ data: { success, data } }) => {
            if (success && data.previousSessionDetail.length) {
                setState((prevState: any) => ({
                    ...prevState,
                    prevClassImageCards: dataToImageCard(data.previousSessionDetail)
                }))
            }
        });
    }, []);

    return useMemo(() => state, [state]);
}

export default usePreviousClasses;
