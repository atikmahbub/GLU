import React, { useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import { colors } from '../../Styles/colors';
import PdBox from '../../Containers/Cards/PdBox';
import UploadMaxSize from '../../components/Button/UploadMaxSize';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import SelectWithLabel from '../../components/Inputs/SelectWithLabel';
import ChipAdder from '../../components/Cards/ChipAdder';
import SaveController from '../../components/Dashobard/SaveController';
import { useDispatch } from 'react-redux';
import { addNewTeacherAPIcall } from '../../Redux/Actions/teacherAction';
import { useHistory } from 'react-router';

const useStyle = makeStyles({
    root: {
        marginBottom: '5rem',
    },
    heading: {
        fontSize: '1.562rem',
        lineHeight: '1.562rem',
        color: colors.black,
        fontWeight: 500,
    },
    mobile: {
        paddingTop: '2.6rem',
    },
});

const Index = () => {
    const classes = useStyle();
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobilePre: '',
        mobileNumber: '',
        gender: '',
        designation: '',
    });
    const [department, setDepartment] = useState<any>([]);
    const [subjects, setSubjects] = useState<any>([]);

    const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, firstName: e.target.value });
    };
    const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, lastName: e.target.value });
    };
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, email: e.target.value });
    };
    const handleMobilePre = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, mobilePre: e.target.value });
    };
    const handleMobile = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, mobileNumber: e.target.value });
    };
    const handleGender = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, gender: e.target.value });
    };
    const handleDesgination = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, designation: e.target.value });
    };
    const handleDepartment = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDepartment(e.target.value);
    };
    const handleSubjects = (value: string) => {
        const data = [...subjects];
        data.push(value);
        setSubjects(data);
    };
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = () => {
        const data = {
            teachers: [
                {
                    firstName: state.firstName,
                    gender: state.gender,
                    lastName: state.lastName,
                    email: state.email,
                    phoneNumber: state.mobileNumber,
                    designation: state.designation,
                    departmentName: department,
                    subjects: subjects,
                },
            ],
        };
        dispatch(addNewTeacherAPIcall(data, history));
    };
    return (
        <CardContainer>
            <PdBox>
                <Grid container className={classes.root}>
                    <Grid item xs={12} md={4}>
                        <Typography className={classes.heading}>Teachers Information</Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography className={classes.heading}>Teachers Information</Typography>
                        <UploadMaxSize onClick={() => {}} />
                        <InputWithLabel fieldName="First Name" value={state.firstName} onChange={handleFirstName} />
                        <InputWithLabel fieldName="Last Name" value={state.lastName} onChange={handleLastName} />
                        <InputWithLabel
                            fieldName="Email"
                            placeholder="sample@gmail.com"
                            value={state.email}
                            onChange={handleEmail}
                        />
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <SelectWithLabel
                                    options={['+91']}
                                    fieldName="Mobile number"
                                    value={state.mobilePre}
                                    onChange={handleMobilePre}
                                />
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <div className={classes.mobile}>
                                    <InputWithLabel fieldName="" value={state.mobileNumber} onChange={handleMobile} />
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={8}>
                                <SelectWithLabel
                                    options={['male', 'female']}
                                    fieldName="Gender"
                                    value={state.gender}
                                    onChange={handleGender}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <SelectWithLabel
                                    options={['junior', 'senior']}
                                    fieldName="Designation"
                                    value={state.designation}
                                    onChange={handleDesgination}
                                />
                            </Grid>
                        </Grid>
                        <SelectWithLabel
                            options={['Science']}
                            fieldName="Departments"
                            value={department}
                            onChange={handleDepartment}
                        />
                        <ChipAdder fieldName="Subjects" data={subjects} onChange={handleSubjects} />
                    </Grid>
                </Grid>
                <SaveController activeCom={0} visibleAt={1} handleNext={handleSubmit} />
            </PdBox>
        </CardContainer>
    );
};

export default Index;
