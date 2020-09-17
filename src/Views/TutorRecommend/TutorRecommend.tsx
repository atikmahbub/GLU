import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography,TextField } from '@material-ui/core';
import ReusableBanner from '../../components/ReusableBanner';
import NewSkillContainer from '../TutorSetClass/NewSkillContainer';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';
import AddCancelButton from '../TutorAvailablity/AddCancelButton'
import PageFooter from '../../components/PageFooter';
import MadeBy from '../Footer/MadeBy';
const TutorRecommend: React.FunctionComponent = () => {
    const menu = [
        { link: '/tutor/', name: 'Dashboard' },
        { link: '/tutor/set-class', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    const skillArray = ['Computer Science', 'ICT', 'Maths', 'English', 'Computer Science', 'ICT', 'Maths', 'English'];
    return (
        <NavigationMenu menuList={menu} showBurgerNav={'hide'} tutorOptions={"show"} reverseButtons={'yes'}>
        <div className="tutor_recommend_container">
        

        <div className="tutor_recommend_subcontainer">
            <div className="tutor_recommend_subcontainer_banner">
                <ReusableBanner heading={'Recommend'} description={'Suggest classes to improve results.'} />
            </div>
            <div className="row horizontalline"></div>
            <div className="tutor_recommend_subcontainer_inputfeild">
                <div className="row">
                    <div className="col-md-6 p-0">
                        <Typography className="recommendText">Students</Typography>
                    </div>
                    <div className="col-md-6 p-0 recommendleftBorder ">
                        <NewSkillContainer skillArray={skillArray} />
                        <div className="recommendContainer">
                            <div className="horizontalline col-12"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 p-0">
                        <div className="recommendClass_container">
                            <Typography className="recommendText">Classes</Typography>
                        </div>
                    </div>
                    <div className="col-md-6 p-0 recommendleftBorder ">
                        <div className="recommendSubject_container">
                            <div className="row">
                                <div className="col-6">
                                    <SelectFieldUnderline
                                        label="Subject"
                                        value="English"
                                        className="select-large"
                                        options={['English']}
                                        getValue={() => {}}
                                    />
                                </div>
                                <div className="col-6">
                                <TextField className="line-input-large" label="Class" fullWidth />
                                </div>
                            </div>
                            <div className="recommendCancel_container">
                            <AddCancelButton firstButton={"Add"} secondButton={"Cancel"}/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="commonFooter">
                <PageFooter/>
            </div>
    </div>
    </NavigationMenu>
    );
};

export default TutorRecommend;
