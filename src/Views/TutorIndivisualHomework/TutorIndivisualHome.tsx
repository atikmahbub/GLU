import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography, makeStyles } from '@material-ui/core';
import ReusableSubmissions from './ReusableSubmissions';
import PlayContainer from '../../components/PlayContainer';
import PlayBanner from '../../components/PlayBanner';
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
    const student1Array = ['Toby Frost ', 'Lugain Rfidah', ' Jack Marshall', 'Mia Adams', 'Jen Holden'];
    const student2Array = ['Ainsley Adams', 'Arthor Smith ', 'Rohan Rai', 'Joshua Lee', 'Shehan Chu'];
    const submissionArray = [
        { name: 'Joshua Lee', date: '07/08/20', time: '9.37am', isSubmitted: 'Submitted', isEdit: 'Edit' },
        { name: 'Mia Adams', date: '06/08/20', time: ' 8.14pm', isSubmitted: 'Submitted', isEdit: 'Mark' },
        { name: 'Toby Frost', date: '06/08/20', time: ' 7.02pm', isSubmitted: 'Incomplete', isEdit: 'Edit' },
        { name: 'Toby Frost', date: '06/08/20', time: ' 7.02pm', isSubmitted: 'Incomplete', isEdit: 'Edit' },
    ];
    const classes = useStyles();
    return (
        <NavigationMenu menuList={menu} background="secondary">
            <div className="tutor_indivisual_homework">
            <div className="container_1">
                <div className="container_1_1">
                    <div className="row">
                        <div className="col-md-6 p-0">
                            <Typography className="leftText">Assignment</Typography>
                        </div>
                        <div className="col-md-6 p-0">
                            <div className="container_1_1_rightcontainer">
                                <div className="row">
                                    <div className="col-md-12">
                                        <Typography className="rightTitle">
                                            Biology.<br></br>How chlorophyll absorbs light
                                        </Typography>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="button_container">
                                            <Typography className="smallText1">Edit</Typography>
                                            <Typography className="smallText2">Cancel</Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container_2">
                <div className="row">
                    <div className="col-md-6 p-0">
                        <Typography className="leftText">
                            Due<br></br> 11/08/20 <br></br>9.30am
                        </Typography>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="rightContainer_2">
                            <Typography className="paraText">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
            <div className="resources_play_container_3">
                <div className="row horizontalline"></div>

                <div className="resources_play_container_3_1">
                    <PlayBanner
                        heading={"Resources"}
                        subHeading1={"Text Books"}
                        subHeading2={"Audio Clips"}
                        subText2={"Extract from AQA Algebra"}
                    />
                    <div className="row">
                        <div className="col-md-6 p-0">
                            <Typography className="leftText leftTextPadding">Students</Typography>
                        </div>
                        <div className="col-md-6 p-0 borderLineMain">
                            <div className="students_container">
                                <div className="row">
                                    <div className="col-6 p-0">
                                        <div className="resources_container_1">
                                            {student1Array.map((val, index) => (
                                                <div key={index} className="col-md-12">
                                                    <Typography className="textArray">{val}</Typography>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-6 p-0 borderLine">
                                        <div className="resources_container_2">
                                            <div className="row">
                                                {student2Array.map((val, index) => (
                                                    <div key={index} className="col-md-12">
                                                        <Typography className="textArray">{val}</Typography>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 straight_line"></div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 p-0">
                            <Typography className="leftText leftTextPadding">Hand In</Typography>
                        </div>
                        <div className="col-md-6 p-0 borderLineMain">
                            <div className="students_container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <Typography className="textArray">Submissions 5/10</Typography>
                                    </div>
                                    <div className="col-md-12">
                                        {submissionArray.map((val, index) => (
                                            <div className="submissions">
                                                <ReusableSubmissions
                                                    date={val.date}
                                                    isSubmitted={val.isSubmitted}
                                                    time={val.time}
                                                    isEdit={val.isEdit}
                                                    name={val.name}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="complete">
                                        <div className="col-md-12">
                                            <div className="complete_button">
                                                <Typography className="complete_text">Complete</Typography>
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

export default TutorRecord;
