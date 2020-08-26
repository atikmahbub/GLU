import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography, TextField } from '@material-ui/core';
import ReusableSubjectDesc from '../TutorSetClass/ReusableSubjectDesc';
import ReusableCoverImage from '../TutorSetClass/ReusableCoverImage';
import commonImg from '../../Assets/images';
import MadeBy from '../Footer/MadeBy';
const TutorRecord: React.FunctionComponent = () => {
    const menu = [
        { link: '', name: 'Dashboard' },
        { link: '', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    const skillArray = ['Computer Science', 'ICT', 'Maths', 'English', 'Computer Science', 'ICT', 'Maths', 'English'];
    return (
        <div className="tutor_record_container">
            <NavigationMenu menuList={menu} />
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
                                        <Typography className="mainText">Create and publish a new class.</Typography>
                                    </div>
                                    <div className="recordButton">
                                        <Typography className="subText">Record</Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                <div className="row">
                                    <div className="col-md-12 p-0">
                                        <Typography className="text">Add New</Typography>
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



                    <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="class_time">
                                    <Typography className="text1">Cover Image</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 border_dateTime">
                                <div className="addCoverImg">
                                    <ReusableCoverImage imgSrc={commonImg.tutorDashboard}/>
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

export default TutorRecord;
