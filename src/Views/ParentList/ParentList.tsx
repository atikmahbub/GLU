import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add, AccountCircle } from '@material-ui/icons';
import CardTable from '../../components/Table/CardTable';
import AddButton from '../../components/Dashobard/AddButton';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import { useHistory } from 'react-router-dom';
import { parentListTypes } from '../../Interfaces/parentModule';
import { routeEndpoints } from '../../Utility/routeEndpoints';
import { useDispatch } from 'react-redux';
import { deleteParentAPIcall } from '../../Redux/Actions/parentAction';
import UserTable from '../../components/Dashobard/Table/UserTable';

interface props {
    parentList: Array<parentListTypes>;
}
const ParentList: React.FunctionComponent<props> = ({ parentList }) => {
    const routes = useHistory();
    const dispatch = useDispatch();
    const handleRoutes = () => {
        routes.push({
            pathname: routeEndpoints.parent.addNewParent,
            state: {
                breadcrumb: routeEndpoints.parent.addNewParentBread,
            },
        });
    };
    const redirectDetails = (id: number) => {
        routes.push({
            pathname: routeEndpoints.parent.details,
            state: {
                breadcrumb: routeEndpoints.parent.breadcrumb,
                id: id,
            },
        });
    };
    const handleEdit = (data: parentListTypes) => {
        routes.push({
            pathname: routeEndpoints.parent.addNewParent,
            state: {
                breadcrumb: routeEndpoints.parent.editParent,
                parentInfo: data,
            },
        });
    };
    const handleDelete = (deleteId: number) => {
        dispatch(deleteParentAPIcall(deleteId));
    };
    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton title="Parents" btnIcon={<Add />} btnTitle="Add New Parent" trigger={handleRoutes} />
            </CardContainer>
            <UserTable
                showFilter={true}
                redirectDetails={(value: any) => redirectDetails(value)}
                handleEdit={(value: any) => handleEdit(value)}
                handleDelete={(value: any) => handleDelete(value)}
            />
        </div>
    );
};

export default ParentList;
