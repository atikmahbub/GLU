import React from 'react';
import { Typography } from '@material-ui/core';
import CheckCircleOutlineSharpIcon from '@material-ui/icons/CheckCircleOutlineSharp';
interface props {
    subject?: string;
    desc?: string;
    SubmittedDate?: string;
    studentsNum?: string;
    studentList?: string[];
    isAccepted?:boolean;
}

const ReusableSubmittedList: React.FunctionComponent<props> = ({
    subject,
    desc,
    SubmittedDate,
    studentsNum,
    studentList,
    isAccepted
}) => {
    return (
        <>
            <div className="reusable_total_recommend_list">
                <div className="main_header_row">
                    <div className="main_header_subjectName">
                        <Typography className="total_recommend_text">{subject}</Typography>
                        <Typography className="total_recommend_text">{desc}</Typography>
                    </div>
                    <div className="main_header_editDelete">
                        <Typography className="total_recommend_greysmalltext">
                            <span className="edit">Edit</span>
                            <span className="delete">Delete</span>
                        </Typography>
                    </div>
                </div>
                <div className="main_subheader_row">
                    <div className="main_subheader_submitted">
                        <Typography className="total_recommend_smtext">Submitted</Typography>
                        <Typography className="total_recommend_smtext">{SubmittedDate}</Typography>
                    </div>
                    <div className="main_subheader_students">
                        <Typography className="total_recommend_smtext">Students</Typography>
                        <Typography className="total_recommend_smtext">{studentsNum}</Typography>
                    </div>
                </div>
                <div className="main_students_list">
                    <div className="main_students_list_name">
                        {studentList.map((val, index) => (
                            <span key={index} className="total_recommend_greysmtext main_students_list_name ">
                                {`${val}${index != studentList.length - 1 ? ',' : ''}`}
                            </span>
                        ))}
                    </div>
                </div>
                {isAccepted&&
                <div className="show_accepted">
                    
                <Typography className="total_recommend_xstext"><CheckCircleOutlineSharpIcon style={{fontSize:'1.2rem',marginRight:'1px'}}/>Accepted</Typography>
            </div>}
                
            </div>
        </>
    );
};

export default ReusableSubmittedList;
