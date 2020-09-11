import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import List from './HomeworkStatusList'
import NavigationMenu from '../../components/NavigationMenu';
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
            Date: '11/08/20',
            subject: 'Maths',
            subjectDesc:'Advanced linear alegbra',
            desc:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
        },
        {
           
            submissions: '12/30',
            date: '3/08/20',
            subject: 'Biology',
            subjectDesc:'How chlorophyll absorbs light',
            desc:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
        },
        {
            
            submissions: '12/30',
            date: '3/08/20',
            subject: 'Biology',
            subjectDesc:'How chlorophyll absorbs light',
            desc:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
        },
        {
            
            submissions: '12/30',
            date: '3/08/20',
            subject: 'Biology',
            subjectDesc:'How chlorophyll absorbs light',
            desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
        },
    ];
    return (
        <>
            <NavigationMenu menuList={menu}>
                <div className="tutor_homework_main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 p-0"></div>
                            <div className="col-md-6 p-0 left_border">
                                <div className="tutor_homework_main_container">
                                    <div className="tutor_homework_main_header">
                                        <Typography className="tutor_homework_main_lgtext">
                                            Total Assignments<br></br>15
                                        </Typography>
                                    </div>
                                    <div className="tutor_homework_main_list">
                                        {ListArray.map((val,index)=>(
                                            <>
                                            <List subject={val.subject} submissions={val.submissions} date={val.date} desc={val.desc} subjectDesc={val.subjectDesc} />
                                            <div className="homework_horizontalline"></div>
                                            </>
                                        ))}
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </NavigationMenu>
        </>
    );
};

export default TutorHomework;
