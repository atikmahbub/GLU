import React, { useEffect, useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Typography } from '@material-ui/core';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import SelectWithLabel from '../../components/Inputs/SelectWithLabel';
import SaveController from '../../components/Dashobard/SaveController';
import UploadMaxSize from '../../components/Button/UploadMaxSize';
import { useDispatch, useSelector } from 'react-redux';
import { getFileUploadAPIcall, uploadProfileAmznUrl } from '../../Redux/Actions/FileUploadAction';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import { addNewStudentAPIcall } from '../../Redux/Actions/studentAction';
import { useHistory, useLocation } from 'react-router';
import { checkValue } from '../../Helper/checkValue';

const AddNewStudent: React.FunctionComponent = () => {
    const [next, setNext] = useState(1);
    const [image, setImage] = useState<File>();
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gender: 'male',
        formGroup: 'A',
        yearGroup: 'First',
        fatherName: '',
        motherName: '',
    });
    const fileData = useSelector((state: rootReducerType) => state.fileUploadReducer.fileData);
    const [editMode, setEditMode] = useState(false);
    const handleNext = () => {
        // setNext(next + 1);
        if (image) {
            dispatch(getFileUploadAPIcall(image.name));
        }
        hitStudentAPIcall();
    };
    const dispatch = useDispatch();
    const routes = useHistory();
    const handleFile = (file: File) => {
        setImage(file);
    };
    // update student info
    const routeState = useLocation();
    useEffect(() => {
        if (routeState.hasOwnProperty('state')) {
            if ((routeState as any).state.hasOwnProperty('studentInfo')) {
                const data = (routeState as any).state.studentInfo;
                const newState = {
                    firstName: checkValue(data.firstName),
                    lastName: checkValue(data.lastName),
                    email: checkValue(data.email),
                    gender: checkValue(data.gender),
                    yearGroup: checkValue(data.yearGroup),
                    formGroup: checkValue(data.formGroup),
                    fatherName: checkValue(data.fatherName),
                    motherName: checkValue(data.motherName),
                };
                setState(newState);
                setEditMode(true);
                console.log(data);
            }
        }
    }, []);
    const hitStudentAPIcall = () => {
        const data = {
            className: state.yearGroup,
            sectionName: state.formGroup,
            students: [
                {
                    firstName: state.firstName,
                    gender: state.gender,
                    lastName: state.lastName,
                    email: state.email,
                    fatherName: state.fatherName,
                    motherName: state.motherName,
                },
            ],
        };
        if (editMode) {
        } else {
            dispatch(addNewStudentAPIcall(data, routes));
        }
    };
    useEffect(() => {
        if (fileData) {
            dispatch(uploadProfileAmznUrl(fileData.url, fileData.fileName, image as any));
            hitStudentAPIcall();
        }
    }, [fileData]);
    const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, firstName: e.target.value });
    };
    const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, lastName: e.target.value });
    };
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, email: e.target.value });
    };
    const handleGender = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, gender: e.target.value });
    };
    const handleYearGroup = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, yearGroup: e.target.value });
    };
    const handleFormGroup = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, formGroup: e.target.value });
    };
    const handleMotherName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, motherName: e.target.value });
    };
    const handleFatherName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, fatherName: e.target.value });
    };

    return (
        <div className="content-wrapper-student">
            <CardContainer>
                <div className="multi-step-form-container">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <Typography className="left_title">Student Information</Typography>
                        </div>
                        <div className="col-md-8 mb-4">
                            <Typography className="right_title">Upload Students Picture</Typography>
                            <UploadMaxSize onClick={handleFile} />
                            <InputWithLabel fieldName="First Name" value={state.firstName} onChange={handleFirstName} />
                            <InputWithLabel fieldName="Last Name" value={state.lastName} onChange={handleLastName} />
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                    <InputWithLabel fieldName="Email" value={state.email} onChange={handleEmail} />
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <SelectWithLabel
                                        fieldName="Gender"
                                        options={['male', 'female', 'other']}
                                        value={state.gender}
                                        onChange={handleGender}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                    <SelectWithLabel
                                        fieldName="Year Group"
                                        options={['First', 'Second', 'Third', 'Fourth', 'Fifth']}
                                        value={state.yearGroup}
                                        onChange={handleYearGroup}
                                    />
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <SelectWithLabel
                                        fieldName="Form Group"
                                        options={['A', 'B', 'C', 'D', 'E']}
                                        value={state.formGroup}
                                        onChange={handleFormGroup}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <InputWithLabel
                                        fieldName="Fathers name"
                                        value={state.fatherName}
                                        onChange={handleFatherName}
                                    />
                                    <InputWithLabel
                                        fieldName="Mothers name"
                                        value={state.motherName}
                                        onChange={handleMotherName}
                                    />
                                    <InputWithLabel fieldName="Additional field 1" />
                                    <InputWithLabel fieldName="Additional field 2" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mt-5 w-100">
                            <SaveController handleNext={handleNext} visibleAt={1} activeCom={next} />
                        </div>
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default AddNewStudent;
