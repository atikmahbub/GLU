import React, { useState } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import NavigationMenu from '../../components/NavigationMenu';
import PageFooter from '../../components/PageFooter';
import { connect } from 'react-redux';
import { addTeacherExperienceApiCall } from '../../Redux/Actions/teacherAction';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    footer: {
        marginTop: '5rem',
        position: 'absolute',
        top: '213rem',
    },
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

const AddFormExp = ({ addTeacherExperienceApiCall }) => {
    const menu = [
        { link: '/tutor/', name: 'Dashboard' },
        { link: '/tutor/set-class', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    const classes = useStyles();
    const history = useHistory();

    const [experience, setExperience] = useState({
        workPlace: null,
        position: null,
        department: null,
        description: null,
        startDate: null,
        endDate: null,
    });
    const handleChange = (e) => {
        console.log(experience);
        return setExperience({ ...experience, [e.target.id]: e.target.value });
    };

    return (
        <NavigationMenu menuList={menu} showBurgerNav={'hide'} tutorOptions={'show'} reverseButtons={'yes'}>
            <Grid container className={classes.mainPadding} spacing={6}>
                <Grid item md={6}>
                    <div className={classes.detailsText}>Add Experience</div>
                </Grid>

                <Grid item md={6}>
                    <div className={classes.details}>
                        <div className={classes.detailsText}>Experience</div>
                        <div className={classes.email}>
                            <label htmlFor="workPlace" className={classes.inputLabel}>
                                Workplace
                            </label>
                            <input
                                onChange={(e) => handleChange(e)}
                                value={experience.workPlace}
                                type="text"
                                id="workPlace"
                                className={classes.inputBox}
                            ></input>
                        </div>

                        <div className={classes.email}>
                            <label htmlFor="position" className={classes.inputLabel}>
                                Position
                            </label>
                            <input
                                onChange={(e) => handleChange(e)}
                                value={experience.position}
                                type="text"
                                id="position"
                                className={classes.inputBox}
                            ></input>
                        </div>

                        <div className={classes.email}>
                            <label htmlFor="department" className={classes.inputLabel}>
                                Department
                            </label>
                            <input
                                onChange={(e) => handleChange(e)}
                                value={experience.department}
                                type="text"
                                id="department"
                                className={classes.inputBox}
                            ></input>
                        </div>

                        <div className={classes.email}>
                            <label htmlFor="description" className={classes.inputLabel}>
                                Description
                            </label>
                            <input
                                onChange={(e) => handleChange(e)}
                                value={experience.description}
                                type="text"
                                id="description"
                                className={classes.inputBox}
                            ></input>
                        </div>

                        <div className={classes.name}>
                            <div className={classes.firstName}>
                                <label htmlFor="startDate" className={classes.inputLabel}>
                                    Start Date
                                </label>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    value={experience.startDate}
                                    type="date"
                                    id="startDate"
                                    className={classes.inputBoxDate}
                                ></input>
                            </div>
                            <div className={classes.lastName}>
                                <label htmlFor="endDate" className={classes.inputLabel}>
                                    End Date
                                </label>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    value={experience.endDate}
                                    type="date"
                                    id="endDate"
                                    className={classes.inputBoxDate}
                                ></input>
                            </div>
                        </div>
                    </div>
                    <div
                        onClick={async () => {
                            console.log('Button clicked');
                            await addTeacherExperienceApiCall(experience, history);
                        }}
                        style={{ textDecoration: 'none', color: 'black' }}
                        className={classes.upload}
                    >
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

export default connect(null, { addTeacherExperienceApiCall })(AddFormExp);
