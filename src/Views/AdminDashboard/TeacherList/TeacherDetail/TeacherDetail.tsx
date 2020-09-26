import React, { useEffect, useState } from 'react';
import { Box, Grid, makeStyles, TextareaAutosize } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

import Img from '../../../../Assets/images';
import { teacherStyle } from './teacherStyle';
import { useDispatch, useSelector } from 'react-redux';
import { teacherDetailSuperAdmin } from '../../../../Redux/Actions/superAdminActions';

const useStyle = makeStyles(teacherStyle as any);

const TeacherDetail = () => {
    const classes = useStyle();
    const [teacherData, setTeacherData] = useState({
        firstName: '',
        lastName: '',
        bio: '',
        email: '',
        phoneNumber: '',
        city: '',
    });
    const teachetDetails = useSelector((state: any) => state.superAdminReducer.teacherDetails);
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        if (location?.state?.hasOwnProperty('teacherDetails')) {
            dispatch(teacherDetailSuperAdmin((location as any)?.state?.teacherDetails?.teacherId));
        }
    }, []);
    useEffect(() => {
        if (teachetDetails) {
            const data = {
                firstName: teachetDetails.firstName,
                lastName: teachetDetails.lastName,
                bio: teachetDetails.bio,
                email: teachetDetails?.User?.email,
                phoneNumber: teachetDetails.phoneNumber,
                city: teachetDetails.location,
            };
            setTeacherData(data);
        }
    }, [teachetDetails]);

    return (
        <Box component="div" className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <h1>Teacher</h1>
                    <div>
                        <img className={classes.image2} src={Img.chairman} alt="tutor" />
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
                        <img src={Img.scaffgirl} alt="tutor" className={classes.image} />

                        <div className={classes.bio}>
                            <div className={classes.bioText}>Bio</div>
                            <TextareaAutosize
                                id="bio"
                                value={teacherData.bio}
                                rowsMin={5}
                                className={classes.textareaClass}
                            />
                        </div>
                        <div className={classes.detailsText}>Teacher Details</div>
                        <div className={classes.name}>
                            <div className={classes.firstName}>
                                <label htmlFor="firstName" className={classes.inputLabel}>
                                    First Name
                                </label>
                                <input
                                    value={teacherData.firstName}
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
                                    value={teacherData.lastName}
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
                                value={teacherData.email}
                                type="text"
                                id="email"
                                className={classes.inputBox}
                            ></input>
                        </div>

                        <div className={classes.mobile}>
                            <div className={classes.preNum}>
                                <label htmlFor="mobile" className={classes.inputLabel}>
                                    Mobile No
                                </label>
                                <div>
                                    <input
                                        value={teacherData.phoneNumber}
                                        type="number"
                                        id="mobile"
                                        className={classes.inputBox}
                                    ></input>
                                </div>
                            </div>
                        </div>

                        <div className={classes.location}>
                            <label htmlFor="location" className={classes.inputLabel}>
                                Location
                            </label>
                            <input
                                value={teacherData.city}
                                type="text"
                                id="location"
                                className={classes.inputBox}
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

export default TeacherDetail;
