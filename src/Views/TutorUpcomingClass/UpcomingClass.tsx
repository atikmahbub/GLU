import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { makeStyles, Typography } from '@material-ui/core';
import image from '../../Assets/images';

const useStyles = makeStyles({
    headerText: {
        fontSize: '2.625rem',
        display: 'inline-block',
        lineHeight: 1,
        marginBottom: '2.46875rem',
        fontFamily: 'CircularXXWeb-Book',
    },

    dateBox: {
        marginRight: '11.6875rem',
    },
    dateBox2: {},
    medText: {
        fontSize: '1.5625rem',
        height: '100%',
        marginTop: '0.5625rem',
        display: 'inline-block',
        fontFamily: 'CircularXXWeb-Book',
    },
    headerTextBox: {
        marginRight: '6.875rem',
    },
    mainBox: {
        marginTop: '6.875rem',
        display: 'flex',
        justifyContent: 'space-between',
    },
    upload: {
        fontSize: '1.25rem',
        width: '9.375rem',
        height: '2.5rem',
        border: '1.2px solid #A8A8A8',
        textAlign: 'center',
        paddingTop: '4.1px',
        paddingBottom: '8.99px',
        marginTop: '1.53125rem',
        boxSizing: 'border-box',
        display: 'inline-block',
        fontFamily: 'CircularXXWeb-Book',
    },

    ////

    imageBox: {
        marginRight: '9.8125rem',
        marginBottom: '3.125rem',
        display: 'inline',
    },

    image: {
        width: '26.0625rem',
        height: '20rem',
    },

    ////
});

const UpcomingClasses = () => {
    const classes = useStyles();

    return (
        <div>
            {/* First Box pattern */}

            <div className={classes.mainBox}>
                <Typography className={classes.headerText}>
                    <div style={{ transform: 'translateY(-5px)', display: 'inline-block' }}>
                        <FiberManualRecordIcon />
                    </div>
                    Upcoming Classes
                </Typography>
                <div className={classes.upload}>Set class</div>
            </div>
            <hr style={{ marginBottom: '51px' }} />
            <div style={{ display: 'flex' }}>
                <div className={classes.headerTextBox}>
                    <Typography className={classes.headerText} style={{ width: '241px' }}>
                        July 2020
                    </Typography>
                </div>
                <div className={classes.imageBox}>
                    <img src={image.boy} alt="sedimentary rocks" className={classes.image} />
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
                <div className={classes.dateBox2}>
                    <Typography className={classes.headerText}>
                        Language.
                        <br />
                        First look at French for beginners
                    </Typography>
                    <br />

                    <div className={classes.medText}>Fully Booked</div>
                </div>
            </div>
            <hr style={{ marginLeft: '351px', marginTop: '0', marginBottom: '51px' }} />
            <div>
                <div style={{ display: 'flex', marginLeft: '351px' }}>
                    <div className={classes.imageBox}>
                        <img src={image.smilegirl} alt="sedimentary rocks" className={classes.image} />
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
                    <div className={classes.dateBox2}>
                        <Typography className={classes.headerText}>
                            Language.
                            <br />
                            First look at French for beginners
                        </Typography>
                        <br />

                        <div className={classes.medText}>Fully Booked</div>
                    </div>
                </div>
            </div>

            <hr style={{ marginBottom: '51px' }} />
            <div style={{ display: 'flex' }}>
                <div className={classes.headerTextBox}>
                    <Typography className={classes.headerText} style={{ width: '241px' }}>
                        August 2020
                    </Typography>
                </div>
                <div className={classes.imageBox}>
                    <img src={image.smilingindark} alt="sedimentary rocks" className={classes.image} />
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
                <div className={classes.dateBox2}>
                    <Typography className={classes.headerText}>
                        Language.
                        <br />
                        First look at French for beginners
                    </Typography>
                    <br />

                    <div className={classes.medText}>Fully Booked</div>
                </div>
            </div>
            <hr style={{ marginLeft: '351px', marginTop: '0', marginBottom: '51px' }} />
            <div>
                <div style={{ display: 'flex', marginLeft: '351px' }}>
                    <div className={classes.imageBox} style={{ marginBottom: '150px' }}>
                        <img src={image.girlwithlaptop} alt="sedimentary rocks" className={classes.image} />
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
                    <div className={classes.dateBox2}>
                        <Typography className={classes.headerText}>
                            Language.
                            <br />
                            First look at French for beginners
                        </Typography>
                        <br />

                        <div className={classes.medText}>Fully Booked</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingClasses;
