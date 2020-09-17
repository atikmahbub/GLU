import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import image from '../../Assets/images';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    headerText: {
        fontSize: '2.625rem',
        display: 'inline-block',
        lineHeight: 1,
        height: '9.125rem',
        fontFamily: 'CircularXXWeb-Book',
    },
    dateBox: {
        marginRight: '9.8125rem',
    },
    medText: {
        fontSize: '1.5625rem',
        height: '2.0625rem',
        marginTop: '0.5625rem',
        display: 'inline-block',
        fontFamily: 'CircularXXWeb-Book',
    },
    headerTextBox: {
        marginRight: '9.1875rem',
    },
    imageBox: {
        marginRight: '9.8125rem',
        marginBottom: '6.25rem',
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
                <Link to="/tutor/upcoming-class">
                    <img
                        src={image.tutorDashboard}
                        alt="sedimentary rocks"
                        width="535px"
                        height="411px"
                        objectFit="cover"
                    />
                </Link>
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
                <Link to="/tutor/upcoming-class" style={{ textDecoration: 'none', color: 'black' }}>
                    <Typography className={classes.headerText}>
                        Geography
                        <br />
                        Ignetious Sedimentary
                    </Typography>
                </Link>
                <br />

                <div className={classes.medText}>Fully Booked</div>
            </div>
        </div>
    );
};

export default Header;
