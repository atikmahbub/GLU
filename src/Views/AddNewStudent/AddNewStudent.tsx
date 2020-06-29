import React, { useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import AddButton from '../../components/Dashobard/AddButton';
import { AccountCircle, Add, Delete } from '@material-ui/icons';
import SelectField from '../../components/Inputs/SelectField';
import { Button, IconButton } from '@material-ui/core';
import FormRow from './FormRow';
import { classes } from '../../Helper/classArray';
import { colors } from '../../Styles/colors';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addNewStudentAPIcall } from '../../Redux/Actions/studentAction';
import Loader from '../../components/Loader';

const AddNewStudent: React.FunctionComponent = () => {
    const [rows, setRows] = useState([1]);
    const [state, setState] = useState({ class: '', section: '' });
    const [formdata, setFormdata] = useState<Array<object>>([]);
    const loader = useSelector((state: any) => state.uiReducer.loader);
    const dispatch = useDispatch();
    const addRows = () => {
        const total = [...rows];
        total.push(1);
        setRows(total);
    };

    const deleteRows = (index: number) => {
        const total = [...rows];
        total.splice(index, 1);
        setRows(total);
        const data = [...formdata];
        data.splice(index, 1);
        setFormdata(data);
    };

    const routes = useHistory();
    const handleRoutes = () => {
        routes.push({
            pathname: '/dashboard/student/bulk-upload',
            state: {
                breadcrumb: '/dashboard/student/student admission',
            },
        });
    };
    const handleClass = (value: string) => {
        setState({ ...state, class: value });
    };
    const handleSection = (value: string) => {
        setState({ ...state, section: value });
    };

    const handleChange = (value: object, index: number) => {
        const data = [...formdata];
        data[index] = value;
        setFormdata(data);
    };
    const submitData = () => {
        const data: any = [...formdata];
        data.forEach((item: any) => {
            item.class = 'first';
            item.section = state.section;
        });
        dispatch(addNewStudentAPIcall({ students: data }));
    };

    console.log(formdata);

    return (
        <div className="content-wrapper-student">
            <CardContainer>
                <AddButton
                    style={{ backgroundColor: colors.primary }}
                    icon={<AccountCircle className="icon-circle" />}
                    title="Student Admission"
                    btnTitle="Bulk Upload"
                    trigger={handleRoutes}
                />
            </CardContainer>
            <CardContainer>
                <div className="student-container">
                    <div className="row   w-100">
                        <div className="col-lg-4 ml-auto">
                            <SelectField
                                className="custom-input"
                                options={classes}
                                label="Year Group"
                                getValue={(value) => {
                                    handleClass(value);
                                }}
                            />
                        </div>
                        <div className="col-lg-4 mr-auto">
                            <SelectField
                                className="custom-input"
                                options={['A', 'B']}
                                label="Form Group"
                                getValue={(value) => {
                                    handleSection(value);
                                }}
                            />
                        </div>
                    </div>
                    {rows.map((value, index) => (
                        <div className="student-form-row  w-100">
                            <FormRow onChange={(value) => handleChange(value, index)} />
                            {index === 0 ? (
                                <IconButton onClick={addRows} className="button-container">
                                    <Add className="icon-btn" />
                                </IconButton>
                            ) : (
                                <IconButton onClick={() => deleteRows(index)} className="button-container delete-btn">
                                    <Delete className="icon-btn" />
                                </IconButton>
                            )}
                        </div>
                    ))}
                    <Button
                        form="student-form"
                        disabled={loader}
                        onClick={submitData}
                        type="submit"
                        className="gray-btn">
                        {loader ? <Loader /> : 'Add & Invite'}
                    </Button>
                </div>
            </CardContainer>
        </div>
    );
};

export default AddNewStudent;
