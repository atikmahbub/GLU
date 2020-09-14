import React from 'react';
import { Typography, TextField } from '@material-ui/core';
import NavigationMenu from '../../components/NavigationMenu';
import ReusableSubjectDesc from './ReusableSubjectDesc';
import commonImg from '../../Assets/images';
import ReusableDateTime from './ReusableDateTime';
import ReusableCoverImage from './ReusableCoverImage';
import ReusableBanner from '../../components/ReusableBanner';
import MadeBy from '../Footer/MadeBy';
import NewSkillContainer from './NewSkillContainer';
import PageFooter from '../../components/PageFooter'
const TutorClass: React.FunctionComponent = () => {
    const menu = [
        { link: '/tutor/', name: 'Dashboard' },
        { link: '/tutor/set-class', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    // const hiddenFileInput = React.useRef(null);

    // const handleClick = (event) => {
    //     hiddenFileInput.current.click();
    // };
    // const handleChange = (event) => {
    //     const fileUploaded = event.target.files[0];
    //     // props.handleFile(fileUploaded);
    // };
    const skillArray = ['Computer Science', 'ICT', 'Maths', 'English', 'Computer Science', 'ICT', 'Maths', 'English'];

    return (
        
            
                <NavigationMenu menuList={menu}>
                <div className="tutor_class_container">
            
            <div className="tutor_class_subcontainer">
                <ReusableBanner heading={"Set Class"} description={"Create and publish a new class ."} />
                <div className="tutor_class_subcontainer2">
                    <div className="row horizontalline"></div>
                    <div className="reusableDate">
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="date_time">
                                    <div className="col-md-12 p-0">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="print_dateTime">
                                                    <Typography className="text1">Date and Time</Typography>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="print_timeline">
                                                    <ul>
                                                    
                                                        <li>
                                                        
                                                            <Typography className="text_list"><span>Geography</span></Typography>
                                                            <Typography className="text_list">
                                                                9.00am-10:30am
                                                            </Typography>
                                                        </li>
                                                        <li>
                                                            <Typography className="text_list">Art</Typography>
                                                            <Typography className="text_list">
                                                                11.00am-12:30am
                                                            </Typography>
                                                        </li>
                                                        <li>
                                                            <Typography className="text_list">Maths</Typography>
                                                            <Typography className="text_list">1.00pm-2.30pm</Typography>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                <div className="class_time ">
                                    <Typography className="text1">Class</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 border_dateTime">
                                <div className="setClass">
                                    <ReusableSubjectDesc
                                        displayStudentInput={true}
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
                                <div className="outerAddSkill">
                                   
                                        <NewSkillContainer skillArray={skillArray}/>
                                        <div className="  horizontalline"></div>
                                   
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
                                <div className="addCoverImg ">
                                    <ReusableCoverImage imgSrc={commonImg.tutorDashboard} />
                                </div>
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

export default TutorClass;