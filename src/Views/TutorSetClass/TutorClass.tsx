import React, { useState } from 'react';
import { Typography, TextField } from '@material-ui/core';
import NavigationMenu from '../../components/NavigationMenu';
import ReusableSubjectDesc from './ReusableSubjectDesc';
import commonImg from '../../Assets/images';
import ReusableDateTime from './ReusableDateTime';
import MadeBy from '../Footer/MadeBy';
const TutorClass: React.FunctionComponent<props> = () => {
    const menu = [
        { link: '', name: 'Dashboard' },
        { link: '', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    const hiddenFileInput = React.useRef(null);

    const handleClick = (event) => {
        hiddenFileInput.current.click();
    };
    const handleChange = (event) => {
        const fileUploaded = event.target.files[0];
        // props.handleFile(fileUploaded);
    };
    const skillArray = ['Computer Science', 'ICT', 'Maths', 'English', 'Computer Science', 'ICT', 'Maths', 'English'];
    return (
        <div className="tutor_class_container">
            <NavigationMenu menuList={menu} />
            <div className="tutor_class_subcontainer">
                <div className="row">
                    <div className="col-md-6 p-0">
                        <Typography className="text1">Set Class</Typography>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="tutor_class_subcontainer_col1">
                            <Typography className="text2">Create and publish an upcoming class.</Typography>
                        </div>
                    </div>
                </div>
                <div className="tutor_class_subcontainer2">
                    <div className="row horizontalline"></div>
                    <div className="reusableDate">
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="date_time">
                                    <Typography className="text1">Date and Time</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 border_dateTime">
                                <div className="setDateTime">
                                    <ReusableDateTime />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="class_time">
                                    <Typography className="text1">Class</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 border_dateTime">
                                <div className="setClass">
                                    <ReusableSubjectDesc
                                        clickHandler={handleClick}
                                        chengeHandler={handleChange}
                                        ref={hiddenFileInput}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="class_time">
                                    <Typography className="text1">Tags</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 border_dateTime">
                                <div className="addSkill">
                                    <div className="row">
                                        <div className="col-md-12 p-0">
                                            <Typography className="text">Add New</Typography>
                                        </div>
                                        <div className="col-md-12 p-0">
                                            <TextField className="line-input" style={{ width: '85%' }} />
                                        </div>

                                        <div className="row skills">
                                            {skillArray.map((val, index) => (
                                                <Typography key={index} className="skillset">
                                                    {val}
                                                </Typography>
                                            ))}
                                        </div>
                                        <div className="col-12 p-0  horizontalline"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="class_time">
                                    <Typography className="text1">Cover Image</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 border_dateTime">
                                <div className="addCoverImg">
                                    <div className="row">
                                        <div className="col-lg-5 p-0 ">
                                            <img
                                                className="img-fluid"
                                                src={commonImg.tutorDashboard}
                                                width="301px"
                                                height="233px"
                                                alt=""
                                            />
                                        </div>
                                        <div className="col-lg-7 p-0 ">
                                            <div className="upload_container">
                                                <div className="upload_image_container">
                                                    <div className="col-md-12 p-0">
                                                        <Typography className="textCover">
                                                            Add A Cover Image To Your Class
                                                        </Typography>
                                                    </div>
                                                    <div className="upload_component">
                                                        <div className="upload_button" onClick={handleClick}>
                                                            <Typography className="text">Upload</Typography>
                                                        </div>
                                                        <div>
                                                            <Typography className="subtext">
                                                                Max size (500mb)
                                                            </Typography>
                                                        </div>
                                                        <input
                                                            type="file"
                                                            ref={hiddenFileInput}
                                                            onChange={handleChange}
                                                            style={{ display: 'none' }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="publish_container">
                                            <div className="publish_button">
                                                <Typography className="text">Publish</Typography>
                                            </div>
                                            <div className="cancel_button">
                                                <Typography>Cancel</Typography>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile_footer">
                <div className="footer">
                    <MadeBy />
                </div>
            </div>
        </div>
    );
};

export default TutorClass;
