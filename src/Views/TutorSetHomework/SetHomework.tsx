import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import ReusableBanner from '../../components/ReusableBanner';
import { Typography, TextField } from '@material-ui/core';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';
import ReusableSubjectDesc from '../TutorSetClass/ReusableSubjectDesc'
import NewSkillContainer from '../TutorSetClass/NewSkillContainer';
// import commonImg from '../../Assets/images';
// import MadeBy from '../Footer/MadeBy';

const TutorRecord: React.FunctionComponent = () => {
    const menu = [
        { link: '', name: 'Dashboard' },
        { link: '', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    const skillArray = ['Computer Science', 'ICT', 'Maths', 'English', 'Computer Science', 'ICT', 'Maths', 'English'];
    return (
        <div className="set_homework_container ">
            <NavigationMenu menuList={menu} />
            <div className="set_homework_container_subcontainer1">
                <div className="banner_container">
                    <ReusableBanner />
                </div>
                <div className="row horizontalline"></div>
                <div className="set_homework_container_subcontainer2">
                    <div className="row">
                        <div className="col-md-6 p-0">
                            <Typography className="homeworkText">Due Date</Typography>
                        </div>
                        <div className="col-md-6 homeworkBorder p-0">
                            <div className="homework_date_container">
                                <div className="row">
                                    <div className="col-4">
                                    <TextField className="line-input" label="Date" fullWidth value="9:25AM" />
                                    </div>
                                    <div className="col-3">
                                    <SelectFieldUnderline
                                        label="End Time"
                                        value="9.25am"
                                        className="custom-adornment-input"
                                        options={['9.25am']}
                                        getValue={() => {}}
                                    />
                                    </div>
                                </div>
                                <div className="line_container">
                                <div className="col-md-12 p-0 horizontalline"></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 p-0">
                            <div className="homeSubtext">
                            <Typography className="homeworkText">Assignment</Typography>
                            </div>
                        </div>
                        <div className="col-md-6 p-0 homeworkBorder">
                            <div className="setClass">
                            <ReusableSubjectDesc displayStudentInput={false}/>
                            </div>
                            <div className="col-12 horizontalline"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 p-0">
                            <div className="homeSubtext">
                            <Typography className="homeworkText">Tags</Typography>
                            </div>
                        </div>
                        <div className="col-md-6 p-0 homeworkBorder">
                            <div className="addSkill">
                            <NewSkillContainer skillArray={skillArray}/>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>


                
            </div>
            {/* <div className="profile_footer">
                <div className="footer">
                    <MadeBy />
                </div>
            </div> */}
        </div>
    );
};

export default TutorRecord;
