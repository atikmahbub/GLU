import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography, TextField } from '@material-ui/core';
import ReusableSubjectDesc from '../TutorSetClass/ReusableSubjectDesc';
import ReusableCoverImage from '../TutorSetClass/ReusableCoverImage';
import VideoLectureContainer2 from '../../components/VideoLectureContainer2';
import commonImg from '../../Assets/images';
import MadeBy from '../Footer/MadeBy';

const TutorRecord: React.FunctionComponent = () => {
    const menu = [
        { link: '/tutor/', name: 'Dashboard' },
        { link: '/tutor/set-class', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    const skillArray = ['Computer Science', 'ICT', 'Maths', 'English', 'Computer Science', 'ICT', 'Maths', 'English'];
    return (
        <NavigationMenu menuList={menu} background="secondary">
            <div className="tutor_record_container">
                <div className="tutor_record_container_1">
                    <div className="tutor_record_container_1_1">
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <Typography className="text">Record Class</Typography>
                            </div>
                            <div className="col-md-6 p-0">
                                <div className="tutor_record_container_1_1_subcontainer">
                                    <div className="row">
                                        <div className="col-md-12 p-0">
                                            <Typography className="mainText">
                                                Create and publish a new class.
                                            </Typography>
                                        </div>
                                        <div className="recordButton">
                                            <Typography className="subText">Record</Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <VideoLectureContainer2 />
                    </div>
                </div>
                <div className="tutor_record_container_2">
                    <div className="row horizontalline"></div>
                    <div className="reusableDate">
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="record_class_title">
                                    <Typography className="text">Class</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 border_dateTime">
                                <div className="recordClass">
                                    <ReusableSubjectDesc
                                    // clickHandler={handleClick}
                                    // chengeHandler={handleChange}
                                    // ref={hiddenFileInput}
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
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-md-12 p-0">
                                                <Typography className="textCover">Add New</Typography>
                                            </div>
                                            <div className="col-md-12 p-0">
                                                <TextField className="line-input" style={{ width: '85%' }} />
                                            </div>
                                            <div className="col-md-12">
                                                <div className="skill_container">
                                                    <div className="row choose_weeks">
                                                        {skillArray.map((val, index) => (
                                                            <Typography key={index} className="boxes">
                                                                {val}
                                                            </Typography>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 p-0  horizontalline"></div>
                                        </div>
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
                                    <ReusableCoverImage imgSrc={commonImg.tutorDashboard} />
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
        </NavigationMenu>
    );
};

export default TutorRecord;
