import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { useHistory } from 'react-router-dom';
import { routeEndpoints } from '../../Utility/routeEndpoints';
import ParentForm from './ParentForm';
import { makeStyles, Box } from '@material-ui/core';
import { classes } from '../../Helper/classArray';
import PdBox from '../../Containers/Cards/PdBox';

const useStyles = makeStyles({
    pdBox: {
        padding: '3.437rem',
    },
});
const AddNewParent: React.FunctionComponent = () => {
    const routes = useHistory();
    // const handleRoutes = () => {
    //     routes.push({pathname:routeEndpoints.parent.bulkUpload, state:{
    //         breadcrumb: routeEndpoints.parent.bulkBread
    //     }})
    // }
    return (
        <div className="content-wrapper-student">
            <CardContainer>
                <PdBox>
                    <ParentForm />
                </PdBox>
            </CardContainer>
        </div>
    );
};

export default AddNewParent;
