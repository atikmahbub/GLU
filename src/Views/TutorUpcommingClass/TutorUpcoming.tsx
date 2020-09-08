import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import NavigationMenu from '../../components/NavigationMenu';
import commonImg from '../../Assets/images';
import TagsContainer from '../../components/TagsContainer';
import BigBanner from '../../components/BigBanner';
import MadeBy from '../Footer/MadeBy';
import PlayBanner from '../../components/PlayBanner';
import ActivityBanner from '../../components/ActivityBanner'
const useStyles = makeStyles({
    navigationContainer: {
        backgroundColor: '#F7F7F7 !important',
    },
});
const TutorClass: React.FunctionComponent = () => {
    const menu = [
        { link: '/tutor/', name: 'Dashboard' },
        { link: '/tutor/set-class', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    const student1Array = ['Toby Frost ', 'Lugain Rfidah', ' Jack Marshall', 'Mia Adams', 'Jen Holden'];
    const student2Array = ['Ainsley Adams', 'Arthor Smith ', 'Rohan Rai', 'Joshua Lee', 'Shehan Chu'];
    const ArrayTags = ['Computer Science', 'ICT', 'Maths', 'English', 'Computer Science', 'ICT', 'Maths', 'English'];
    const resourcesArray = [
        {
            title: 'Geography AQA',
            subtitle: 'Download',
        },
        { title: 'Chemistry', subtitle: 'Download' },
    ];
    const classes = useStyles();
    return (
        <NavigationMenu menuList={menu} containerClassName={classes.navigationContainer}>
            <div className="tutor_upcoming_class_container">
            <ActivityBanner heading={"Upcoming Classes"} image={commonImg.tutorDashboard} date={"29/07/20"} startTime={"9am"} endTime={"10.15am"} activityDesc={"Geography. Igneous, Sedimentary, and Metamorphic rocks"} button1={"Edit"} button2={"Delete"} />
                {/* <div className="tutor_upcoming_class_subcontainer_1">
                    <div className="container-fluid">
                        <div className="tutor_upcoming_class_subcontainer_1_1">
                            <div className="row">
                                <div className="col-md-6 p-0">
                                    <Typography className="upcomingText">Upcoming Classes</Typography>
                                </div>
                                <div className="col-md-6 p-0">
                                    <div className="tutor_upcoming_image_container">
                                        <div className="row">
                                            <div className="col-12">
                                                <img
                                                    className="img img-fluid"
                                                    src={commonImg.tutorDashboard}
                                                    width="350px"
                                                    height="250px"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tutor_upcoming_class_subcontainer_1_2">
                            <div className="row">
                                <div className="col-md-6 p-0">
                                    <Typography className="upcomingText">29/07/20 </Typography>
                                    <Typography className="upcomingText">9am-</Typography>
                                    <Typography className="upcomingText">10.15am</Typography>
                                </div>
                                <div className="col-md-6 p-0">
                                    <div className="tutor_upcoming_bigText_container">
                                        <div className="row">
                                            <div className="col-12">
                                                <Typography className="upcomingBigText">
                                                    Geography. Igneous, Sedimentary, and Metamorphic rocks
                                                </Typography>
                                            </div>

                                            <div className="col-12">
                                                <div className="tutor_upcoming_editDelete_container">
                                                    <Typography className="edit_text">Edit</Typography>
                                                    <Typography className="delete_text">Delete</Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="tutor_upcoming_class_subcontainer_2">
                    <BigBanner
                        heading={'Classs Today'}
                        description={
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua et dolore magna aliquyam erat.'
                        }
                    />
                </div>
                <div className="tutor_upcoming_class_subcontainer_3">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 p-0"></div>
                            <div className="col-md-6 p-0 left_border">
                                <div className="tutor_upcoming_tags_container">
                                    <TagsContainer heading={'Tags'} tagsArray={ArrayTags} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tutor_upcoming_class_subcontainer_4">
                    <div className="horizontalline_new col-12"></div>
                    <div className="container-fluid">
                        <div className="tutor_upcoming_playbanner">
                            <PlayBanner
                                heading={'Resources'}
                                subHeading1={'Text Books'}
                                subHeading2={'Audio Clips'}
                                subText2={'Reading from Sedimentary Pertology'}
                                isDivider={true}
                                resourcesArray={resourcesArray}
                            />
                        </div>

                        <div className="student_list_reusable">
                            <div className="row">
                                <div className="col-md-6 p-0">
                                    <div className="student_number">
                                        <Typography className="student_number_text">8/20 Spaces</Typography>
                                    </div>
                                </div>
                                <div className="col-md-6 p-0 left_border">
                                    <div className="student_list_reusable_display">
                                        <div className="row">
                                            <div className="col-6 p-0 ">
                                                {student1Array.map((val, index) => (
                                                    <div className="col-12">
                                                        <Typography key={index} className="student_name_text">
                                                            {val}
                                                        </Typography>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="col-6 p-0 students_left_border">
                                                <div className="right_container">
                                                    <div className="row">
                                                        <div className="col-12 p-0">
                                                            {student2Array.map((val, index) => (
                                                                <div className="col-12">
                                                                    <Typography
                                                                        key={index}
                                                                        className="student_name_text"
                                                                    >
                                                                        {val}
                                                                    </Typography>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="invite_student_button">
                                            <div className="row">
                                                <div className="">
                                                    <div className="invite_button">
                                                        <Typography className="invite_text">Invite</Typography>
                                                    </div>
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
        </NavigationMenu>
    );
};

export default TutorClass;
