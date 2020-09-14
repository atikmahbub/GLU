import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import image from '../../Assets/images';

const useStyles = makeStyles({
    headerText: {
        fontSize: '2.625rem',
        display: 'inline-block',
        lineHeight: 1,
        height: '146px',
    },
    dateBox: {
        marginRight: '157px',
    },
    medText: {
        fontSize: '1.5625rem',
        height: '33px',
        marginTop: '9px',
        display: 'inline-block',
    },
    headerTextBox: {
        marginRight: '147px',
    },
    imageBox: {
        marginRight: '157px',
        marginBottom: '100px',
        display: 'inline',
    },
});

const Header = () => {
    const classes = useStyles();

    return (
        <div style={{ display: 'flex', backgroundColor: '#F7F7F7' }}>
            <div className={classes.headerTextBox}>
                <Typography className={classes.headerText}>Next</Typography>
            </div>
            <div className={classes.imageBox}>
                <img src={image.tutorDashboard} alt="sedimentary rocks" width="535px" height="411px" />
            </div>
            <div className={classes.dateBox}>
                <Typography className={classes.headerText}>
                    29/07/20
                    <br />
                    9am-
                    <br />
                    10.15am
                </Typography>
                <br />
                <span className={classes.medText}>45 mins</span>
            </div>
            <div>
                <Typography className={classes.headerText}>
                    Geography
                    <br />
                    Ignetious Sedimentary
                </Typography>
                <br />

                <div className={classes.medText}>Fully Booked</div>
            </div>
        </div>
    );
};

export default Header;
