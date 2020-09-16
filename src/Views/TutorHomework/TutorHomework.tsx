import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import List from './HomeworkStatusList';
import ReusableSmallButton from '../../components/ReusableSmallButton'
import NavigationMenu from '../../components/NavigationMenu';
import PageFooter from '../../components/PageFooter'
const TutorHomework: React.FunctionComponent = () => {
    const menu = [
        { link: '/tutor/', name: 'Dashboard' },
        { link: '/tutor/set-class', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    const ListArray = [
        {
            submissions: '25/30',
            date: '11/08/20',
            subject: 'Maths',
            subjectDesc: 'Advanced linear alegbra',
            desc:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
            isSubmitted:false,
            DueOrComplete:"Due"
        },
      
        {
            submissions: '12/30',
            date: '3/08/20',
            subject: 'Biology',
            subjectDesc: 'How chlorophyll absorbs light',
            desc:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
                isSubmitted:true,
                DueOrComplete:"Due"
            },
    ];
    const List2Array = [
        {
            submissions: '25/30',
            date: '11/08/20',
            subject: 'Maths',
            subjectDesc: 'Advanced linear alegbra',
            desc:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
            isSubmitted:false,
            DueOrComplete:"Complete"
        },
      
        {
            submissions: '12/30',
            date: '3/08/20',
            subject: 'Biology',
            subjectDesc: 'How chlorophyll absorbs light',
            desc:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
                isSubmitted:false,
                DueOrComplete:"Complete"
            },
    ];
    return (
        <>
            <NavigationMenu menuList={menu}>
                <div className="tutor_homework_main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="tutor_homework_header_container">
                                    <div className="tutor_homework_main_header">
                                        <div className="header_content_1">
                                            <Typography className="tutor_homework_main_text">Homework</Typography>
                                        </div>
                                        <div className="header_content_2">
                                            <Typography className="tutor_homework_main_text">Active</Typography>
                                        </div>
                                    </div>
                                    <div className="tutor_homework_number_count">
                                        <div className="submissions_count">
                                            <Typography className="tutor_homework_main_text">53</Typography>
                                            <Typography className="tutor_homewwork_main_xstext">Submmisions</Typography>
                                        </div>
                                        <div className="missing_count">
                                        <Typography className="tutor_homework_main_text">14</Typography>
                                            <Typography className="tutor_homewwork_main_xstext">Missing</Typography>
                                        </div>
                                    </div>
                                    <div className="create_button">
                                        <ReusableSmallButton linkurl={"/tutor/set-homework"} heading={"Create"}/>
                                    </div>
                    
                                </div>
                            </div>
                            <div className="col-md-6 p-0 left_border">
                                <div className="tutor_homework_main_container">
                                    <div className="tutor_homework_main_header">
                                        <Typography className="tutor_homework_main_lgtext">
                                            Total Assignments<br></br>15
                                        </Typography>
                                    </div>
                                    <div className="tutor_homework_main_list">
                                        {ListArray.map((val, index) => (
                                            <>
                                                <List
                                                    subject={val.subject}
                                                    submissions={val.submissions}
                                                    date={val.date}
                                                    desc={val.desc}
                                                    subjectDesc={val.subjectDesc}
                                                    linkurl={'/tutor/individual-homework'}
                                                    isSubmitted={val.isSubmitted}
                                                    DueOrComplete={val.DueOrComplete}
                                                />
                                                <div className="homework_horizontalline"></div>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="previous_homework">
                                            <Typography className="tutor_homework_main_text">Previous</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 left_border">
                                <div className="tutor_homework_main_container">
                            
                                    <div className="tutor_homework_main_list">
                                        {List2Array.map((val, index) => (
                                            <>
                                                <List
                                                    subject={val.subject}
                                                    submissions={val.submissions}
                                                    date={val.date}
                                                    desc={val.desc}
                                                    subjectDesc={val.subjectDesc}
                                                    isSubmitted={val.isSubmitted}
                                                    DueOrComplete={val.DueOrComplete}
                                                />
                                                
                                                {index!==ListArray.length-1&&<div className="homework_horizontalline"></div>}
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="commonFooter">
                        <PageFooter padding={false}/>
                    </div>
                </div>
            </NavigationMenu>
        </>
    );
};

export default TutorHomework;
