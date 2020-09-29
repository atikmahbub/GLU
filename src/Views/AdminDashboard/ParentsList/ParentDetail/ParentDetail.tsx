import React, { useEffect, useState } from 'react';
import { Box, Grid, makeStyles, TextareaAutosize } from '@material-ui/core';
import { studentStyle } from './studentStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { parentDetailSuperAdmin } from '../../../../Redux/Actions/superAdminActions';
import commonImg from '../../../../Assets/images';
import Reusable from './ReusableEdExp';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { studentDetailSuperAdmin } from '../../../../Redux/Actions/superAdminActions';
import { useHistory } from 'react-router-dom';



const useStyle = makeStyles(studentStyle as any);

const StudentDetail = () => {
    const classes = useStyle();
    const [childrenMenuItemClicked, setMenuItemClicked] = React.useState(false);
    const [childrenMenuItem, setChildrenMenuItem] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const routes = useHistory();
    const [studentData, setStudentData] = useState({
        firstName: '',
        lastName: '',
        bio: '',
        email: '',
        phoneNumber: '',
        city: '',
        education: '',
        image: '',
    });

    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
    const [parentData, setParentData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        city: '',
    });
    const studentDetailsParent = useSelector((state: any) => state.superAdminReducer.studentDetailsParent);
    const studentDetails = useSelector((state: any) => state.superAdminReducer.studentDetails);

    const location = useLocation();
    const dispatch = useDispatch();
    // alert(JSON.stringify(studentData));
    const handleChange = (event:any) => {
        // alert(event.target.value)
    //   console.log("========= the menu =======", event.target.value)
        dispatch(studentDetailSuperAdmin(event.target.value));
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
                image: studentDetails.User.profile,
            };
            setStudentData(data);
            // routes.push({
            //     pathname: '/admin/student/detail',
            //     state: {
            //         studentDetails: data,
            //     },
            // });
        }

        
         setMenuItemClicked(true);
         setChildrenMenuItem(event.target.value);
    };
  
    // alert(JSON.stringify(location))
    useEffect(() => {
        if (location?.state?.hasOwnProperty('studentDetailsParent')) {
            dispatch(parentDetailSuperAdmin((location as any)?.state?.studentDetailsParent?.guardianId));
        }
    }, []);
    useEffect(() => {
        if (studentDetailsParent) {
            console.log(studentDetailsParent);
            const data = {
                firstName: studentDetailsParent.firstName,
                lastName: studentDetailsParent.lastName,
                email: studentDetailsParent?.User?.email,
                phoneNumber: studentDetailsParent.phoneNumber,
                city: studentDetailsParent.location,
            };
            setParentData(data);
        }
    }, [studentDetailsParent]);

    return (
    <>
        <Box component="div" className={classes.root}>
            <Grid container spacing={8}>
                <Grid item xs={6}>
                    <h1>Parent Details</h1>
                    <div>
                        {/* <img src={commonImg.scaffgirl} alt="tutor" className={classes.image} /> */}
                        {/* <div className={classes.detailsText}>Student Details</div> */}
                        <div className={classes.name}>
                            <div className={classes.firstName}>
                                <label htmlFor="firstName" className={classes.inputLabel}>
                                    First Name
                                </label>
                                <input
                                    value={parentData.firstName}
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
                                    value={parentData.lastName}
                                    type="text"
                                    id="lastName"
                                    className={classes.inputBox}
                                    disabled
                                ></input>
                            </div>
                        </div>

                        <div className={classes.location}>
                            <label htmlFor="location" className={classes.inputLabel}>
                                Location
                            </label>
                            <input
                                value={parentData.city ? parentData.city : 'N/A'}
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

                        <div className={classes.email}>
                            <label htmlFor="email" className={classes.inputLabel}>
                                Email
                            </label>
                            <input
                                value={parentData.email}
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
                                        value={parentData.phoneNumber}
                                        type="text"
                                        id="mobile"
                                        className={classes.inputBox}
                                        disabled
                                    ></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Box>

<Box component="div" className={classes.root} style={{marginTop: "30px"}}>
<Grid container spacing={8}>
    <Grid item xs={6}>
        <h1>Student Details</h1>
        <div>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Select Child</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={childrenMenuItem}
          onChange={handleChange}
        >
          {
             location.state.studentDetailsParent.children.length > 0 && location.state.studentDetailsParent.children.map((children:any) => (
                <MenuItem value={children.studentId}>{children.studentId}</MenuItem>

              ))
          }
          {/* <MenuItem value={10}>Child 1</MenuItem>
          <MenuItem value={20}>Child 2</MenuItem>
          <MenuItem value={30}>Child 3</MenuItem> */}
        </Select>
      </FormControl>
        </div>
    </Grid>
    {
      childrenMenuItemClicked
      ?  
  
    // <Box component="div" className={classes.root}>
            <Grid container spacing={8} style={{padding: "40px"}}>
                <Grid item xs={6}>
                    <h1>Student</h1>
                    <div>
                        <img
                            src={
                                studentDetails && studentDetails.User.profile
                                    ? studentDetails.User.profile
                                    : commonImg.scaffgirl
                            }
                            alt="tutor"
                            className={classes.image}
                        />
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
        // </Box>
        :
        ""
          }
</Grid>
</Box>
</>
    );
};

export default StudentDetail;
