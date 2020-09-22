import React, { useEffect } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import NavigationMenu from '../../components/NavigationMenu';
import PageFooter from '../../components/PageFooter';
import { connect } from 'react-redux';
import SmallTextButton from '../TutorEditPage/SmallTextButton';
import { getTeacherEducationById } from '../../Redux/Actions/teacherAction';

const useStyles = makeStyles({
    footer: {
        marginTop: '5rem',
        position: 'absolute',
        top: '213rem',
    },
    mainPadding: {
        padding: '3.125rem',
        paddingBottom: '0',
        marginBottom: '0.625rem',
    },
    topMarg: {
        marginTop: '10rem',
        marginBottom: '3rem',
    },
    mainGrid: {
        position: 'relative',
    },
    details: {
        marginBottom: '5.3125rem',
        fontFamily: 'CircularXXWeb-Book',
    },
    detailsText: {
        fontSize: '2.625rem',
        fontFamily: 'CircularXXWeb-Book',
    },
    name: {},
    upload: {
        fontSize: '1.25rem',
        width: '9.375rem',
        height: '2.5rem',
        border: '1.2px solid #A8A8A8',
        textAlign: 'center',
        paddingTop: '4.1px',
        paddingBottom: '8.99px',
        marginTop: '1rem',
        boxSizing: 'border-box',
        display: 'inline-block',
        marginBottom: '6.0625rem',
        fontFamily: 'CircularXXWeb-Book',

        '&:hover': {
            cursor: 'pointer',
        },
    },
    firstName: {
        width: '48%',
        display: 'inline-block',
        marginRight: '4%',
        fontFamily: 'CircularXXWeb-Book',
    },
    lastName: {
        width: '48%',
        display: 'inline-block',
        fontFamily: 'CircularXXWeb-Book',
    },
    inputBox: {
        width: '100%',
        border: 'none',
        borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        fontSize: '2.625rem',
        font: 'normal normal normal 42px/30px CircularXXWeb',
        letterSpacing: '0px',
        fontFamily: 'CircularXXWeb-Book',

        height: '3.19rem',

        '&:focus': {
            border: 'none',
            outline: 'none',
            borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        },
        '&:active': {
            border: 'none',
            outline: 'none',
            borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        },
    },
    inputLabel: {
        display: 'block',
        marginTop: '1.9375rem',
        fontSize: '1.5625rem',
        font: 'normal normal normal 25px/30px CircularXXSub-RegularSubset',
        marginBottom: '0',
        fontFamily: 'CircularXXWeb-Book',
    },
    email: {
        marginTop: '2.5625rem',
        width: '100%',
        fontFamily: 'CircularXXWeb-Book',
    },
    mobile: {
        marginTop: '2.5625rem',
    },
    preNum: {
        width: '30%',
        display: 'inline-block',
        marginRight: '3%',
    },
    mainNum: {
        width: '67%',
        display: 'inline-block',
    },
    selectInputBox: {
        width: '100%',
        border: 'none',
        borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        fontSize: '2.625rem',
        letterSpacing: '0px',
        height: '3.19rem',
        backgroundColor: 'transparent',
        fontFamily: 'CircularXXWeb-Book',

        '&:focus': {
            border: 'none',
            outline: 'none',
            borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        },
        '&:active': {
            border: 'none',
            outline: 'none',
            borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        },
    },
    location: {
        marginTop: '2.5625rem',
        position: 'relative',
    },
    password: {
        marginTop: '2.5625rem',
        position: 'relative',
        fontFamily: 'CircularXXWeb-Book',
    },
    iconBox: {
        position: 'absolute',
        display: 'inline-block',
        transform: 'translate(-1.1rem, 1.2rem)',
    },
    iconBox2: {
        position: 'absolute',
        display: 'inline-block',
        transform: 'translate(-1.1rem, -0.5rem)',
        fontFamily: 'CircularXXWeb-Book',
    },
    reset: {
        transform: 'translate(-2rem, -1.5rem)',
        fontFamily: 'CircularXXWeb-Book',
    },
    inputBoxDate: {
        width: '100%',
        border: 'none',
        borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        fontSize: '1.625rem',
        font: 'normal normal normal 42px/30px CircularXXWeb',
        letterSpacing: '0px',
        fontFamily: 'CircularXXWeb-Book',

        height: '3.19rem',

        '&:focus': {
            border: 'none',
            outline: 'none',
            borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        },
        '&:active': {
            border: 'none',
            outline: 'none',
            borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        },
    },
});

const EditFormEdu = ({ match, getTeacherEducationById }) => {
    const menu = [
        { link: '/tutor/', name: 'Dashboard' },
        { link: '/tutor/set-class', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    const classes = useStyles();
    useEffect(() => {
        console.log(match.params.id);
        getTeacherEducationById(match.params.id);
    }, []);
    return (
        <NavigationMenu menuList={menu} showBurgerNav={'hide'} tutorOptions={'show'} reverseButtons={'yes'}>
            <Grid container className={classes.mainPadding} spacing={6}>
                <Grid item md={6}>
                    <div className={classes.detailsText}>Edit Profile</div>
                </Grid>

                <Grid item md={6}>
                    <div className={classes.details}>
                        <div className={classes.detailsText}>Education</div>
                        <div className={classes.email}>
                            <label htmlFor="school" className={classes.inputLabel}>
                                School/College
                            </label>
                            <input type="text" id="school" className={classes.inputBox}></input>
                        </div>

                        <div className={classes.email}>
                            <label htmlFor="qualification" className={classes.inputLabel}>
                                Qualification
                            </label>
                            <input type="text" id="qualification" className={classes.inputBox}></input>
                        </div>

                        <div className={classes.email}>
                            <label htmlFor="fieldOfStudy" className={classes.inputLabel}>
                                Field Of Study
                            </label>
                            <input type="text" id="fieldOfStudy" className={classes.inputBox}></input>
                        </div>
                        <div className={classes.name}>
                            <div className={classes.firstName}>
                                <label htmlFor="fname" className={classes.inputLabel}>
                                    Start Date
                                </label>
                                <input type="date" id="fname" className={classes.inputBoxDate}></input>
                            </div>
                            <div className={classes.lastName}>
                                <label htmlFor="lname" className={classes.inputLabel}>
                                    End Date
                                </label>
                                <input type="date" id="lname" className={classes.inputBoxDate}></input>
                            </div>
                        </div>
                        <SmallTextButton text="Save" />
                    </div>
                    <div style={{ textDecoration: 'none', color: 'black' }} className={classes.upload}>
                        Save
                    </div>
                </Grid>
            </Grid>
            <div className="commonFooter">
                <PageFooter />
            </div>
        </NavigationMenu>
    );
};

export default connect(null, { getTeacherEducationById })(EditFormEdu);
