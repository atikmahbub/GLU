import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography, TextField, makeStyles } from '@material-ui/core';
import ReusableSubjectDesc from '../TutorSetClass/ReusableSubjectDesc';
import ReusableCoverImage from '../TutorSetClass/ReusableCoverImage';
import NewSkillContainer from '../TutorSetClass/NewSkillContainer';
import VideoLectureContainer2 from '../../components/VideoLectureContainer2';
import commonImg from '../../Assets/images';
import PageFooter from '../../components/PageFooter'
import MadeBy from '../Footer/MadeBy';
const useStyles = makeStyles({
    navigationContainer: {
        backgroundColor: '#F7F7F7 !important',
    },
});
const TutorRecord: React.FunctionComponent = () => {
    const menu = [
        { link: '/tutor/', name: 'Dashboard' },
        { link: '/tutor/set-class', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    const skillArray = ['Computer Science', 'ICT', 'Maths', 'English', 'Computer Science', 'ICT', 'Maths', 'English'];
    const classes = useStyles();
    return (
        <NavigationMenu menuList={menu} containerClassName={classes.navigationContainer}>
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
                                <div className="record_skill_container">
                                    <NewSkillContainer skillArray={skillArray} />
                                    <div className=" record_horizontalline"></div>
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
                <div className="commonWhiteFooter">
                <PageFooter/>
            </div>
            </div>
        </NavigationMenu>
    );
};

export default TutorRecord;
