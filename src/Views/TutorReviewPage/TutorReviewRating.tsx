import React from 'react';
import { Grid, Typography, makeStyles, TextareaAutosize, Button } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SmallButton from './SmallButton';

const useStyles = makeStyles({
    footer: {
        textAlign: 'center',
        marginTop: '3rem',
    },
    headingSecondary: {
        fontSize: '2.625rem',
    },
    small: { fontSize: '1.5625rem' },
    textareaClass: {
        backgroundAttachment: 'local',
        backgroundImage:
            'linear-gradient(to right, white 0px, transparent 0px),linear-gradient(to left, white 0px, transparent 0px),repeating-linear-gradient(white, white 3rem, #ccc 3rem, #ccc 3.0625rem, white 3.0625rem)',
        lineHeight: '3rem',
        padding: '0rem 1rem',
        border: 'none',
        width: '90%',
        height: '15.385rem',
        color: '#505050',
        fontSize: '1.5rem',
    },
    topMarg: {
        marginTop: '5rem',
        marginBottom: '2rem',
    },
    confirm: {
        marginTop: '6rem',
    },
    submit: {
        padding: '0.3rem 0rem',
        fontSize: '1.25rem',
        width: '9.375rem',
        border: '1.2px solid #A8A8A8',
        marginRight: '0.5rem',
    },
    cancel: {
        color: 'gray',
    },
    leftGrid: {
        borderRight: '1px solid lightgrey',
        boxSizing: 'border-box',
        width: '45%',
    },
    mainGrid: {
        paddingBottom: '0',
    },
    rightGrid: {
        width: '45%',
    },
    recommended: {
        transform: 'translateY(28rem)',
    },
});

const TutorReviewRating = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container className={classes.mainGrid} spacing={6}>
                <Grid item md={6} className={classes.leftGrid}>
                    <Typography className={classes.headingSecondary}>Class Rating</Typography>
                    <Typography className={`${classes.headingSecondary} ${classes.recommended}`}>
                        Recommended
                    </Typography>
                </Grid>
                <Grid item md={6} className={classes.rightGrid}>
                    <Typography className={classes.small}>Feedback</Typography>
                    <TextareaAutosize rowsMin={6} className={classes.textareaClass} />
                    <Typography className={classes.small}>Stars</Typography>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarBorderIcon />
                    <hr className={classes.topMarg} />
                    <Typography className={classes.small}>Would you recommend this Class?</Typography>
                    <SmallButton label="Yes" />
                    <SmallButton label="No" />
                    <hr className={classes.topMarg} />
                    <Typography className={classes.small}>Would you recommend the Tutor</Typography>
                    <SmallButton label="Yes" />
                    <SmallButton label="No" />
                    <div className={classes.confirm}>
                        <Button className={classes.submit}>Submit</Button>
                        <Button className={classes.cancel}>Cancel</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default TutorReviewRating;
