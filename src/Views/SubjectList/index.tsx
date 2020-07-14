import React, { useState, useEffect } from 'react';
import ModalBox from '../../components/Modal/ModalBox';
import { TextField, Button } from '@material-ui/core';
import SubjectList from './SubjectList';
import SelectController from '../../components/Inputs/SelectController';
import ErrorMessage from '../../components/ErrorMessage';
import { subjectFormValidation } from '../../Helper/FormValidations/subjectFormValidation';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addNewSubjectAPIcall, updateSubjectAPIcall } from '../../Redux/Actions/subjectAction';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import Loader from '../../components/Loader';
import ClassAndSections from '../../Helper/ClassAndSections';
import { getAllDepartmentAPIcall } from '../../Redux/Actions/schoolAction';
import { getallclassAPIcall } from '../../Redux/Actions/classAction';

const index: React.FunctionComponent = () => {
    const [toggler, setToggler] = useState(false);
    const [departments, setDepartments] = useState([]);
    const [editData, setEditData] = useState<any>();
    const [classes, setClasses] = useState<Array<string>>([]);
    const [sections, setSections] = useState<Array<string>>([]);
    const [state, setState] = useState<any>({ class: '' });
    const departmentList = useSelector((state: any) => state.schoolReducer.departmentList);

    const loader = useSelector((state: rootReducerType) => state.uiReducer.loader);
    const handleToggler = () => {
        setToggler(!toggler);
    };
    const { register, errors, handleSubmit, control, getValues, reset } = useForm({
        validationSchema: subjectFormValidation.validationSetting,
    });
    const dispatch = useDispatch();
    const handleClass = () => {
        const { yearGroup } = getValues();
        setState({ ...state, class: yearGroup });
    };
    useEffect(() => {
        dispatch(getAllDepartmentAPIcall());
        dispatch(getallclassAPIcall());
    }, []);
    useEffect(() => {
        if (editData) {
            setState({ class: editData.yearGroup });
            reset({
                department: [editData.department],
                yearGroup: [editData.yearGroup],
                formGroup: [editData.formGroup],
                subject: editData.classGroup,
            });
        }
    }, [editData]);
    useEffect(() => {
        if (departmentList) {
            const data = departmentList.map((item: any) => {
                return item.name;
            });
            setDepartments(data);
        }
    }, [departmentList]);
    const submit = (data: any) => {
        if (editData) {
            dispatch(
                updateSubjectAPIcall(
                    editData.yearGroup,
                    editData.formGroup,
                    editData.department,
                    editData.subjectId,
                    { name: data.subject },
                    handleToggler
                )
            );
        } else {
            dispatch(
                addNewSubjectAPIcall(
                    data.yearGroup,
                    data.formGroup,
                    data.department,
                    { name: data.subject },
                    handleToggler
                )
            );
        }
    };

    return (
        <div>
            <ClassAndSections
                handleClasses={(value: Array<string>) => setClasses(value)}
                handleSections={(value: Array<string>) => setSections(value)}
                getClassName={state.class}
            />
            {toggler ? (
                <ModalBox title="Create Class Group" modalHandler={handleToggler}>
                    <div className="modal-form">
                        <form onSubmit={handleSubmit(submit)}>
                            <SelectController
                                className="custom-input"
                                label="Select Department"
                                options={departments}
                                name="department"
                                control={control}
                            />
                            {errors.department && <ErrorMessage msg={subjectFormValidation.errorMsg.department} />}
                            <SelectController
                                className="custom-input"
                                label="Year Group"
                                handler={handleClass}
                                options={classes}
                                name="yearGroup"
                                control={control}
                            />
                            {errors.yearGroup && <ErrorMessage msg={subjectFormValidation.errorMsg.yearGroup} />}
                            <SelectController
                                className="custom-input"
                                label="Form Group"
                                options={sections}
                                name="formGroup"
                                control={control}
                            />
                            {errors.formGroup && <ErrorMessage msg={subjectFormValidation.errorMsg.formGroup} />}
                            <TextField
                                variant="outlined"
                                className="custom-input"
                                inputRef={register}
                                label="Select Subject"
                                name="subject"
                                fullWidth
                            />
                            {errors.subject && <ErrorMessage msg={subjectFormValidation.errorMsg.subject} />}
                            <Button disabled={loader} className="session-button" type="submit">
                                {loader ? <Loader /> : editData ? 'Update Class Group':'Create Class Group'}
                            </Button>
                        </form>
                    </div>
                </ModalBox>
            ) : null}
            <SubjectList setEditData={setEditData} triggerModal={handleToggler} />
        </div>
    );
};

export default index;
