import React, { FC, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Tabs from './Tabs';
import School from './School';
import Personal from './Personal';
import StudentsPageContainer from '../StudentsPageContainer';
// import DashboardPageContainer from '../../../Containers/Pages/DashboardPageContainer';

const StudentsDashboard: FC = () => {
    const [activeTab, setActiveTab] = useState('personal');
    return (
        <StudentsPageContainer>
            <Grid container direction="column">
                <Tabs value={activeTab} onChange={setActiveTab} />
                {activeTab === 'school' && <School />}
                {activeTab === 'personal' && <Personal />}
            </Grid>
        </StudentsPageContainer>
    );
};
//
// const StudentsDashboard: FC = () => {
//     return (
//         <DashboardPageContainer userType="parent" />
//     )
// }

export default StudentsDashboard;
