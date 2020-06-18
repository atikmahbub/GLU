import React, { useState, useEffect } from 'react';
import SelectField from '../../components/Inputs/SelectField';
import { TextField } from '@material-ui/core';

interface props{
    onChange: (value:any) => void;
}
const FormRow: React.FunctionComponent<props> = ({onChange}) => {
    const [state, setState] = useState({name:"", email:"", gender:"", parent:"" });
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, name: e.target.value})
    }
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, email: e.target.value})
    }
    const handleGender = (value: string) =>{
        setState({...state, gender:value})
    }
    const handleParent = (value:string) => {
        setState({...state, parent: value})
    }

    useEffect(()=>{
        onChange(state);
    }, [state])

    return (
        <div className="row">
            <div className="col-lg-3">
                <TextField className="custom-input" value={state.name} onChange={handleName} label="Name" variant="outlined" fullWidth />
            </div>
            <div className="col-lg-3">
                <TextField className="custom-input" value={state.email} onChange={handleEmail}  label="Email" variant="outlined" fullWidth />
            </div>
            <div className="col-lg-3">
                <SelectField
                    className="custom-input"
                    options={['Male', 'Female']}
                    label="Select Gender"
                    getValue={(value) => {handleGender(value)}}
                />
            </div>
            <div className="col-lg-3">
                <SelectField className="custom-input" options={['', '']} label="Select Parent" getValue={(value) => {handleParent(value)}} />
            </div>
        </div>
    );
};

export default FormRow;
