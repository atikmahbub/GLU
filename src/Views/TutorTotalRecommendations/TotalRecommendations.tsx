import React, { useEffect } from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import {getTeacherRecommendation,getTeacherStudentLike} from '../../Redux/Actions/teacherAction';
import NavigationMenu from '../../components/NavigationMenu';
import ReusableSubmittedList from './ReusableSubmittedList';
import PageFooter from '../../components/PageFooter';
import MadeBy from '../Footer/MadeBy';
const TutorClass: React.FunctionComponent = () => {
    const dispatch=useDispatch();
    const teacherRecommend=useSelector((state:rootReducerType)=>state.teacherReducer.teacherRecommendations);
    const menu = [
        { link: '/tutor/', name: 'Dashboard' },
        { link: '/tutor/set-class', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    useEffect(() => {
        dispatch(getTeacherRecommendation());
    }, [])
    
    console.log("recommend"+JSON.stringify(teacherRecommend));
    const studentsName = [
        'Toby Frost',
        'Lugain Rfidah',
        'Jack Marshall',
        'Mia Adams',
        'Jen Holden',
        'Arthor Smith',
        'Rohan Rai',
        'Joshua Lee',
    ];
    const studentsAccepted = [
        {
            subject: 'English',
            desc: 'How to structure narrative in fiction',
            SubmittedDate: '11/08/20',
            studentsNum: '8',
            studentList: studentsName,
            isAccepted:true
        },
        {
            subject: 'Biology',
            desc: 'How chlorophyll absorbs light',
            SubmittedDate: '11/08/20',
            studentsNum: '8',
            studentList: studentsName,
            isAccepted:true
        },
        {
            subject: 'French',
            desc:'French Understanding feminine nouns',
            SubmittedDate: '11/08/20',
            studentsNum: '8',
            studentList: studentsName,
            isAccepted:true
        }
    ];
    const studentsSubmitted = [
        {
            subject: 'English',
            desc: 'How to structure narrative in fiction',
            SubmittedDate: '11/08/20',
            studentsNum: '8',
            studentList: studentsName,
            isAccepted:false
        },
        {
            subject: 'Biology',
            desc: 'How chlorophyll absorbs light',
            SubmittedDate: '11/08/20',
            studentsNum: '8',
            studentList: studentsName,
            isAccepted:false
        },
        {
            subject: 'French',
            desc:'French Understanding feminine nouns',
            SubmittedDate: '11/08/20',
            studentsNum: '8',
            studentList: studentsName,
            isAccepted:false
        }
    ];
    
    return (
        <NavigationMenu menuList={menu} showBurgerNav={'hide'} tutorOptions={"show"} reverseButtons={'yes'}>
            <div className="tutor_total_recommend">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 p-0">
                            <div className="total_recommend_container_1">
                                <div className="header_text_container">
                                    <div className="header_text_1">
                                        <Typography className="total_recommend_text">Recommendations</Typography>
                                    </div>
                                    <div className="header_text_2">
                                        <Typography className="total_recommend_text">Suggested</Typography>
                                    </div>
                                </div>
                                <div className="number_container">
                                    <div className="suggested_number_container">
                                        <div className="suggested_number">
                                            <Typography className="total_recommend_text">40</Typography>
                                        </div>
                                        <div className="suggest_text">
                                            <Typography className="total_recommend_smalltext">Suggested</Typography>
                                        </div>
                                    </div>
                                    <div className="accepted_number_container">
                                        <div className="accepted_number">
                                            <Typography className="total_recommend_text">17</Typography>
                                        </div>
                                        <div className="accepted_text">
                                            <Typography className="total_recommend_smalltext">Accepted</Typography>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/tutor/recommend" style={{textDecoration:'none',color:'black'}}>
                                <div className="create_button" >
                                   <Typography className="total_recommend_smalltext">Create</Typography>
                                </div>
                                </Link> 
                            </div>
                        </div>
                        <div className="col-md-6 p-0 left_border">
                            <div className="total_recommend_container_2">
                                <div className="big_text">
                                    <Typography className="total_recommend_bigtext">
                                        Total Recommended<br></br>57
                                    </Typography>
                                </div>
                                <div className="total_recommend_list_container">
                                    {teacherRecommend&&teacherRecommend.map((val, index) => (
                                        <>
                                            <ReusableSubmittedList
                                                subject={val.subject}
                                                desc={val.class}
                                                SubmittedDate={new Date(val.submitted).toString()}
                                                // studentsNum={val.RecommendedStudents.length}
                                                studentList={val.RecommendedStudents}
                                                DisplayAccepted={false}
                                            />

                                            
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                     <div className="row">
                         <div className="col-md-6 p-0">
                             <div className="recommend_accepted_text">
                                 <Typography className="total_recommend_text">Accepted</Typography>
                             </div>
                         </div>
                         <div className="col-md-6 p-0 left_border">
    
                             <div className="total_recommend_container_3">
                             
                             {teacherRecommend&&teacherRecommend.map((val, index) => (
                                        <>
                                            <ReusableSubmittedList
                                                subject={val.subject}
                                                desc={val.class}
                                                SubmittedDate={val.submitted}
                                             
                                                studentList={val.RecommendedStudents}
                                                DisplayAccepted={true}
                                            />

                                            
                                        </>
                                    ))}
                                    
                             </div>
                         </div>
                    </div>                   
                </div>
            </div>
            <div className="commonWhiteFooter">
                <PageFooter/>
            </div>
           
        </NavigationMenu>
    );
};

export default TutorClass;
