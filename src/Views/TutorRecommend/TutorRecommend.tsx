import React, { useState, useRef, useEffect } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography, TextField } from '@material-ui/core';
import ReusableBanner from '../../components/ReusableBanner';
import NewSkillContainer from '../TutorSetClass/NewSkillContainer';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';
import AddCancelButton from '../TutorAvailablity/AddCancelButton';
import PageFooter from '../../components/PageFooter';
import { useDispatch, useSelector } from 'react-redux';
import MadeBy from '../Footer/MadeBy';
import { getTeacherStudentLike ,postTeacherRecommendation} from '../../Redux/Actions/teacherAction';
import CompNcomp from '../../components/Dashobard/CompNcomp';
import StudentsDashboard from '../StudentsModule/Dashboard';
const TutorRecommend: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const menu = [
        { link: '/tutor/', name: 'Dashboard' },
        { link: '/tutor/set-class', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    const [recommend, setRecommend] = useState({
        subjectName: '',
        topic: '',
        students: [],
    });
    const [query, setQuery] = useState({
        name: '',
    });
    const [showList, setShowList] = useState(false);
    useEffect(() => {
        dispatch(getTeacherStudentLike(query));
    }, [query]);

    const teacherStudentLike = useSelector((state) => state.teacherReducer.teacherStudentLike);
    const [todo, setTodo] = useState([]);
    const inputRef = useRef(null);
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (query.name == '') return;
        setTodo([...todo, query.name]);
        inputRef.current.value = '';
        setShowList(false);
    };
    const handleChange = (e) => {
        setQuery({ name: e.target.value });
        setShowList(true);
    };
    const finalSubmit=()=>{
        dispatch(postTeacherRecommendation(recommend));
    }
    // const handleStudentClick=(data:any)=>{
    //     if(data!=NaN){
    //         console.log("on clicked "+ (data.firstName));
    //     }
    //     console.log("hey"+ JSON.stringify(data))

    // }
    console.log(recommend);
    return (
        <NavigationMenu menuList={menu} showBurgerNav={'hide'} tutorOptions={'show'} reverseButtons={'yes'}>
            <div className="tutor_recommend_container">
                <div className="tutor_recommend_subcontainer">
                    <div className="tutor_recommend_subcontainer_banner">
                        <ReusableBanner heading={'Recommend'} description={'Suggest classes to improve results.'} />
                    </div>
                    <div className="row horizontalline"></div>
                    <div className="tutor_recommend_subcontainer_inputfeild">
                        <form>
                            <div className="row">
                                <div className="col-md-6 p-0">
                                    <Typography className="recommendText">Students</Typography>
                                </div>
                                <div className="col-md-6 p-0 recommendleftBorder ">
                                    <div className="addSkill">
                                        <div className="col-md-12">
                                            <form action="" onSubmit={(e) => handleSubmit(e)}>
                                                <div className="row">
                                                    {/* <div className="col-md-12 p-0">
                        <Typography className="sub_heading">Add New</Typography>
                    </div> */}
                                                    <div className="col-md-12 p-0">
                                                        <TextField
                                                            inputRef={inputRef}
                                                            className="line-input-large"
                                                            label="Add New"
                                                            style={{ width: '90%' }}
                                                            fullWidth
                                                            onChange={(e) => handleChange(e)}
                                                        />
                                                    </div>
                                                    {showList && (
                                                        <div className="col-md-12">
                                                            <div className="show_students_like">
                                                                {teacherStudentLike &&
                                                                    teacherStudentLike.map((val) => (
                                                                        <ul
                                                                            style={{
                                                                                display:
                                                                                    query.name == '' ? 'none' : 'block',
                                                                            }}
                                                                        >
                                                                            <li
                                                                                className="students_like_text"
                                                                                onClick={() => {
                                                                                    setShowList(false);
                                                                                    inputRef.current.focus();
                                                                                    inputRef.current.value =
                                                                                        val.firstName +
                                                                                        ' ' +
                                                                                        val.lastName;
                                                                                    setQuery({
                                                                                        name:
                                                                                            val.firstName +
                                                                                            ' ' +
                                                                                            val.lastName,
                                                                                    });
                                                                                    setRecommend((prev) => {
                                                                                        return {
                                                                                            ...prev,
                                                                                            students: [
                                                                                                ...prev.students,
                                                                                                { studentId: val.id },
                                                                                            ],
                                                                                        };
                                                                                    });
                                                                                }}
                                                                            >{`${val.firstName} ${val.lastName}`}</li>
                                                                        </ul>
                                                                    ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                    <div className="col-md-12">
                                                        <div className="skill_container">
                                                            <div className="row choose_weeks">
                                                                {todo.map((val: string, index: number) => (
                                                                    <Typography key={index} className="boxes">
                                                                        {val}
                                                                    </Typography>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="recommendContainer">
                                        <div className="horizontalline col-12"></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="recommendClass_container">
                                    <Typography className="recommendText">Classes</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 recommendleftBorder ">
                                <div className="recommendSubject_container">
                                    <div className="row">
                                        <div className="col-6">
                                            <SelectFieldUnderline
                                                label="Subject"
                                                value={recommend.subjectName}
                                                className="select-large"
                                                options={['English']}
                                                getValue={(val) => {
                                                    setRecommend({ ...recommend, subjectName: val });
                                                }}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <TextField
                                                className="line-input-large"
                                                label="Class"
                                                value={recommend.topic}
                                                onChange={(e) =>
                                                    setRecommend({
                                                        ...recommend,
                                                        topic: e.target.value,
                                                    })
                                                }
                                                fullWidth
                                            />
                                        </div>
                                    </div>
                                    <div className="recommendCancel_container">
                                        <>
                                            <div className="reusable_addCancel_subcontainer">
                                                <div className="add_button" style={{cursor:'pointer'}} onClick={() => finalSubmit()}>
                                                    <Typography className="addCanceltext">Add</Typography>
                                                </div>
                                                <div className="cancel_button">
                                                    <Typography className="addCanceltext">Cancel</Typography>
                                                </div>
                                            </div>
                                        </>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="commonFooter">
                    <PageFooter />
                </div>
            </div>
        </NavigationMenu>
    );
};

export default TutorRecommend;
