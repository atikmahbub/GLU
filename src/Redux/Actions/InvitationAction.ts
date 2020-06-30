import { API } from '../../Utility/API';
import { endponts } from '../../Utility/endpoints';
import { handleError } from './errorHandler';
import { toast } from 'react-toastify';

export const invitationAPIcall = (data: { invitee_id: number; for_role: string }) => {
    return (dispatch: any) => {
        API.post(endponts.invitation, data)
            .then((res) => {
                toast.success('Invitation link sent.');
                console.log(res)
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};
