import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import ResourcesTableComponent from './ResourcesTableComponent';
import { Typography,makeStyles } from '@material-ui/core';
import ReusableSubmissions from './ReusableSubmissions';
import MadeBy from '../Footer/MadeBy';
const useStyles=makeStyles({
    navigationContainer: {
        backgroundColor: '#F7F7F7 !important'
    }
})
const TutorRecord: React.FunctionComponent = () => {
   
    const menu = [
        { link: '/tutor/', name: 'Dashboard' },
        { link: '/tutor/set-class', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    const student1Array = ['Toby Frost ', 'Lugain Rfidah', ' Jack Marshall', 'Mia Adams', 'Jen Holden'];
    const student2Array = ['Ainsley Adams', 'Arthor Smith ', 'Rohan Rai', 'Joshua Lee', 'Shehan Chu'];
    const submissionArray = [{ name: 'Joshua Lee', date : '07/08/20', time : '9.37am', isSubmitted: 'Submitted', isEdit: 'Edit' },
    { name: 'Mia Adams', date : '06/08/20', time : ' 8.14pm', isSubmitted: 'Submitted', isEdit: 'Mark' },
    { name: 'Toby Frost', date : '06/08/20', time : ' 7.02pm', isSubmitted: 'Incomplete', isEdit: 'Edit' },
    { name: 'Toby Frost', date : '06/08/20', time : ' 7.02pm', isSubmitted: 'Incomplete', isEdit: 'Edit' }];
    const classes=useStyles();
    return (
        <div className="tutor_indivisual_homework">
            <NavigationMenu menuList={menu} containerClassName={classes.navigationContainer} />
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
            <div className="container_3">
                <div className="row horizontalline"></div>
                <div className="container_3_1">
                    <div className="row">
                        <div className="col-md-6 p-0">
                            <Typography className="leftText">Resources</Typography>
                        </div>
                        <div className="col-md-6 p-0 borderLineMain">
                            <div className="resources_container">
                                <div className="row">
                                    <div className="col-6 p-0">
                                        <div className="resources_container_1">
                                            <div className="col-md-12">
                                                <Typography className="resources_text">Text Books</Typography>
                                            </div>
                                            <ResourcesTableComponent />
                                            <ResourcesTableComponent />
                                        </div>
                                    </div>
                                    <div className="col-6 p-0 borderLine">
                                        <div className="resources_container_2">
                                            <div className="col-md-12 p-0">
                                                <Typography className="resources_text">Audio Clips</Typography>
                                            </div>
                                            <div className="play_section">
                                                <div className="col-md-12 p-0">
                                                    <Typography className="resources_text">
                                                        Extract from AQA Algebra
                                                    </Typography>
                                                </div>
                                                <div className="col-md-12 p-0">
                                                    <div className="play_container">
                                                        <div className="playBar">
                                                            <div className="playProgress"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 p-0">
                                                    <div className="play_text">
                                                        <div>
                                                            <svg
                                                                width="1.5rem"
                                                                height="2rem"
                                                                viewBox="0 0 16 16"
                                                                className="bi bi-play-fill"
                                                                fill="currentColor"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                                            </svg>
                                                            <span className="">Play</span>
                                                        </div>
                                                        <div>
                                                            <Typography className="">/33</Typography>
                                                        </div>
                                                    </div>
                                                </div>
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
                                            {student2Array.map((val, index) => (
                                                <div key={index} className="col-md-12">
                                                    <Typography className="textArray">{val}</Typography>
                                                </div>
                                            ))}
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
                                       
                                            {submissionArray.map((val,index)=>(
                                                 <div className="submissions">
                                                <ReusableSubmissions date={val.date} isSubmitted={val.isSubmitted} time={val.time} isEdit={val.isEdit} name={val.name}  />
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
    );
};

export default TutorRecord;
