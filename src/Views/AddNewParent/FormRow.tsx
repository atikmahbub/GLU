import React, { useState, useEffect } from 'react';
import SelectField from '../../components/Inputs/SelectField';
import { TextField } from '@material-ui/core';
import AdornmentInput from '../../components/Inputs/AdornmentInput';

interface props {
    onChange: (value: any) => void;
}
const FormRow: React.FunctionComponent<props> = ({ onChange }) => {
    const [state, setState] = useState({
        name: '',
        email: '',
        gender: '',
        phoneNumber: '',
        password: '',
    });
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, name: e.target.value });
    };
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, email: e.target.value });
    };
    const handleGender = (value: string) => {
        setState({ ...state, gender: value });
    };
    const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, phoneNumber: e.target.value });
    };
    const handlePassword = (value: string) => {
        setState({ ...state, password: value });
    };

    useEffect(() => {
        onChange(state);
    }, [state]);
    return (
        <div className="row">
            <div className="col-lg">
                <TextField
                    className="custom-input"
                    label="Name"
                    value={state.name}
                    onChange={handleName}
                    variant="outlined"
                    fullWidth
                />
            </div>
            <div className="col-lg">
                <TextField
                    className="custom-input"
                    label="Email"
                    value={state.email}
                    onChange={handleEmail}
                    variant="outlined"
                    fullWidth
                />
            </div>
            <div className="col-lg">
                <SelectField
                    className="custom-input"
                    options={['Male', 'Female']}
                    label="Select Gender"
                    getValue={(value) => {
                        handleGender(value);
                    }}
                />
            </div>
            <div className="col-lg">
                <TextField
                    className="custom-input"
                    label="Phone Number"
                    value={state.phoneNumber}
                    onChange={handlePhoneNumber}
                    variant="outlined"
                    fullWidth
                />
            </div>
            <div className="col-lg">
                <AdornmentInput value={state.password} onChange={(value)=> handlePassword(value)} className="custom-input mb-4" />
            </div>
        </div>
    );
};

export default FormRow;
