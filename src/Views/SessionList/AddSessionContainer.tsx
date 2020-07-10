import React, { useState, useEffect } from 'react';
import ErrorMessage from '../../components/ErrorMessage';
import ModalBox from '../../components/Modal/ModalBox';
import { useForm } from 'react-hook-form';
import { sessionFormValidation } from '../../Helper/FormValidations/sessionFormValidation';
import DateSelector from '../../components/DateTimeSelector/DateSelector';
import TimeSelector from '../../components/DateTimeSelector/TimeSelector';
import { TextField, Button } from '@material-ui/core';
import SelectController from '../../components/Inputs/SelectController';
import { useDispatch, useSelector } from 'react-redux';
import { getallclassAPIcall } from '../../Redux/Actions/classAction';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import { getClassAndSections } from '../../Helper/getClassSections';
import { addSessionsAPIcall } from '../../Redux/Actions/schoolAction';

interface props {
    handleToggler: () => void;
}
const AddSessionContainer: React.FunctionComponent<props> = ({ handleToggler }) => {
    const [state, setState] = useState({
        scheduled_on: new Date().toISOString(),
        start_time: new Date().toTimeString(),
        end_time: new Date().toTimeString(),
        class_name: '',
        section_name: '',
    });
    const [classes, setClasses] = useState([]);
    const [sections, setSections] = useState([]);
    const classList = useSelector((state: rootReducerType) => state.classReducer.classList);
    const { register, errors, handleSubmit, control, getValues } = useForm({
        validationSchema: sessionFormValidation.validationSetting,
    });
    useEffect(() => {
        dispatch(getallclassAPIcall());
    }, []);
    const dispatch = useDispatch();
    const handleDate = (date: Date) => {
        console.log(date)

        setState({ ...state, scheduled_on: date.toISOString() });
    };
    const handleStartTime = (date: Date) => {
        console.log(date)

        setState({ ...state, start_time: date.toTimeString()});
    };
    const handleEndTime = (date: Date) => {
        console.log(date)
        setState({ ...state, end_time: date.toTimeString() });
    };
    const handleClass = () => {
        const values = getValues();
        setState({ ...state, class_name: values.class[0]});
    };
    const handleSection = () => {
        const values = getValues();
        setState({ ...state, section_name: values.section});
    };
    useEffect(() => {
        if (classList) {
            const classSection = getClassAndSections(classList);
            const data = classSection.map((item: any) => {
                return Object.keys(item);
            });
            setClasses(data);
        }
    }, [classList]);
    useEffect(() => {
        if (state.class_name !== '') {
            const classSection = getClassAndSections(classList);
            classSection.map((item: any) => {
                if (item.hasOwnProperty(state.class_name)) {
                    setSections(item[state.class_name]);
                }
            });
        }
    }, [state.class_name]);
    const submit = (data: any) => {
        const formData = {
            class_name: data.class,
            section_name: data.section,
            teacher_fname: 'Abhay',
            teacher_lname: 'Singh1',
            subject_name: data.topicName,
            scheduled_on: state.scheduled_on?.split('T')[0],
            start_time: state.start_time.split(' ')[0],
            end_time: state.end_time.split(' ')[0],
        };
        dispatch(addSessionsAPIcall(formData, handleToggler))
    };

    return (
        <ModalBox title="Create Session" modalHandler={handleToggler}>
            <div className="modal-form">
                <form onSubmit={handleSubmit(submit)}>
                <div className="mb-4">
                    <DateSelector  handler={(value:Date) => handleDate(value)} />
                </div>
                <TimeSelector label="Start Time" timeHandler={(date: Date) => handleStartTime(date)} />
                <TimeSelector label="End Time" timeHandler={(date: Date) => handleEndTime(date)} />
                <TextField
                    variant="outlined"
                    name="topicName"
                    inputRef={register}
                    className="custom-input"
                    fullWidth
                    label="Topic Name"
                />
                {errors.topicName && <ErrorMessage msg={sessionFormValidation.errorMsg.topicName} />}
                <SelectController
                    name="class"
                    control={control}
                    options={classes}
                    handler={handleClass}
                    label="Year Group"
                    className="custom-input"
                />

                {errors.class && <ErrorMessage msg={sessionFormValidation.errorMsg.class} />}
                <SelectController
                    name="section"
                    control={control}
                    options={sections}
                    handler={handleSection}
                    label="Form Group"
                    className="custom-input"
                />
                {errors.section && <ErrorMessage msg={sessionFormValidation.errorMsg.section} />}
                <SelectController
                    className="custom-input"
                    label="Faculty Name"
                    control={control}
                    name="faculty"
                    options={['john', 'lea', 'Deven', 'Jinwie']}
                />
                {errors.faculty && <ErrorMessage msg={sessionFormValidation.errorMsg.faculty} />}
                <Button type="submit"  className="session-button">
                    Create Session
                </Button>
                </form>
            </div>
        </ModalBox>
    );
};

export default AddSessionContainer;
