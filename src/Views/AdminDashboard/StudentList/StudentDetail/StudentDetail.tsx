import React, { useEffect, useState } from 'react';
import { Box, Grid, makeStyles, TextareaAutosize } from '@material-ui/core';
import { studentStyle } from './studentStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { schoolDetailSuperAdmin } from '../../../../Redux/Actions/superAdminActions';
import commonImg from '../../../../Assets/images';
import Reusable from './ReusableEdExp';

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
        education: '',
    });
    const studentDetails = useSelector((state: any) => state.superAdminReducer.studentDetails);
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        if (location?.state?.hasOwnProperty('studentDetails')) {
            dispatch(schoolDetailSuperAdmin((location as any)?.state?.studentDetails?.studentId));
        }
    }, []);
    useEffect(() => {
        if (studentDetails) {
            console.log(studentDetails);
            const data = {
                firstName: studentDetails.firstName,
                lastName: studentDetails.lastName,
                bio: studentDetails.bio,
                email: studentDetails?.User?.email,
                phoneNumber: studentDetails.phoneNumber,
                city: studentDetails.location,
                education: studentDetails.StudentQualifications,
            };
            setStudentData(data);
        }
    }, [studentDetails]);

    return (
        <Box component="div" className={classes.root}>
            <Grid container spacing={8}>
                <Grid item xs={6}>
                    <h1>Student</h1>
                    <div>
                        <img src={commonImg.scaffgirl} alt="tutor" className={classes.image} />
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
                                <div>
                                    <input
                                        value={studentData.phoneNumber}
                                        type="text"
                                        id="mobile"
                                        className={classes.inputBox}
                                        disabled
                                    ></input>
                                </div>
                            </div>
                        </div>

                        <div className={classes.location}>
                            <label htmlFor="location" className={classes.inputLabel}>
                                Location
                            </label>
                            <input
                                value={studentData.city ? studentData.city : 'N/A'}
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
                <Grid xs={6}>
                    <div className={classes.detailsText}>Education</div>
                    {/*<div className={classes.details}>
                        <div className={classes.labelText}>2016-2019</div>
                        <div className={classes.btnContainer}></div>
                        <div className={classes.infoText}>
                            IIT Guwahati
                            <br />
                            Btech
                        </div>
                    </div>
                    <hr className={classes.hr} /> */}
                    {studentData.education instanceof Array &&
                        studentData.education.map((item: any) => {
                            return (
                                <Reusable
                                    startDate={item.QualificationDetail.startDate.split('T')[0].split('-')[0]}
                                    endDate={item.QualificationDetail.startDate.split('T')[0].split('-')[0]}
                                    institute={item.QualificationDetail.school}
                                    position={item.QualificationDetail.fieldOfStudy}
                                />
                            );
                        })}
                </Grid>
            </Grid>
        </Box>
    );
};

export default StudentDetail;
