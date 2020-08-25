import React from 'react';
import { Typography } from '@material-ui/core';
import NavigationMenu from '../../components/NavigationMenu';
import commonImg from '../../Assets/images';
import BackgroundTemplate from '../../components/BackgroundTemplate';
import MadeBy from '../Footer/MadeBy';
// interface props{
//     mainHeading:string,
//     subHeading1:string,
//     subHeading2:string
// }
const TempComp: React.FunctionComponent<props> = () => {
    const menu = [
        { link: '', name: 'Dashboard' },
        { link: '', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    return (
        <div className="profile_container">
            <NavigationMenu menuList={menu} />
            <div className="main_container p-0">
                <BackgroundTemplate imgSrc={commonImg.ladyProfile} />
            </div>
            <div className="profile_container_1">
                {/* Reusable Component From Here */}
                <div className="row">
                    <div className="col-md-6 p-0">
                        <Typography className="profile_container_1_text1">Limited Availablitiy</Typography>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="profile_container_1_subcontainer">
                            <Typography className="profile_container_1_text2">
                                I am an American author, life coach, and philanthropist. Known for my infomercials,
                                seminars, and self-help books including the books Unlimited Power and Awaken the Giant
                                Within. In 2015 and 2016 I was listed on the Worth Magazine Power 100 list.
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="row horizontalline"></div>
                <div className="profile_container_1_2">
                    {/* Reusable from here */}
                    <div className="row">
                        <div className="col-md-6 p-0">
                            <Typography className="profile_container_1_2_text1">About</Typography>
                        </div>
                        <div className="col-md-6 border-coloumn1 p-0">
                            <div className="row">
                                <div className="col-6 pr-0">
                                    <div className="profile_container_1_2_subcontainer1 ">
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
                                    <div className="profile_container_1_2_subcontainer2 border-coloumn2">
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
                                <div className="profile_container_1_2_subcontainer3">
                                    <div className="col-md-12">
                                        <div className="profile_container_1_2_subcontainer3_row3">
                                            <Typography className="subtext4">Skills</Typography>

                                            <div className="row skills">
                                                <div className="skillset">Maths</div>
                                                <Typography className="skillset">Computer Science</Typography>
                                                <div className="skillset">English</div>
                                                <div className="skillset">ICT</div>
                                                <div className="skillset">Languages</div>
                                                <div className="skillset">Maths</div>
                                                <div className="skillset">Computer Science</div>
                                                <div className="skillset">English</div>
                                                <div className="skillset">ICT</div>
                                                <div className="skillset">Languages</div>
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

export default TempComp;
