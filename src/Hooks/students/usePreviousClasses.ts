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
            if (success && data.prerecordedSessions.length) {
                setState((prevState: any) => ({
                    ...prevState,
                    prevClassImageCards: dataToImageCard(data.prerecordedSessions.slice(0, 4))
                }))
            }
        });
    }, []);

    return useMemo(() => state, [state]);
}

export default usePreviousClasses;
