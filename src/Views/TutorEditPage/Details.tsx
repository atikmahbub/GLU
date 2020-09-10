import React from 'react';
import { makeStyles, Typography, TextField } from '@material-ui/core';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import SmallTextButton from './SmallTextButton';

const useStyles = makeStyles({
    details: {
        width: '55.375rem',
        marginBottom: '5.3125rem',
    },
    detailsText: {
        fontSize: '2.265rem',
    },
    name: {},
    firstName: {
        width: '48%',
        display: 'inline-block',
        marginRight: '4%',
    },
    lastName: {
        width: '48%',
        display: 'inline-block',
    },
    inputBox: {
        width: '100%',
        border: 'none',
        borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        fontSize: '2.625rem',
        font: 'normal normal normal 42px/30px CircularXXWeb',
        letterSpacing: '0px',
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
    },
    email: {
        marginTop: '2.5625rem',
        width: '100%',
    },
    mobile: {
        marginTop: '2.5625rem',
    },
    preNum: {
        width: '18.8125rem',
        display: 'inline-block',
        marginRight: '1.5rem',
    },
    mainNum: {
        width: '35rem',
        display: 'inline-block',
    },
    selectInputBox: {
        width: '100%',
        border: 'none',
        borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        fontSize: '2.625rem',
        font: 'normal normal normal 42px/30px CircularXXWeb',
        letterSpacing: '0px',
        height: '3.19rem',
        backgroundColor: 'transparent',

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
    },
    iconBox: {
        position: 'absolute',
        display: 'inline-block',
        transform: 'translate(-1.5rem, 1rem)',
    },
    iconBox2: {
        position: 'absolute',
        display: 'inline-block',
        transform: 'translate(-1.5rem, -0.7rem)',
    },
    reset: {
        transform: 'translate(-1.5rem, -1.5rem)',
    },
});

const Details = () => {
    const classes = useStyles();

    return (
        <div className={classes.details}>
            <div className={classes.detailsText}>Your Details</div>
            <div className={classes.name}>
                <div className={classes.firstName}>
                    <label htmlFor="fname" className={classes.inputLabel}>
                        First Name
                    </label>
                    <input type="text" id="fname" className={classes.inputBox}></input>
                </div>
                <div className={classes.lastName}>
                    <label htmlFor="lname" className={classes.inputLabel}>
                        Last Name
                    </label>
                    <input type="text" id="lname" className={classes.inputBox}></input>
                </div>
            </div>

            <div className={classes.email}>
                <label htmlFor="email" className={classes.inputLabel}>
                    Email
                </label>
                <input type="text" id="email" className={classes.inputBox}></input>
            </div>

            <div className={classes.mobile}>
                <div className={classes.preNum}>
                    <label htmlFor="cars" className={classes.inputLabel}>
                        Mobile No
                    </label>
                    <select id="cars" name="cars" className={classes.selectInputBox}>
                        <option value="volvo">UAE/ +971</option>
                        <option value="saab">AUS/ +971</option>
                        <option value="fiat">USA/ +971</option>
                        <option value="audi">GBR/ +971</option>
                    </select>
                </div>
                <div className={classes.mainNum}>
                    <input type="number" id="main" className={classes.inputBox}></input>
                </div>
            </div>

            <div className={classes.location}>
                <label htmlFor="location" className={classes.inputLabel}>
                    Location
                </label>
                <input type="text" id="location" className={classes.inputBox}></input>
                <div className={classes.iconBox}>
                    <LocationSearchingIcon />
                </div>
            </div>

            <div className={classes.password}>
                <label htmlFor="password" className={classes.inputLabel}>
                    Password
                </label>
                <input type="password" id="password" className={classes.inputBox}></input>
                <div className={classes.iconBox2}>
                    <div className={classes.reset}>
                        <SmallTextButton text="Reset" />
                    </div>

                    <VisibilityOffIcon />
                </div>
            </div>
        </div>
    );
};

export default Details;
