import React from 'react';
import { Typography } from '@material-ui/core';
import CheckCircleOutlineSharpIcon from '@material-ui/icons/CheckCircleOutlineSharp';
interface props {
    subject?: string;
    desc?: string;
    SubmittedDate?: string;
    studentsNum?: string;
    studentList?: any;
    DisplayAccepted?:boolean;
}

const ReusableSubmittedList: React.FunctionComponent<props> = ({
    subject,
    desc,
    SubmittedDate,
    studentsNum,
    studentList,
    DisplayAccepted
}) => {
    var dateMonth=SubmittedDate&&new Date(SubmittedDate).getMonth()+1;
    var dateYear=SubmittedDate&&new Date(SubmittedDate).getFullYear();
    var dateDay=SubmittedDate&&new Date(SubmittedDate).getDate();
    if(dateDay&&dateDay<10){
        dateDay='0'+dateDay;
    }
    if(dateMonth&&dateMonth<10){
        dateMonth='0'+dateMonth;
    }
    const tempArray=DisplayAccepted?studentList&&studentList.filter((val)=>{
        return val.status=='accept';
    }):studentList&&studentList.filter((val)=>{
        return val.status=='suggest';
    })

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
                        <Typography className="total_recommend_smtext">{`${dateMonth}/${dateDay}/${dateYear}`}</Typography>
                    </div>
                    <div className="main_subheader_students">
                        <Typography className="total_recommend_smtext">Students</Typography>
                        <Typography className="total_recommend_smtext">{tempArray.length}</Typography>
                    </div>
                </div>
                <div className="main_students_list">
                    <div className="main_students_list_name">
                     
                        {tempArray&&tempArray.map((val, index) => (
                            //    console.log(JSON.stringify(val.Student&&val.Student.firstName)+"students")
                            
                            <span key={index} className="total_recommend_greysmtext main_students_list_name ">
                                {`${val.Student&&val.Student.firstName} ${val.Student&&val.Student.lastName}${index != tempArray.length - 1 ? ',' : ''}`}
                            </span>

                        ))}
                    </div>
                </div>
                {DisplayAccepted&&
                <div className="show_accepted">
                    
                <Typography className="total_recommend_xstext"><CheckCircleOutlineSharpIcon style={{fontSize:'1.2rem',marginRight:'1px'}}/>Accepted</Typography>
            </div>}
                
            </div>

            <div className="recommend_line"></div>
        </>
    );
};

export default ReusableSubmittedList;
