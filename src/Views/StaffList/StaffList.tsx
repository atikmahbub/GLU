import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add, AccountCircle } from '@material-ui/icons';
import CardTable from '../../components/Table/CardTable';
import commonImg from '../../Assets/images';
import AddButton from '../../components/Dashobard/AddButton';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import { useHistory } from 'react-router-dom';
import UserTable from '../../components/Dashobard/Table/UserTable';
import { routeEndpoints } from '../../Utility/routeEndpoints';

interface colDataType {
    profile: string;
    name: string;
    department: string;
    designation: string;
    action: string;
}
const StaffList: React.FunctionComponent = () => {
    const routes = useHistory();
    const handleRoutes = () => {
        routes.push({pathname:'/dashboard/staff/add-new-staff', state:{
            breadcrumb: '/dashboard/staff/Add New Staff'
        }})
    }
    const redirectDetails = () => {
        routes.push({
            pathname: routeEndpoints.staff.details,
            
        });
    };
    const handleEdit = (data: colDataType) => {
       
    };
    const handleDelete = (deleteId: number) => {
    
    };
    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton
                    title="Staffs"
                    btnIcon={<Add />}
                    btnTitle="Add New Staff"
                    trigger={handleRoutes}
                />
            </CardContainer>
            <UserTable
                showFilter={true}
                redirectDetails={() => redirectDetails()}
                handleEdit={(value: any) => handleEdit(value)}
                handleDelete={(value: any) => handleDelete(value)}
            />
        </div>
    );
};

export default StaffList;
