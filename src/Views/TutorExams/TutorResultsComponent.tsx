import React from 'react';
import { Typography } from '@material-ui/core';

interface props{
    subject?:string;
    subjectDesc?:string;
    postedDate?:string;
    averageStudent?:string;
    summary?:string
}
const PersonalSchoolToggle: React.FunctionComponent<props> = ({subject,subjectDesc,postedDate,averageStudent,summary}) => {
    return (
        <>
            <div className="reusable_results_description_container">
                <div className="exams_subcontainer1">
                    <div className="row">
                        <div className="col-md-10 col-12">
                            <Typography className="examsText">{subject}</Typography>
                            <Typography className="examsText">{subjectDesc}</Typography>
                        </div>
                    </div>
                </div>
                <div className="exams_subcontainer2">
                    <div className="row">
                        <div className="col-5 ">
                            <Typography className="examsSmallText">Posted</Typography>
                            <Typography className="examsSmallText">{postedDate}</Typography>
                        </div>
                        <div className="col-5 ">
                            <Typography className="examsSmallText">Average Student</Typography>
                            <Typography className="examsSmallText">{averageStudent}</Typography>
                        </div>
                    </div>
                </div>
                <div className="exams_subcontainer3">
                    <div className="row">
                        <div className="col-md-10 col-12">
                            <Typography className="examsSmallGreyText">
                                {summary}
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default PersonalSchoolToggle;
