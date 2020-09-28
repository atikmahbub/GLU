import React, { useEffect, useState } from 'react';
import { Box, Grid, makeStyles, TextareaAutosize } from '@material-ui/core';
import { studentStyle } from './studentStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { schoolDetailSuperAdmin } from '../../../../Redux/Actions/superAdminActions';
import commonImg from '../../../../Assets/images';
import Reusable from './ReusableEdExp';
import CardStatus from './CardStatus';
import GraphContainer from './GraphContainer';
import { v4 as uuidv4 } from 'uuid';

const useStyle = makeStyles(studentStyle as any);

const StudentDetail = () => {
    const classes = useStyle();
    const [schoolData, setSchoolData] = useState({
        schoolName: '',
        profile: '',
        userId: '',
        phoneNumber: '',
        location: '',
        website: '',
        email: '',
        facebookUrl: '',
        twitterUrl: '',
        instagramUrl: '',
        linkedInUrl: '',
        youtubeUrl: '',
        bio: '',
        studentCount: '',
        guardianCount: '',
        teacherCount: '',


    });
    const schoolDetails = useSelector((state: any) => state.superAdminReducer.schoolDetails);
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        if (location?.state?.hasOwnProperty('schoolDetails')) {
            dispatch(schoolDetailSuperAdmin((location as any)?.state?.schoolDetails?.id));
        }
    }, []);
    useEffect(() => {
        if (schoolDetails) {
            console.log(schoolDetails);
            const data = {
                schoolName: schoolDetails.school.schoolName,
                profile: schoolDetails.school.User.profile,
                userId: schoolDetails.school.userId,
                phoneNumber: schoolDetails.school.phoneNumber,
                location: schoolDetails.school.location,
                website: schoolDetails.school.website,
                email: schoolDetails.school.User.email,
                facebookUrl: schoolDetails.school.facebookUrl,
                twitterUrl: schoolDetails.school.twitterUrl,
                instagramUrl: schoolDetails.school.instagramUrl,
                linkedInUrl: schoolDetails.school.linkedInUrl,
                youtubeUrl: schoolDetails.school.youtubeUrl,
                bio: schoolDetails.school.bio,
                studentCount: schoolDetails.studentCount,
                guardianCount: schoolDetails.guardianCount,
                teacherCount: schoolDetails.teacherCount,
            };
            console.log("=====school detail========", data)

            setSchoolData(data);
        }
    }, [schoolDetails]);

    // "data": {
    //     "school": {
    //         "id": 1,
    //         "schoolName": "SJ Education Center",
    //         "userId": 13,
    //         "phoneNumber": "86868758324",
    //         "location": "Delhi",
    //         "website": "https://sjeducation.com",
    //         "facebookUrl": "https://facebook.com/sjeducation",
    //         "twitterUrl": "https://twitter.com/sjeducation",
    //         "instagramUrl": "https://instagram.com/sjeducation",
    //         "linkedInUrl": null,
    //         "youtubeUrl": null,
    //         "bio": "testingsddfsv",
    //         "createdAt": "2020-07-21T08:35:28.862Z",
    //         "updatedAt": "2020-09-25T10:55:36.956Z",
    //         "deletedAt": null,
    //         "User": {
    //             "id": 13,
    //             "username": "upk@123",
    //             "email": "sjeducation@gmail.com",
    //             "password": "$2a$10$r08DsMCkyAUbOuOzQV3XruWhxYIAkE1zIsG27i7E1IXVNXstjFQYq",
    //             "roleId": 3,
    //             "signupType": null,
    //             "firebaseToken": "rtttttttttttt",
    //             "profile": "https://glu-storage.sgp1.digitaloceanspaces.com/13/334388dc6e2e4a7c9a1a51346a004cc1.png",
    //             "isActive": true,
    //             "isEmailVerified": true,
    //             "sendPromotionalOffer": null,
    //             "createdAt": "2020-07-21T08:35:28.390Z",
    //             "updatedAt": "2020-09-26T11:04:52.429Z"
    //         }

    return (
        <Box component="div" className={classes.root}>
         <Grid container>
                <Grid item xs={6}>
                    <div style={{paddingLeft: '30px'}}>
                        {
                            schoolData.profile
                            ?
                            <img src={schoolData.profile} alt="tutor" style={{marginTop: "7rem"}} className={classes.image} />
                            :
                            ""
                        }
                        <div className={classes.detailsText}>School Details</div>
                        <div className={classes.email}>
                            <label htmlFor="email" className={classes.inputLabel}>
                                School Name
                            </label>
                            <input
                                value={schoolData.schoolName}
                                type="text"
                                id="email"
                                className={classes.inputBox}
                                disabled
                            ></input>
                        </div>

                        <div className={classes.email}>
                            <label htmlFor="email" className={classes.inputLabel}>
                                Location
                            </label>
                            <input
                                value={schoolData.location}
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
                                        value={schoolData.phoneNumber}
                                        type="text"
                                        id="mobile"
                                        className={classes.inputBox}
                                        disabled
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <div className={classes.email}>
                            <label htmlFor="email" className={classes.inputLabel}>
                                Website
                            </label>
                            <input
                                value={schoolData.website}
                                type="text"
                                id="email"
                                className={classes.inputBox}
                                disabled
                            ></input>
                        </div>
                        <div className={classes.email}>
                            <label htmlFor="email" className={classes.inputLabel}>
                                Email
                            </label>
                            <input
                                value={schoolData.email}
                                type="text"
                                id="email"
                                className={classes.inputBox}
                                disabled
                            ></input>
                        </div>

                        <div className={classes.email}>
                            <label htmlFor="email" className={classes.inputLabel}>
                                Facbook
                            </label>
                            <input
                                value={schoolData.facebookUrl}
                                type="text"
                                id="email"
                                className={classes.inputBox}
                                disabled
                            ></input>
                        </div>

                        <div className={classes.email}>
                            <label htmlFor="email" className={classes.inputLabel}>
                                Twitter
                            </label>
                            <input
                                value={schoolData.twitterUrl}
                                type="text"
                                id="email"
                                className={classes.inputBox}
                                disabled
                            ></input>
                        </div>

                        <div className={classes.email}>
                            <label htmlFor="email" className={classes.inputLabel}>
                                Instagram
                            </label>
                            <input
                                value={schoolData.instagramUrl}
                                type="text"
                                id="email"
                                className={classes.inputBox}
                                disabled
                            ></input>
                        </div>

                        <div className={classes.email}>
                            <label htmlFor="email" className={classes.inputLabel}>
                                LinkedIn
                            </label>
                            <input
                                value={schoolData.linkedInUrl}
                                type="text"
                                id="email"
                                className={classes.inputBox}
                                disabled
                            ></input>
                        </div>

                        <div className={classes.email}>
                            <label htmlFor="email" className={classes.inputLabel}>
                                Youtube
                            </label>
                            <input
                                value={schoolData.youtubeUrl}
                                type="text"
                                id="email"
                                className={classes.inputBox}
                                disabled
                            ></input>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                {/* <img src={schoolData.profile} alt="tutor" className={classes.image} /> */}
                <div className={classes.detailsText}></div>
                <div className="row row__margin" style={{paddingLeft: "100px"}}>
                    {/* {all_users_count && all_users_count.map((item: any) => ( */}
                        <div key={uuidv4()} style={{margin:"10px",
                            boxShadow:"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"}} className="col-md-9 colum__spacing">
                            <div className="bg-white">
                                <CardStatus heading="Students" total={schoolData.studentCount} />
                            </div>
                        </div>

                        <div key={uuidv4()} style={{margin:"10px",
                            boxShadow:"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"}} className="col-md-9 colum__spacing">
                            <div className="bg-white">
                                <CardStatus heading="Teachers" total={schoolData.teacherCount} />
                            </div>
                        </div>

                        <div key={uuidv4()} style={{margin:"10px",
                            boxShadow:"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"}} className="col-md-9 colum__spacing">
                            <div className="bg-white">
                                <CardStatus heading="Parents" total={schoolData.guardianCount} />
                            </div>
                        </div>

                    {/* ))} */}
                </div>
                </Grid>
            </Grid>
        </Box>
    );
};

export default StudentDetail;
