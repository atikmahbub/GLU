import React from 'react';
import { Typography } from '@material-ui/core';
import NavigationMenu from '../../components/NavigationMenu';
import BackgroundTemplate from '../../components/BackgroundTemplate';
import TagsContainer from '../../components/TagsContainer'
import MadeBy from '../Footer/MadeBy';
import commonImg from '../../Assets/images';

const TempComp: React.FunctionComponent = () => {
    const menu = [
        { link: '/tutor/', name: 'Dashboard' },
        { link: '/tutor/set-class', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    const skillArray = ['Computer Science', 'ICT', 'Maths', 'English', 'Computer Science', 'ICT', 'Maths', 'English'];
    // const classes=useStyles();
    return (
        <NavigationMenu menuList={menu} colorWhite={true} background="brown">
            <div className="profile_container">
            <div className="main_container p-0">
                <BackgroundTemplate imgSrc={commonImg.ladyProfile} />
            </div>
            <div className="profile_container_1">
                {/* Reusable Component From Here */}
                <div className="row">
                    <div className="col-md-6 order-md-1 order-2 p-0">
                        
                        <Typography className="profile_container_1_text1">Limited Availablitiy</Typography>
                        
                    </div>
                    <div className="col-md-6 order-md-2 order-1 p-0">
                        <div className="profile_container_1_subcontainer">
                            <Typography className="profile_container_1_text2">
                                I am an American author, life coach, and philanthropist. Known for my infomercials,
                                seminars, and self-help books including the books Unlimited Power and Awaken the Giant
                                Within. In 2015 and 2016 I was listed on the Worth Magazine Power 100 list.
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
                                        <div className="top_sm_border mr-1">
                                        
                                        </div>
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
                                        <div className="top_sm_border mr-1">
                                        
                                        </div>
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
                                        <TagsContainer heading={"Skills"} tagsArray={skillArray}/>
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

export default TempComp;
