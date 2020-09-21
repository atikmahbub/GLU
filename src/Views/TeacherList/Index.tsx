import React, { useEffect, useState } from 'react';
import TeacherList from './TeacherList';
import { useDispatch, useSelector } from 'react-redux';
import { getallTeacherAPIcall } from '../../Redux/Actions/teacherAction';
import commonImg from '../../Assets/images';

const Index = () => {
    const dispatch = useDispatch();
    const teachers = useSelector((state:any)=> state.teacherReducer.teacherList);
    const [teacherList, setTeacherList] = useState([]);

    useEffect(()=>{
        dispatch(getallTeacherAPIcall());
    },[])
    useEffect(() => {
        if (teachers) {
            const data = teachers.map((element: any) => {
                return {
                    id:element.id,
                    profile: element.profile ? element.profile : commonImg.photo,
                    name: element.first_name + ' ' + element.last_name,
                    first_name: element.first_name,
                    last_name: element.last_name,
                    // gender: element.User.gender,
                    // email: element.User.email,
                    // phoneNumber: element.User.phoneNumber,
                    department: element.department ? element.department : 'computer',
                    designation: element.designation ? element.designation : 'junior lecturer',
                    action: '',
                };
            });
            setTeacherList(data);
        }
    }, [teachers]);

    return (
        <TeacherList teacherList={teacherList}/>
    );
}

export default Index;
