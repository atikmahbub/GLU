import React from 'react';
import { Grid, Typography, makeStyles, Box } from '@material-ui/core';
import { colors } from '../../Styles/colors';
import UploadMaxSize from '../../components/Button/UploadMaxSize';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import SelectWithLabel from '../../components/Inputs/SelectWithLabel';
import OutlineButton from '../../components/Button/OutlineButton';
import SaveController from '../../components/Dashobard/SaveController';
import { useHistory } from 'react-router';

const useStyle = makeStyles({
    title: {
        fontSize: '1.562rem',
        color: colors.black,
    },
    mt: {
        marginTop: '2.156rem',
    },
    helpCon: {
        width: '100%',
        marginTop:'5rem'
    },
});
const ParentForm: React.FC = () => {
    const classes = useStyle();
    const routes = useHistory();
    const handleRoute = () =>{
        routes.push("/dashboard/parent/add-child")
    }
    return (
        <Grid container spacing={0}>
            <Grid item xs={12} md={4}>
                <Typography className={classes.title}>Parent Information</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
                <Typography className={classes.title}>Upload Parent Picture (Optional)</Typography>
                <UploadMaxSize />
                <InputWithLabel fieldName="First Name" />
                <InputWithLabel fieldName="Last Name" />
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <InputWithLabel fieldName="Email" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SelectWithLabel fieldName="Title" />
                    </Grid>
                </Grid>
                <InputWithLabel fieldName="Mobile number" />
                <InputWithLabel fieldName="Childs name" />
                <Grid container alignItems="flex-end" justify="flex-end" className={classes.mt}>
                    <OutlineButton text="Add another child" btnClick={handleRoute} />
                </Grid>
            </Grid>
            <Box component="div" className={classes.helpCon}>
                <SaveController handleNext={() => {}} activeCom={1} />
            </Box>
        </Grid>
    );
};

export default ParentForm;
