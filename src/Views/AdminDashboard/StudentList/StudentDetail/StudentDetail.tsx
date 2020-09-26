import React, { useEffect, useState } from 'react';
import { Box, Grid, makeStyles, TextareaAutosize } from '@material-ui/core';
import { studentStyle } from './studentStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { studentDetailSuperAdmin } from '../../../../Redux/Actions/superAdminActions';
import commonImg from '../../../../Assets/images';

const useStyle = makeStyles(studentStyle as any);

const StudentDetail = () => {
    const classes = useStyle();
    const [studentData, setStudentData] = useState({
        firstName: '',
        lastName: '',
        bio: '',
        email: '',
        phoneNumber: '',
        city: '',
    });
    const studentDetails = useSelector((state: any) => state.superAdminReducer.studentDetails);
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        if (location?.state?.hasOwnProperty('studentDetails')) {
            dispatch(studentDetailSuperAdmin((location as any)?.state?.studentDetails?.studentId));
        }
    }, []);
    useEffect(() => {
        if (studentDetails) {
            console.log(studentDetails)
            const data = {
                firstName: studentDetails.firstName,
                lastName: studentDetails.lastName,
                bio: studentDetails.bio,
                email: studentDetails?.User?.email,
                phoneNumber: studentDetails.phoneNumber,
                city: studentDetails.location,
            };
            setStudentData(data);
        }
    }, [studentDetails]);

    return (
        <Box component="div" className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <h1>Student</h1>
                    <div>
                        <img className={classes.image2} src={commonImg.chairman} alt="tutor" />
                    </div>
                    <div
                        style={{ textDecoration: 'none', color: 'black', marginTop: '3rem', marginRight: '1rem' }}
                        className={classes.upload}
                    >
                        Approve
                    </div>
                    <div
                        style={{ textDecoration: 'none', color: 'black', marginTop: '3rem' }}
                        className={classes.upload}
                    >
                        Reject
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <div className={classes.details}>
                        <img src={commonImg.scaffgirl} alt="tutor" className={classes.image} />

                        <div className={classes.bio}>
                            <div className={classes.bioText}>Bio</div>
                            <TextareaAutosize
                                id="bio"
                                value={studentData.bio}
                                rowsMin={5}
                                className={classes.textareaClass}
                                disabled
                            />
                        </div>
                        <div className={classes.detailsText}>Student Details</div>
                        <div className={classes.name}>
                            <div className={classes.firstName}>
                                <label htmlFor="firstName" className={classes.inputLabel}>
                                    First Name
                                </label>
                                <input
                                    value={studentData.firstName}
                                    type="text"
                                    id="firstName"
                                    className={classes.inputBox}
                                    disabled
                                ></input>
                            </div>
                            <div className={classes.lastName}>
                                <label htmlFor="lastName" className={classes.inputLabel}>
                                    Last Name
                                </label>
                                <input
                                    value={studentData.lastName}
                                    type="text"
                                    id="lastName"
                                    className={classes.inputBox}
                                    disabled
                                ></input>
                            </div>
                        </div>

                        <div className={classes.email}>
                            <label htmlFor="email" className={classes.inputLabel}>
                                Email
                            </label>
                            <input
                                value={studentData.email}
                                type="text"
                                id="email"
                                className={classes.inputBox}
                                disabled
                            ></input>
                        </div>

                        <div className={classes.mobile}>
                            <div className={classes.preNum}>
                                <label htmlFor="mobile" className={classes.inputLabel}>
                                    Mobile No
                                </label>
                                <select value={'+91'} id="countryCode" className={classes.selectInputBox}>
                                    <option value="+971">UAE/ +971</option>
                                    <option value="+971">AUS/ +971</option>
                                    <option value="+971">USA/ +971</option>
                                    <option value="+971">GBR/ +971</option>
                                </select>
                            </div>
                            <div className={classes.mainNum}>
                                <input
                                    value={studentData.phoneNumber}
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
                                value={studentData.city}
                                type="text"
                                id="location"
                                className={classes.inputBox}
                                disabled
                            ></input>
                            <div className={classes.iconBox}>
                                {/* <LocationSearchingIcon /> */}
                                <i className="icon-Locate"></i>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
};

export default StudentDetail;
