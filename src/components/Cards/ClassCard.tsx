import React, { FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        paddingBottom: '5rem',
    },
    imgContainer: {
        marginBottom: '4.3125rem',
    },
    img: {
        width: '100%',
        height: 323,
        objectFit: 'cover',
    },
    textContainer: {
        marginBottom: '0.625rem',
    },
    text: {
        fontSize: '2.625rem',
        lineHeight: '2.8125rem',
        fontWeight: 400,
    },
    textSmall: {
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
    },
});

const ClassCard: FC = () => {
    const classes = useStyles();
    return (
        <Grid container direction="column" className={classes.root}>
            <Grid container justify="flex-end">
                <Grid item xs={7} className={classes.imgContainer}>
                    <img
                        src="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1597229086/gluschool/curlyahirgilr_owcgya.jpg"
                        alt="thumbnail"
                        className={classes.img}
                    />
                </Grid>
            </Grid>
            <Grid container className={classes.textContainer}>
                <Grid item xs={5}>
                    <Typography variant="h6" className={classes.text}>
                        29/07/20
                    </Typography>
                    <Typography variant="h6" className={classes.text}>
                        9am-10.15am
                    </Typography>
                </Grid>
                <Grid item xs={7}>
                    <Typography variant="h6" className={classes.text}>
                        Geography.
                        <br />
                        Igneous, Sedimentary.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={5}>
                    <Typography className={classes.textSmall}>45mins</Typography>
                </Grid>
                <Grid item xs={7}>
                    <Typography className={classes.textSmall}>Fully booked</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default memo(ClassCard);
