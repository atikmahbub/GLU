import React, { FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ButtonPrimary from '../Button/ButtonPrimary';

const useStyles = makeStyles({
    button: {
        marginRight: '1.25rem',
    },
    text: {
        fontFamily: 'CircularXXMonoWeb-Regular',
    },
});

interface IFormControlUpload {
    max: number;
}

const FormControlUpload: FC<IFormControlUpload> = ({ max }) => {
    const classes = useStyles();
    return (
        <Grid container alignItems="center">
            <ButtonPrimary variant="outlined" outlinedVariant={2} className={classes.button}>
                Upload
            </ButtonPrimary>
            <Typography className={classes.text}>Max size {max}MB</Typography>
        </Grid>
    );
};

export default memo(FormControlUpload);
