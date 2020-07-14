import React, { useState, useCallback } from 'react';
import SelectField from '../../components/Inputs/SelectField';
import { Button } from '@material-ui/core';
import ClassAndSections from '../../Helper/ClassAndSections';
import { useDispatch } from 'react-redux';
import { getSubjectListAPIcall } from '../../Redux/Actions/subjectAction';

const FormRow = () => {
    const [state, setState] = useState<any>({setClass:'', setSection:'',classes: [], sections:[]});
    const handleClass = (className: string) => {
        setState({...state, setClass:className});
    }
    const handleSection = (sectionName: string) => {
        setState({...state, setSection:sectionName});
    }
    const dispatch = useDispatch();
    const handleFilter = useCallback((state)=>{
        dispatch(getSubjectListAPIcall(state.setClass, state.setSection))
    },[])
    return (
        <div className="row">
            <ClassAndSections
                        handleClasses={(value: Array<string>) => setState({ ...state, classes: value })}
                        handleSections={(value: Array<string>) => setState({ ...state, sections: value })}
                        getClassName={state.setClass}
                    />
            <div className="col-lg">
                <SelectField
                    className=" custom-select-input mb-0"
                    options={state.classes}
                    label="Select A Class"
                    getValue={(value:string) => {handleClass(value)}}
                />
            </div>
            <div className="col-lg">
                <SelectField
                    className=" custom-select-input mb-0"
                    options={state.sections}
                    label="Select A Section"
                    getValue={(value:string) => {handleSection(value)}}
                />
            </div>
            <div className="col-lg-3">
            <div className="subject-form-row  w-100">
                <Button className="filter-btn mr-2" onClick={()=>handleFilter(state)}>Filter</Button>
            </div>
            </div>
        </div>
    );
};

function  areEqual(prevProps:any, nextProps:any){
    return prevProps!==nextProps;
}

export default React.memo(FormRow, areEqual);
