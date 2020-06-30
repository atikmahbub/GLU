import React, { useEffect, useState } from 'react';
import SelectField from '../../components/Inputs/SelectField';
import { TextField } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { checkValue } from '../../Helper/checkValue';

interface props {
    onChange: (value: any) => void;
    editable: ()=> void;
    setId: Function;
    disable?: boolean
}
const FormRow: React.FunctionComponent<props> = ({ onChange, editable, setId, disable }) => {
    const [state, setState] = useState({
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        department: '',
        designation: '',
        phoneNumber: '',
        // password: '',
    });
    const [edit, setEdit] = useState<boolean>(false);
    const routes = useLocation();
    useEffect(() => {
        if (routes.hasOwnProperty('state')) {
            if ((routes as any).state.hasOwnProperty('teacherInfo')) {
                const data = (routes as any).state.teacherInfo;
                const newState = {
                    first_name: checkValue(data.first_name),
                    last_name: checkValue(data.last_name),
                    email: checkValue(data.email),
                    gender: checkValue(data.gender),
                    department: checkValue(data.department),
                    designation: checkValue(data.designation),
                    phoneNumber: checkValue(data.phoneNumber),
                };
                setState(newState);
                editable();
                setId(data.id);
                setEdit(true);
            }
        }
    }, []);
    const handleFirstname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, first_name: e.target.value });
    };
    const handleLastname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, last_name: e.target.value });
    };
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, email: e.target.value });
    };
    const handleGender = (value: string) => {
        setState({ ...state, gender: value });
    };
    const handleDepartment = (value: string) => {
        setState({ ...state, department: value });
    };
    const handleDesignation = (value: string) => {
        setState({ ...state, designation: value });
    };
    const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, phoneNumber: e.target.value });
    };
    // const handlePassword = (value: string) => {
    //     setState({ ...state, password: value });
    // };

    useEffect(() => {
        onChange(state);
    }, [state]);

    return (
        <div className={`row ${edit ? 'w-100' : ''}`}>
            <div className="col-lg-4">
                <TextField
                    className="custom-input"
                    label="First Name"
                    value={state.first_name}
                    onChange={handleFirstname}
                    variant="outlined"
                    fullWidth
                />
            </div>
            <div className="col-lg-4">
                <TextField
                    className="custom-input"
                    label="Last Name"
                    value={state.last_name}
                    onChange={handleLastname}
                    variant="outlined"
                    fullWidth
                />
            </div>
            <div className="col-lg-4">
                <TextField
                    className="custom-input"
                    label="Email"
                    value={state.email}
                    onChange={handleEmail}
                    variant="outlined"
                    fullWidth
                />
            </div>
            <div className="col-lg-3">
                <SelectField
                    className="custom-input"
                    options={['male', 'female']}
                    label="Select Gender"
                    value={state.gender}
                    getValue={(value) => {
                        handleGender(value);
                    }}
                    disabled={disable}
                />
            </div>
            <div className="col-lg-3">
                <SelectField
                    className="custom-input"
                    options={['computer', 'English', 'science']}
                    label="Department"
                    value={state.department}
                    getValue={(value) => {
                        handleDepartment(value);
                    }}
                />
            </div>
            <div className="col-lg-3">
                <SelectField
                    className="custom-input"
                    options={['senior lecturer', 'junior lecturer']}
                    label="Designation"
                    value={state.designation}
                    getValue={(value) => {
                        handleDesignation(value);
                    }}
                />
            </div>
            <div className="col-lg-3">
                <TextField
                    className="custom-input"
                    label="Phone Number"
                    type="number"
                    value={state.phoneNumber}
                    onChange={handlePhoneNumber}
                    variant="outlined"
                    disabled={disable}
                    fullWidth
                />
            </div>
            {/* <div className="col-lg-3">
                <AdornmentInput
                    value={state.password}
                    onChange={(value) => handlePassword(value)}
                    className="custom-input mb-4"
                />
            </div> */}
        </div>
    );
};

export default FormRow;
