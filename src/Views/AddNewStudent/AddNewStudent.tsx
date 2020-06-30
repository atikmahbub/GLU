import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import AddButton from '../../components/Dashobard/AddButton';
import { AccountCircle } from '@material-ui/icons';
import { colors } from '../../Styles/colors';
import { useHistory } from 'react-router-dom';
import FormContainer from './FormContainer';

const AddNewStudent: React.FunctionComponent = () => {
    const routes = useHistory();
    const handleRoutes = () => {
        routes.push({
            pathname: '/dashboard/student/bulk-upload',
            state: {
                breadcrumb: '/dashboard/student/student admission',
            },
        });
    };

    return (
        <div className="content-wrapper-student">
            <CardContainer>
                <AddButton
                    style={{ backgroundColor: colors.primary }}
                    icon={<AccountCircle className="icon-circle" />}
                    title="Student Admission"
                    btnTitle="Bulk Upload"
                    trigger={handleRoutes}
                />
            </CardContainer>
            <CardContainer>
                <FormContainer />
            </CardContainer>
        </div>
    );
};

export default AddNewStudent;
