import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import { colors } from '../../Styles/colors';
import PdBox from '../../Containers/Cards/PdBox';
import UploadMaxSize from '../../components/Button/UploadMaxSize';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import SelectWithLabel from '../../components/Inputs/SelectWithLabel';
import ChipAdder from '../../components/Cards/ChipAdder';
import SaveController from '../../components/Dashobard/SaveController';

const useStyle = makeStyles({
    root: {
        marginBottom: '5rem',
    },
    heading: {
        fontSize: '1.562rem',
        lineHeight: '1.562rem',
        color: colors.black,
        fontWeight: 500,
    },
});

const Index = () => {
    const classes = useStyle();
    return (
        <CardContainer>
            <PdBox>
                <Grid container className={classes.root}>
                    <Grid item xs={12} md={4}>
                        <Typography className={classes.heading}>Teachers Information</Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography className={classes.heading}>Teachers Information</Typography>
                        <UploadMaxSize />
                        <InputWithLabel fieldName="First Name" />
                        <InputWithLabel fieldName="Last Name" />
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={8}>
                                <InputWithLabel fieldName="Email" placeholder="sample@gmail.com" />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <SelectWithLabel fieldName="Mobile number" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={8}>
                                <SelectWithLabel fieldName="Form Group" />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <SelectWithLabel fieldName="Designation" />
                            </Grid>
                        </Grid>
                        <ChipAdder fieldName="Departments" />
                        <ChipAdder fieldName="Subjects" />
                        <ChipAdder fieldName="Extra Curricular" />
                        <ChipAdder fieldName="Additional field 1" />
                    </Grid>
                </Grid>
                <SaveController activeCom={1} handleNext={() => {}} />
            </PdBox>
        </CardContainer>
    );
};

export default Index;
