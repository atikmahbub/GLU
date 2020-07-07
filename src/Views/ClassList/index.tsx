import React, { useState, useEffect } from 'react';
import ClassList from './ClassList';
import AddClassModal from './AddClassModal';
import { useDispatch, useSelector } from 'react-redux';
import { getallclassAPIcall } from '../../Redux/Actions/classAction';

const index: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const [toggler, setToggler] = useState(false);
    const classes = useSelector((state: any) => state.classReducer.classList);
    const [classList, setclassList] = useState([]);
    const handleToggler = () => {
        setToggler(!toggler);
    };
    useEffect(() => {
        dispatch(getallclassAPIcall());
    }, []);
    useEffect(() => {
        if (classes) {
            const data = classes.map((element: any) => {
               const sections = element.sections.map((item:any)=>{
                   return item.Section.name;
                   
               });
               const teachers = element.teachers.map((item:any)=>{
                return item.Teacher.first_name;
                
            });
                return {
                    id: element.class.id,
                    year: element.class.name,
                    formGroup: sections.join(', '),
                    editSection: sections,
                    teacher: teachers.join(', '),
                    student: '25',
                    action: '',
                };
            });
            setclassList(data);
        }
    }, [classes]);
    return (
        <div>
            {toggler ? <AddClassModal handleToggler={handleToggler} /> : null}
            <ClassList classList={classList} triggerModal={handleToggler} />
        </div>
    );
};

export default index;
