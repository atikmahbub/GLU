import React, { useEffect, useState } from 'react';
import { makeStyles, Typography, TextareaAutosize } from '@material-ui/core';
import SmallTextButton from './SmallTextButton';
import { connect } from 'react-redux';
import Img from '../../Assets/images';

const useStyles = makeStyles({
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
    bio: {
        marginTop: '5.726875rem',
        width: '100%',
        marginBottom: '5.3125rem',
        fontFamily: 'CircularXXWeb-Book',
    },
    bioText: {
        fontSize: '1.5625rem',
        lineHeight: '1.8125rem',
        fontFamily: 'CircularXXWeb-Book',
        marginBottom: '1rem',
        fontFamily: 'CircularXXWeb-Book',
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
    smallText: {
        display: 'inline-block',
        marginLeft: '1.875rem',
        transform: 'translateY(-0.1rem)',
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
    image: {
        width: '11.5rem',
        height: '11.47rem',
        marginTop: '2.49rem',
    },
    addPhotoBox: {
        marginLeft: '3.125rem',

        display: 'inline-block',
        transform: 'translateY(0.4rem)',
    },
    addPhotoText: {
        fontSize: '1.5625rem',
        width: '100%',
        height: '33px',
        fontFamily: 'CircularXXWeb-Book',
    },
    textareaClass: {
        backgroundAttachment: 'local',
        backgroundImage:
            'linear-gradient(to right, white 0px, transparent 0px),linear-gradient(to left, white 0px, transparent 0px),repeating-linear-gradient(white, white 3rem, #ccc 3.0625rem, #ccc 3rem, white 3.0625rem)',
        lineHeight: '3rem',
        border: 'none',
        width: '100%',
        height: '14rem',
        color: 'inherit',
        fontFamily: 'CircularXXWeb-Book',

        fontSize: '2.625rem',
        '&:hover': {
            border: 'none',
            cursor: 'text',
        },
        '&:focus': {
            border: 'none',
            outline: 'none',
        },
        font: 'normal normal normal 42px/62px CircularXXWeb;',
    },
});

const Details = ({ tutorDetails, textAreaData }) => {
    const classes = useStyles();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '',
        mobile: '',
        location: '',
    });

    const [textAreaValue, setTextArea] = useState({
        bio: null,
    });

    useEffect(() => {
        let cc: any;
        let phNo: any;

        if (tutorDetails && tutorDetails.phoneNumber.length === 14) {
            cc = tutorDetails.phoneNumber.substring(0, 4);
            phNo = tutorDetails.phoneNumber.substring(4);
        }
        if (tutorDetails.phoneNumber.length === 13) {
            cc = tutorDetails.phoneNumber.substring(0, 3);
            phNo = tutorDetails.phoneNumber.substring(3);
        }

        tutorDetails &&
            setFormData({
                firstName: tutorDetails.firstName,
                lastName: tutorDetails.lastName,
                email: tutorDetails.User.email,
                location: tutorDetails.location,
                countryCode: cc,
                mobile: phNo,
            });
        setTextArea({ bio: textAreaData });
    }, []);

    const handleChange = (e) => {
        console.log(formData);
        setFormData({ ...formData, [e.target.id]: e.target.value });
        setTextArea({ ...textAreaValue, [e.target.id]: e.target.value });
    };

    return (
        <div className={classes.details}>
            <img src={Img.scaffgirl} alt="tutor" className={classes.image} />
            <div className={classes.addPhotoBox}>
                <Typography className={classes.addPhotoText}>Add a photo to your account</Typography>
                {/* <input type="file" name="fileToUpload" id="fileToUpload"></input> */}
                <input style={{ display: 'none' }} type="file" id="file"></input>
                <label className={classes.upload} for="file">
                    Upload
                </label>
                <div className={classes.smallText}>Max size 50MB</div>
            </div>
            <div className={classes.bio}>
                <div className={classes.bioText}>Bio</div>
                <TextareaAutosize
                    onChange={(e) => handleChange(e)}
                    id="bio"
                    value={textAreaValue.bio}
                    rowsMin={5}
                    className={classes.textareaClass}
                />
            </div>
            <div className={classes.detailsText}>Your Details</div>
            <div className={classes.name}>
                <div className={classes.firstName}>
                    <label htmlFor="firstName" className={classes.inputLabel}>
                        First Name
                    </label>
                    <input
                        onChange={(e) => handleChange(e)}
                        value={formData.firstName}
                        type="text"
                        id="firstName"
                        className={classes.inputBox}
                    ></input>
                </div>
                <div className={classes.lastName}>
                    <label htmlFor="lastName" className={classes.inputLabel}>
                        Last Name
                    </label>
                    <input
                        onChange={(e) => handleChange(e)}
                        value={formData.lastName}
                        type="text"
                        id="lastName"
                        className={classes.inputBox}
                    ></input>
                </div>
            </div>

            <div className={classes.email}>
                <label htmlFor="email" className={classes.inputLabel}>
                    Email
                </label>
                <input
                    onChange={(e) => handleChange(e)}
                    value={formData.email}
                    type="text"
                    id="email"
                    className={classes.inputBox}
                ></input>
            </div>

            <div className={classes.mobile}>
                <div className={classes.preNum}>
                    <label htmlFor="countryCode" className={classes.inputLabel}>
                        Mobile No
                    </label>
                    <select
                        onChange={(e) => handleChange(e)}
                        value={formData.countryCode}
                        id="countryCode"
                        name="cars"
                        className={classes.selectInputBox}
                    >
                        <option value="+971">UAE/ +971</option>
                        <option value="+971">AUS/ +971</option>
                        <option value="+971">USA/ +971</option>
                        <option value="+971">GBR/ +971</option>
                    </select>
                </div>
                <div className={classes.mainNum}>
                    <input
                        onChange={(e) => handleChange(e)}
                        value={formData.mobile}
                        type="number"
                        id="mobile"
                        className={classes.inputBox}
                    ></input>
                </div>
            </div>

            <div className={classes.location}>
                <label htmlFor="location" className={classes.inputLabel}>
                    Location
                </label>
                <input
                    onChange={(e) => handleChange(e)}
                    value={formData.location}
                    type="text"
                    id="location"
                    className={classes.inputBox}
                ></input>
                <div className={classes.iconBox}>
                    {/* <LocationSearchingIcon /> */}
                    <i className="icon-Locate"></i>
                </div>
            </div>

            <div className={classes.password}>
                <label htmlFor="password" className={classes.inputLabel}>
                    Password
                </label>
                <input disabled type="password" id="password" className={classes.inputBox}></input>
                <div className={classes.iconBox2}>
                    <div className={classes.reset}>
                        <SmallTextButton text="Reset" />
                    </div>

                    {/* <VisibilityOffIcon /> */}
                    <i className="icon-Invisible"></i>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        tutorDetails: state.teacherReducer.teacherData,
        textAreaData: state.teacherReducer.teacherData.bio,
    };
};

export default connect(mapStateToProps)(Details);
