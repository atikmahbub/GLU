import React, { useEffect, useState } from 'react';
import CardContainer from '../../../Containers/Cards/CardContainer';
import { Add } from '@material-ui/icons';
import AddButton from '../../../components/Dashobard/AddButton';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { routeEndpoints } from '../../../Utility/routeEndpoints';
import ActionToolbar from '../../../components/Dashobard/ActionToolbar';
import CardTable from '../../../components/Table/CardTable';
import TableUserProfile from '../../../components/Dashobard/TableUserProfile';
import Switch from '@material-ui/core/Switch';
import { activateDeactivateUser, getallParentsAPIcall } from '../../../Redux/Actions/superAdminActions';
interface props {
    parentsList: Array<string | number>;
}
const ParentsList: React.FunctionComponent<props> = ({ parentsList }) => {
    const [parent, setParent] = useState<any>([]);
    useEffect(() => {
        if (parentsList) {
            setParent(parentsList);
        }
    }, [parentsList]);
    const routes = useHistory();
    const dispatch = useDispatch();
    const handleRoutes = () => {
        routes.push({
            pathname: routeEndpoints.school.addNewSchool,
            state: {
                breadcrumb: routeEndpoints.teacher.addNewTeacherBread,
            },
        });
    };
    const handleActiveInactive = (id: number, i: number) => {
        const data = [...parent];
        data[i].isActive = !data[i].isActive;
        setParent(data);
        dispatch(activateDeactivateUser(id, callGetParents));
    };
    const callGetParents = () => {
        dispatch(getallParentsAPIcall());
    };
    return (
        <div className="student-wrapper">
            <CardContainer>
                {/* <AddButton title="Parents" btnIcon={<Add />} btnTitle="Add New Parent" trigger={handleRoutes} /> */}
                <AddButton title="Parents" />
            </CardContainer>
            <CardContainer>
                <div className="student-table">
                    <div className="table__container">
                        <CardTable
                            showToolbar={false}
                            showPagination={true}
                            selectable={true}
                            tableHeight="100vh"
                            columns={[
                                {
                                    width: '23%',
                                    title: 'First Name',
                                    field: 'firstName',
                                    // render: (rowData: any) => (
                                    //     <TableUserProfile name={rowData.schoolName}/>
                                    // ),
                                },
                                {
                                    width: '23%',
                                    title: 'Last Name',
                                    field: 'lastName',
                                    // render: (rowData: any) => (
                                    //     <TableUserProfile name={rowData.schoolName}/>
                                    // ),
                                },
                                {
                                    width: '23%',
                                    title: 'Gender',
                                    field: 'gender',
                                },
                                {
                                    width: '23%',
                                    title: 'Phone Number',
                                    field: 'phoneNumber',
                                },
                                {
                                    width: '23%',
                                    title: 'Location',
                                    field: 'location',
                                },

                                {
                                    width: '23%',
                                    title: 'Approve/Reject',
                                    render: (rowData: any) => (
                                        <Switch
                                            checked={rowData.isActive}
                                            onChange={() => handleActiveInactive(rowData.userId, rowData.index)}
                                            color="primary"
                                            name="checkedB"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    ),
                                },
                            ]}
                            rowData={parent}
                        />
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default ParentsList;
