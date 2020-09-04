import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { colors } from '../../Styles/colors';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import classNames from 'classnames';
import LineDivider from '../../components/Dashobard/LineDivider';
import ThreeColTable from '../../components/Dashobard/ThreeColTable';

const useStyles = makeStyles({
    parent: {
        padding: '4.062rem 3.437rem',
        backgroundColor: colors.white,
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
        paddingRight:'4rem'
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
    return (
        <Grid container className={classes.parent}>
            <Grid item xs={12} md={4}>
                <Typography className={classes.title}>Year Group</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
                <InputWithLabel fieldName="Title" mt="mt-0" />
                <Typography className={classNames(classes.title, classes.headYear)}>Head of year</Typography>
                <Typography className={classNames(classes.title, classes.addedName)}>John Wick</Typography>
                <Typography className={classNames(classes.title, classes.addedName, classes.addAnother)}>
                    Add another member
                </Typography>
                <InputWithLabel fieldName="Year Group" />
            </Grid>
            <LineDivider mt="3.75rem" mb="3.75rem" />
            <Grid item xs={12} md={4}></Grid>
            <Grid item xs={12} md={8}>
                <div className="details-wrapper px-0">
                    <ThreeColTable
                        colWidth1="50%"
                        colWidth2="40%"
                        colWidth3="10%"
                        colHead1="Form Groups"
                        colHead2="Tutor"
                        colHead3="Students"
                        data={data}
                        padding="0"
                    />
                    <Grid container alignItems="center" justify="space-between">
                        <Typography className={classNames(classes.title, classes.boldText)}>Total</Typography>
                        <Typography className={classNames(classes.title, classes.boldText)}>284</Typography>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    );
};

export default Index;
