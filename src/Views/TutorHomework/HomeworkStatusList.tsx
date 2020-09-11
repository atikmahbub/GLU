import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
interface props {
    date?:string;
    subject?:string;
    subjectDesc?:string;
    desc?:string;
    submissions?:string;
}
const HomeworkStatusList: React.FunctionComponent<props> = ({date,subject,subjectDesc,desc,submissions}) => {
    return (
        <>
            <div className="reusable_homework_main">
                <div className="homework_main_title">
                    <Typography className="tutor_homework_main_text">{subject}</Typography>
                    <Typography className="tutor_homework_main_text">{subjectDesc}</Typography>
                </div>
                <div className="homework_main_subtitle">
                    <div className="homework_main_subtitle_1">
                        <Typography className="tutor_homework_main_smtext">Due</Typography>
                        <Typography className="tutor_homework_main_smtext">{date}</Typography>
                    </div>
                    <div className="homework_main_subtitle_2">
                        <Typography className="tutor_homework_main_smtext">Submissions</Typography>
                        <Typography className="tutor_homework_main_smtext">{submissions}</Typography>
                    </div>
                </div>
                <div className="homework_main_desc">
                    <Typography className="tutor_homework_main_smgreytext">
                        {desc}
                    </Typography>
                </div>
            </div>
        </>
    );
};

export default HomeworkStatusList;
