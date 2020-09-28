import React, { useEffect, useState } from 'react';
import { Box, Grid, makeStyles, TextareaAutosize } from '@material-ui/core';
import { useLocation, useHistory } from 'react-router-dom';

import Img from '../../../../Assets/images';
import { teacherStyle } from './teacherStyle';
import { useDispatch, useSelector } from 'react-redux';
import { teacherDetailSuperAdmin, approveRejectTeacher } from '../../../../Redux/Actions/superAdminActions';
import Reusable from './../../StudentList/StudentDetail/ReusableEdExp';

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
        document: '',
        education: '',
        experience: '',
        id: '',
    });
    const teachetDetails = useSelector((state: any) => state.superAdminReducer.teacherDetails);
    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();
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
                document: teachetDetails.document,
                experience: teachetDetails.TeacherExperiences,
                education: teachetDetails.TeacherQualifications,
                id: teachetDetails.id,
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
                        {teacherData.document ? (
                            <img className={classes.image2} src={teacherData.document} alt="tutor" />
                        ) : (
                            'No documents uploaded'
                        )}
                    </div>
                    <div
                        style={{ textDecoration: 'none', color: 'black', marginTop: '3rem', marginRight: '1rem' }}
                        className={classes.upload}
                        onClick={() => {
                            console.log('Approve clocked');
                            dispatch(approveRejectTeacher(teacherData.id, { key: 1 }, history));
                        }}
                    >
                        Approve
                    </div>
                    <div
                        style={{ textDecoration: 'none', color: 'black', marginTop: '3rem' }}
                        className={classes.upload}
                        onClick={() => {
                            console.log('Reject clocked');

                            dispatch(approveRejectTeacher(teacherData.id, { key: 2 }, history));
                        }}
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
                                disabled
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
                                    disabled
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
                                    disabled
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
                                        value={teacherData.phoneNumber ? teacherData.phoneNumber : 'N/A'}
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
                                value={teacherData.city ? teacherData.city : 'N/A'}
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
                        <div className={classes.detailsText} style={{ marginTop: '6rem' }}>
                            Education
                        </div>
                        {teacherData.education instanceof Array && teacherData.education.length > 0
                            ? teacherData.education.map((item: any) => {
                                  return (
                                      <Reusable
                                          startDate={item.QualificationDetail.startDate.split('T')[0].split('-')[0]}
                                          endDate={item.QualificationDetail.startDate.split('T')[0].split('-')[0]}
                                          institute={item.QualificationDetail.school}
                                          position={item.QualificationDetail.fieldOfStudy}
                                      />
                                  );
                              })
                            : 'No education data available'}

                        <div className={classes.detailsText} style={{ marginTop: '6rem' }}>
                            Experience
                        </div>
                        {teacherData.experience instanceof Array && teacherData.experience.length > 0
                            ? teacherData.experience.map((item: any) => {
                                  return (
                                      <Reusable
                                          startDate={item.Experience.startDate.split('T')[0].split('-')[0]}
                                          endDate={item.Experience.startDate.split('T')[0].split('-')[0]}
                                          institute={item.Experience.workPlace}
                                          position={item.Experience.position}
                                      />
                                  );
                              })
                            : 'No experience data available'}
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TeacherDetail;
