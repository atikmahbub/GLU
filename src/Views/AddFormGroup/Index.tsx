import React from 'react';
import { Grid, Typography, makeStyles, Box } from '@material-ui/core';
import { colors } from '../../Styles/colors';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import ThreeText from '../../components/Dashobard/FormGroup/ThreeText';
import commonImg from '../../Assets/images';
import ProfileTileContainer from '../../components/Dashobard/FormGroup/ProfileTileContainer';

const useStyles = makeStyles({
    parent: {
        padding: '4.062rem 3.437rem',
        backgroundColor: colors.white,
        height: '90vh',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    title: {
        fontSize: '1.562rem',
        lineHeight: '1.875rem',
        fontWeight: 500,
        color: colors.black,
    },
    headYear: {
        marginTop: '4.375rem',
    },
    addedName: {
        borderBottom: `1px solid ${colors.lightGray}`,
        marginTop: '1rem',
    },
    addAnother: {
        color: colors.lightGray,
        cursor: 'pointer',
    },
    boldText: {
        fontWeight: 600,
        paddingRight: '4rem',
    },
});
const Index = () => {
    const classes = useStyles();
    const data = [
        { col1: 'Group 4', col2: 'John Wisk', col3: '65' },
        { col1: 'Group 6', col2: 'Jenny Smith', col3: '55' },
        { col1: 'Group 8', col2: 'John Wisk', col3: '62' },
        { col1: 'Group 10', col2: 'Angelina Jolie', col3: '56' },
        { col1: 'Group 7', col2: 'Harrison Ford', col3: '46' },
    ];
    const profileData = [
        { name: 'Shehan Abeysinghe', photo: commonImg.photo },
        { name: 'Jenny Smith', photo: commonImg.photo },
        { name: 'Gemma Abigail Holmes', photo: commonImg.photo },
        { name: 'Gwanda Betty Cooper', photo: commonImg.photo },
        { name: 'Shehan Abeysinghe', photo: commonImg.photo },
        { name: 'Jenny Smith', photo: commonImg.photo },
        { name: 'Shehan Abeysinghe', photo: commonImg.photo },
        { name: 'Jenny Smith', photo: commonImg.photo },
    ];
    return (
        <Grid container className={classes.parent}>
            <Grid item xs={12} md={4}>
                <Typography className={classes.title}>Add new form group</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
                <InputWithLabel fieldName="Group name" mt="mt-0" />
                <ThreeText headTitle="Tutor" title="John Wick" another="Add another member" />
                <InputWithLabel fieldName="Students" placeholder="Add student" />
                <ProfileTileContainer data={profileData} />
            </Grid>
        </Grid>
    );
};

export default Index;
