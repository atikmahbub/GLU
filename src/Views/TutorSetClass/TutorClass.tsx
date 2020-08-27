import React from 'react';
import { Typography, TextField } from '@material-ui/core';
import NavigationMenu from '../../components/NavigationMenu';
import ReusableSubjectDesc from './ReusableSubjectDesc';
import commonImg from '../../Assets/images';
import ReusableDateTime from './ReusableDateTime';
import ReusableCoverImage from './ReusableCoverImage';
import MadeBy from '../Footer/MadeBy';
const TutorClass: React.FunctionComponent = () => {
    const menu = [
        { link: '', name: 'Dashboard' },
        { link: '', name: 'Set Class' },
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
                                                        <Typography className="text_list">Geography</Typography>
                                                        <Typography className="text_list">9.00am-10:30am</Typography>
                                                        </li>
                                                        <li>
                                                        <Typography className="text_list">Art</Typography>
                                                        <Typography className="text_list">11.00am-12:30am</Typography>
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
                                <div className="class_time">
                                    <Typography className="text1">Class</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 border_dateTime">
                                <div className="setClass">
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
