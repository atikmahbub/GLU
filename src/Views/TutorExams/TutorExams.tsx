import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography, TextField } from '@material-ui/core';
import MadeBy from '../Footer/MadeBy';
import TutorResultComponent from './TutorResultsComponent'
const PersonalSchoolToggle: React.FunctionComponent = () => {
    const menu = [
        { link: '/tutor/', name: 'Dashboard' },
        { link: '/tutor/set-class', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    const resultsArray=[
        {
            subject:"Biology",
            subjectDesc:"How chlorophyll absorbs light",
            postedDate:"11/08/20",
            averageStudent:"57%",
            summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit Doloribus ab offici quibusdam et neque sint suscipit vitae doloremque quae nesciunt excepturi odit expedita ducimus quo Repudiandae. aliquam ea corrupti distinctio",

        },
        {
            subject:"Biology",
            subjectDesc:"How chlorophyll absorbs light",
            postedDate:"11/08/20",
            averageStudent:"57%",
            summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit Doloribus ab offici quibusdam et neque sint suscipit vitae doloremque quae nesciunt excepturi odit expedita ducimus quo Repudiandae. aliquam ea corrupti distinctio",
            
        },
        {
            subject:"Biology",
            subjectDesc:"How chlorophyll absorbs light",
            postedDate:"11/08/20",
            averageStudent:"57%",
            summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit Doloribus ab offici quibusdam et neque sint suscipit vitae doloremque quae nesciunt excepturi odit expedita ducimus quo Repudiandae. aliquam ea corrupti distinctio",
            
        },
        {
            subject:"Biology",
            subjectDesc:"How chlorophyll absorbs light",
            postedDate:"11/08/20",
            averageStudent:"57%",
            summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit Doloribus ab offici quibusdam et neque sint suscipit vitae doloremque quae nesciunt excepturi odit expedita ducimus quo Repudiandae. aliquam ea corrupti distinctio",
            
        }
    ]
    return (
        <div className="tutor_exams_container ">
            <NavigationMenu menuList={menu}/>
            <div className="tutor_exams_subcontainer">
                <div className="row">
                    <div className="col-md-6 p-0">
                        <div className="row">
                            <div className="col-6">
                                <Typography className="examsText">Exams</Typography>
                            </div>
                            <div className="col-6">
                                <Typography className="examsText">Filters<span style={{position:'relative',fontSize:'1.7rem',marginLeft:'0.625rem',top:'-2px'}} ><i className="icon-Plus"></i></span></Typography>
                            </div>
                        </div>
                        <div className="show_tutor_resNumber">
                            <div className="row">
                                <div className="col-6">
                                    <Typography className="examsText">74</Typography>
                                    <Typography className="examsSmallText">Results</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-0 examsleftBorder">
                        <div className="tutor_exams_result_container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="submit_result_container">
                                        <div>
                                            <Typography className="examsLargeText">Total Results</Typography>
                                        </div>
                                        <div className="submit_marks_button">
                                            <Typography className="examsSmallText">Submit Marks</Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="results_desc_container">
                                {resultsArray.map((val,index)=>(
                                    <>
                                    <TutorResultComponent subject={val.subject} subjectDesc={val.subjectDesc} summary={val.summary} postedDate={val.postedDate} averageStudent={val.averageStudent}/>
                                     {(index<resultsArray.length-1)&&<div className="col-12 exams_horizontalline"></div>}
                                    </>
                                ))}
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
export default PersonalSchoolToggle;
