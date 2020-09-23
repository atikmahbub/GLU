import React, { useState, useRef, useEffect } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import ReusableBanner from '../../components/ReusableBanner';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, TextField } from '@material-ui/core';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';
import { getTeacherStudentLike,postTeacherHomework} from '../../Redux/Actions/teacherAction';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import PageFooter from '../../components/PageFooter';


const TutorRecord: React.FunctionComponent = () => {
    const menu = [
        { link: '/tutor', name: 'Dashboard' },
        { link: '/tutor/set-class', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    const dispatch = useDispatch();
    const [homework, setHomework] = useState({
        title:'',
        description:'',
        dueDate:'',
        endTime:'',
        subjectName: '',
        students: [],
    });
    const [query, setQuery] = useState({
        name: '',
    });
    const [showList, setShowList] = useState(false);
    useEffect(() => {
        dispatch(getTeacherStudentLike(query));
    }, [query]);

    const teacherStudentLike = useSelector((state: rootReducerType) => state.teacherReducer.teacherStudentLike);
    const teacherHomeworkCreate=useSelector((state:rootReducerType)=>state.teacherReducer.teacherCreateHomework);
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
    const finalSubmit = () => {
        dispatch(postTeacherHomework(homework));
    };
    return (
        <NavigationMenu menuList={menu} showBurgerNav={'hide'} tutorOptions={'show'} reverseButtons={'yes'}>
            <div className="set_homework_container ">
                <div className="set_homework_container_subcontainer1">
                    <div className="banner_container">
                        <ReusableBanner heading={'Set Homework'} description={'Create and publish a new assignment.'} />
                    </div>
                    <div className="row horizontalline"></div>
                    <div className="set_homework_container_subcontainer2">
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="homeSubtext0">
                                    <Typography className="homeworkText">Due Date</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 homeworkBorder p-0">
                                <div className="homework_date_container">
                                    <div className="row">
                                        <div className="col-4">
                                            <TextField
                                                className="line-input-large"
                                                label="Date"
                                                type="date"
                                                fullWidth
                                                value={homework.dueDate}
                                                onChange={(e)=>setHomework({...homework,dueDate:e.target.value})}
                                                // value="9:25AM"
                                            />
                                        </div>
                                        <div className="col-3">
                                            <TextField
                                                className="line-input-large"
                                                label="End Time"
                                                type="time"
                                                fullWidth
                                                value={homework.endTime}
                                                onChange={(e)=>setHomework({...homework,endTime:e.target.value})}
                                                // value="9:25AM"
                                            />
                                        </div>
                                    </div>
                                    <div className="line_container">
                                        <div className="col-md-12 p-0 horizontalline"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="homeSubtext1">
                                    <Typography className="homeworkText">Assignment</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 homeworkBorder">
                                <div className="setClass">
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-md-4 p-0">
                                                <SelectFieldUnderline
                                                    label="Subject"
                                                    value={homework.subjectName}
                                                    className="select-large"
                                                    options={['English','Physics','Biology','Geography','Mathematics']}
                                                    getValue={(val) => {setHomework({...homework,subjectName:val})}}
                                                />
                                            </div>
                                            <div className="col-md-7 p-0"></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-11 p-0">
                                                <TextField
                                                    className="line-input-large"
                                                    label="Title (45 Characters)"
                                                    value={homework.title}
                                                    fullWidth
                                                    onChange={(e)=>setHomework({...homework,title:e.target.value})}
                                                />
                                            </div>
                                            <div className="col-md-11 p-0">
                                                <div className="description_container">
                                                    <Typography className="title">Description</Typography>
                                                    <textarea
                                                        rows={5}
                                                        style={{ fontSize: '2.625rem', width: '100%' }}
                                                        className="textbox"
                                                        value={homework.description}
                                                        onChange={(e)=>setHomework({...homework,description:e.target.value})}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12 p-0">
                                                <div className="sub_heading_container">
                                                    <Typography className="sub_heading">Resources</Typography>
                                                </div>
                                            </div>
                                            <div className="upload_component">
                                                <div className="upload_button">
                                                    <Typography className="text">Upload</Typography>
                                                </div>
                                                <div>
                                                    <Typography className="subtext">Max size (500mb)</Typography>
                                                </div>
                                                <input type="file" style={{ display: 'none' }} />
                                            </div>
                                            <div className="col-12 p-0 horizontalline"></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-12 horizontalline"></div> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="homeSubtext1">
                                    <Typography className="homeworkText">Students</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 p-0 homeworkBorder">
                                <div className="set_homework_skill_container">
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
                                                                                    setHomework((prev) => {
                                                                                        return {
                                                                                            ...prev,
                                                                                            students: [
                                                                                                ...prev.students,
                                                                                                { id: val.id },
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
                                </div>

                                <div className="set_homework_publish_container">
                                    <div className="publish_cancel_buttons">
                                        <button disabled={teacherHomeworkCreate&&teacherHomeworkCreate.success} className="p_button" style={{backgroundColor:'transparent'}} onClick={()=>finalSubmit()}>
                                            <Typography className="text">Publish</Typography>
                                        </button>
                                        <div className="c_button">
                                            <Typography className="text">Cancel</Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="commonWhiteFooter">
                    <PageFooter />
                </div>
            </div>
        </NavigationMenu>
    );
};

export default TutorRecord;
