import React from 'react';
import ProgressBar from '../PersonalSchool2/ProgressBar';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography } from '@material-ui/core';

const PersonalSchoolToggle: React.FunctionComponent = () => {
    const menu = [
        { link: '/tutor/', name: 'Dashboard' },
        { link: '/tutor/set-class', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    return (
        <div className="personal_school_timetable">
            <NavigationMenu menuList={menu} />
            <div className="personal_school_timetable_subcontainer">
                <div className="row">
                    <div className="col-md-6 p-0">
                        <div className="personal_school_calendarDate">
                            <Typography className="calendarsubText1">11th August 2020</Typography>
                            <Typography className="calendarsubText2">9.45am</Typography>
                        </div>
                    </div>
                    <div className="col-md-6 school_borderline p-0">
                        <div className="school_table_progress_container">
                            <div className="row">
                                <div className="big_timetable_date">
                                    <Typography className="calendarText">11th August 2020</Typography>
                                </div>
                            </div>
                            
                            <ProgressBar
                                time={'8:30-9:25am'}
                                subject={'Maths'}
                                typeClassroom={'Classroom'}
                                type={'Attendance'}
                                typeNumber={'34/40'}
                                classType={'8A'}
                                progress={25}
                            />
                            <div className="row school_horizontalline"></div>
                            <ProgressBar
                                time={'8:30-9:25am'}
                                subject={'Maths'}
                                typeClassroom={'Classroom'}
                                type={'Attendance'}
                                typeNumber={'34/40'}
                                classType={'8A'}
                                progress={25}
                            />
                            <div className="row school_horizontalline"></div>
                            <ProgressBar
                                time={'8:30-9:25am'}
                                subject={'Maths'}
                                typeClassroom={'Classroom'}
                                type={'Attendance'}
                                typeNumber={'34/40'}
                                classType={'8A'}
                                progress={25}
                            />
                            <div className="row school_horizontalline"></div>
                            <ProgressBar
                                time={'8:30-9:25am'}
                                subject={'Maths'}
                                typeClassroom={'Classroom'}
                                type={'Attendance'}
                                typeNumber={'34/40'}
                                classType={'8A'}
                                progress={25}
                            />
                            <div className="row school_horizontalline"></div>
                            <ProgressBar
                                time={'8:30-9:25am'}
                                subject={'Maths'}
                                typeClassroom={'Classroom'}
                                type={'Attendance'}
                                typeNumber={'34/40'}
                                classType={'8A'}
                                progress={25}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PersonalSchoolToggle;
