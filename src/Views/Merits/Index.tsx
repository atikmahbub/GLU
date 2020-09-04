import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Grid, Typography, makeStyles, Box } from '@material-ui/core';
import { colors } from '../../Styles/colors';
import Filter from './Filter';
import LeftHeadRightTextArea from './LeftHeadRightTextArea';

const useStyles = makeStyles({
    pdBox: {
        paddingLeft: '3.75rem',
        paddingRight: '3.75rem',
        paddingTop: '1rem',
        paddingBottom: '1rem',
    },
    topParent: {
        marginBottom: '5rem',
    },
    heading: {
        fontSize: '2.625rem',
        color: colors.black,
        marginTop:'1rem'
    },
    hrLine:{
        height:'1px',
        width:'100%',
        backgroundColor: colors.lightGray,
        marginTop:'3rem'
    }
});

const Index = () => {
    const classes = useStyles();
    return (
        <div className="student-wrapper">
            <CardContainer>
                <Box className={classes.pdBox}>
                    <Grid container spacing={0} className={classes.topParent}>
                        <Grid item xs={12} md={3}>
                            <Typography className={classes.heading}>Merits/Sanctions</Typography>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Filter />
                        </Grid>
                    </Grid>
                    <LeftHeadRightTextArea heading="Lunch Time" title="Sanction" date=" 06/02/2020" />
                    <Box className={classes.hrLine}/>
                    <LeftHeadRightTextArea heading="Chemistry" title="Merit" date=" 06/02/2020" />
                    <Box className={classes.hrLine}/>
                    <LeftHeadRightTextArea heading="Mathematics" title="Sanction" date=" 06/02/2020" />

                </Box>
            </CardContainer>
        </div>
    );
};

export default Index;
