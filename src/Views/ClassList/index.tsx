import React, { useState, useEffect } from 'react';
import ClassList from './ClassList';
import AddClassModal from './AddClassModal';
import { useDispatch, useSelector } from 'react-redux';
import { getallclassAPIcall } from '../../Redux/Actions/classAction';
import { checkValue } from '../../Helper/checkValue';

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
        // if (classes!==null) {
        //     const check = classes.filter((v:any,i:number,a:any)=>a.findIndex((t:any)=>(t?.class?.name === v?.class?.name))===i)
        //     const data = check.map((element: any, index:number) => {
        //        const sections = element.sections.map((item:any)=>{
        //            return item?.Section?.name;
        //        });
        //        const teachers = element.teachers.map((item:any)=>{
        //         return checkValue(item?.Teacher?.first_name);
                
        //     });
        //         return {
        //             rowId:index,
        //             id: element?.class?.id,
        //             year: element?.class?.name,
        //             formGroup: sections.join(', '),
        //             editSection: sections,
        //             teacher: teachers.length>0 ? teachers.join(', ') : 'ashish gupta',
        //             student: '25',
        //             action: '',
        //         };
        //     });
        //     console.log(data)
        //     setclassList(data);
        // }
    }, [classes]);
    return (
        <div>
            {toggler ? <AddClassModal handleToggler={handleToggler} /> : null}
            <ClassList classList={classList} triggerModal={handleToggler} />
        </div>
    );
};

export default index;
