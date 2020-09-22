import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import UploadMaxSize from '../../components/Button/UploadMaxSize';
import TwoColGrid from '../../components/Dashobard/TwoColGrid';
import SelectWithLabel from '../../components/Inputs/SelectWithLabel';
import TextAreaWithLabel from '../../components/Inputs/TextAreaWithLabel';
import { colors } from '../../Styles/colors';

const useStyles = makeStyles({
    title: {
        fontSize: '1.562rem',
        lineHeight: '1.875rem',
        fontWeight: 500,
        color: colors.black,
    },
    mt: {
        marginTop: '2rem',
    },
});

const CmsNotification = () => {
    const classes = useStyles();
    const handleFile = (file: File) => {};
    return (
        <TwoColGrid titleOne="New message">
            <Typography className={classes.title}>Upload Document (Optional)</Typography>
            <UploadMaxSize onClick={handleFile} />
            <TextAreaWithLabel label="Message" rows={8} />
            <Box className={classes.mt}>
                <Typography className={classes.title}>Schedule message (Optional)</Typography>
                <Grid container spacing={2}>
                    <Grid item sm={12} md={4}>
                        <SelectWithLabel mt="mt-2" options={['Choose date']} />
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <SelectWithLabel mt="mt-2" options={['Choose time']} />
                    </Grid>
                    <Grid item sm={12} md={4}></Grid>
                </Grid>
            </Box>
        </TwoColGrid>
    );
};

export default CmsNotification;
