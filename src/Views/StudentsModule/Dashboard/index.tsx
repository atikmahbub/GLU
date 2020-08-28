import React, { FC, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Tabs from './Tabs';
import School from './School';

const StudentsDashboard: FC = () => {
    const [activeTab, setActiveTab] = useState('school');
    return (
        <Grid container direction="column">
            <Tabs value={activeTab} onChange={setActiveTab} />
            {activeTab === 'school' && <School />}
        </Grid>
    );
};

export default StudentsDashboard;
