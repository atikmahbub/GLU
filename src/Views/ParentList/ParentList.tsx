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


interface props {
    parentList: Array<parentListTypes>;
}
const ParentList: React.FunctionComponent<props> = ({ parentList }) => {
    const routes = useHistory();
    const dispatch = useDispatch();
    const handleRoutes = () => {
        routes.push({
            pathname:  routeEndpoints.parent.addNewParent,
            state: {
                breadcrumb: routeEndpoints.parent.addNewParentBread,
            },
        });
    };
    const redirectDetails = (id:number) => {
        routes.push({
            pathname: routeEndpoints.parent.details,
            state: {
                breadcrumb:  routeEndpoints.parent.breadcrumb,
                id: id
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
                <AddButton
                    icon={<AccountCircle className="icon-circle" />}
                    title="Parents"
                    btnIcon={<Add />}
                    btnTitle="Add Parent"
                    trigger={handleRoutes}
                />
            </CardContainer>
            <CardContainer>
                <div className="student-table">
                    <CardTable
                        showToolbar={true}
                        showPagination={true}
                        columns={[
                            {
                                width: '23%',
                                title: 'Profile',
                                field: 'profile',
                                render: (rowData: parentListTypes) => (
                                    <img src={rowData.profile} style={{ width: 35, height: 35, borderRadius: '50%' }} />
                                ),
                            },
                            {
                                width: '23%',
                                title: 'Parent ID',
                                field: 'parentId',
                            },
                            {
                                width: '23%',
                                title: 'Name',
                                field: 'name',
                            },
                            {
                                width: '23%',
                                title: 'Email',
                                field: 'email',
                            },
                            {
                                width: '23%',
                                title: 'Options',
                                field: 'action',
                                render: (rowData: parentListTypes) => (
                                    <ActionToolbar
                                        showDetail={true}
                                        deleteClick={() => handleDelete(rowData.parentId)}
                                        editClick={() => handleEdit(rowData)}
                                        detailClick={()=>redirectDetails(rowData.parentId)}
                                    />
                                ),
                            },
                        ]}
                        rowData={parentList}
                    />
                </div>
            </CardContainer>
        </div>
    );
};

export default ParentList;
