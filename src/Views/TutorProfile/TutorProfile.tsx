import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import NavigationMenu from '../../components/NavigationMenu';
import BackgroundTemplate from '../../components/BackgroundTemplate';
import TagsContainer from '../../components/TagsContainer';
import { getTeacherSkills } from '../../Redux/Actions/teacherAction';
import PageFooter from '../../components/PageFooter';
import commonImg from '../../Assets/images';
import { useDispatch, useSelector } from 'react-redux';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';

const TempComp: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const teacherSkill = useSelector((state:rootReducerType) => state.teacherReducer.teacherSkill);
    const menu = [
        { link: '/tutor/', name: 'Dashboard' },
        { link: '/tutor/set-class', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    const skillArray = ['Computer Science', 'ICT', 'Maths', 'English', 'Computer Science', 'ICT', 'Maths', 'English'];
    const [skill, setSkill] = useState([]);
    useEffect(() => {
        dispatch(getTeacherSkills());
    }, []);

    useEffect(()=>{
        if(teacherSkill){
               setSkill(teacherSkill);
        }
    },[teacherSkill])
    console.log('in tutor profile' + JSON.stringify(skill));
    // console.log(JSON.localStorage.getItem('auth')+"In profile");
    // const classes=useStyles();
    return (
        <NavigationMenu
            tutorProfileText={true}
            menuList={menu}
            showBurgerNav={'hide'}
            tutorOptions={'show'}
            reverseButtons={'yes'}
            colorWhite={true}
            background={'brown'}
        >
            <div className="profile_container">
                <div className="main_container p-0">
                    <BackgroundTemplate imgSrc={commonImg.ladyProfile} />
                </div>
                <div className="profile_container_1">
                    {/* Reusable Component From Here */}
                    <div className="row">
                        <div className="col-md-6 order-md-1 order-2 p-0">
                            <Typography className="profile_container_1_text1">Limited Availability</Typography>
                        </div>
                        <div className="col-md-6 order-md-2 order-1 p-0">
                            <div className="profile_container_1_subcontainer">
                                <Typography className="profile_container_1_text2">
                                    I am an American author, life coach, and philanthropist. Known for my infomercials,
                                    seminars, and self-help books including the books Unlimited Power and Awaken the
                                    Giant Within. In 2015 and 2016 I was listed on the Worth Magazine Power 100 list.
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div className="row profile_horizontalline"></div>
                    <div className="profile_container_1_2">
                        {/* Reusable from here */}
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="about_tag">
                                    <Typography className="profile_container_1_2_text1">About</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 border-coloumn1 p-0">
                                <div className="row">
                                    <div className="col-6 pr-0">
                                        <div className="profile_container_1_2_subcontainer1">
                                            <div className="top_sm_border_container">
                                                <div className="top_sm_border mr-1"></div>
                                            </div>
                                            <Typography className="subtext1">Experience</Typography>
                                            <div className="profile_container_1_2_subcontainer1_row1">
                                                <Typography className="subtext2">2014-Present</Typography>
                                                <Typography className="subtext3">
                                                    Dubai British School Chemistry Head of Department
                                                </Typography>
                                            </div>
                                            <div className="profile_container_1_2_subcontainer1_row1">
                                                <Typography className="subtext2">2012-2014</Typography>
                                                <Typography className="subtext3">
                                                    Gems Intl. School Science Teacher
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 p-0">
                                        <div className="profile_container_1_2_subcontainer2 left_border">
                                            <div className="top_sm_border_container">
                                                <div className="top_sm_border mr-1"></div>
                                            </div>
                                            <Typography className="subtext1">Education</Typography>
                                            <div className="profile_container_1_2_subcontainer2_row2">
                                                <Typography className="subtext3">
                                                    University of Essex Project Management MSc
                                                </Typography>
                                                <br></br>
                                            </div>
                                            <div className="profile_container_1_2_subcontainer2_row2">
                                                <Typography className="subtext3">
                                                    Westmister University Biomedical Science BSc Honours
                                                </Typography>
                                                <br></br>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="profile_container_1_2_subcontainer3 ">
                                        <div className="col-md-12">
                                            <div className="profile_container_1_2_subcontainer3_row3 left_sm_border">
                                                <div className="small_screen_padding">
                                                    <div className="reusable_skills_container">
                                                        <Typography className="skillTag_text">Skills</Typography>

                                                        <div className="row skills">
                                                            {teacherSkill&&teacherSkill.map((val: string, index: any) => (
                                                                <Typography key={val.id} className="skillset">
                                                                    {val.skillName}
                                                                </Typography>
                                                            ))}
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
                </div>
                <div className="commonWhiteFooter">
                    <PageFooter />
                </div>
            </div>
        </NavigationMenu>
    );
};

// const mapStateToProps = (state: any) => {
//     return {
//         teacherSkill: state.teacherReducer.teacherSkill,
//     };
// };

export default TempComp;
