import React from 'react';
import ModalBox from '../../components/Modal/ModalBox';
import { TextField, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../../components/ErrorMessage';
import { classFormValidation } from '../../Helper/FormValidations/classFormValidation';
import { sideModalProps } from '../../Interfaces/sideModal';
import { useDispatch } from 'react-redux';
import { addNewClassAPIcall } from '../../Redux/Actions/classAction';


const AddClassModal: React.FunctionComponent<sideModalProps> = ({handleToggler}) => {
    const { register, errors, handleSubmit } = useForm({
        validationSchema: classFormValidation.validationSetting,
    });
    const dispatch = useDispatch();
    const submit = (data: any) => {
        const addClass = {name: data.className};
        dispatch(addNewClassAPIcall(addClass, handleToggler));
    }
    return (
        <ModalBox title="Create Year Group" modalHandler={handleToggler}>
                    <div className="modal-form">
                        <form onSubmit={handleSubmit(submit)}>
                            <TextField
                                variant="outlined"
                                inputRef={register}
                                name="className"
                                className="custom-input"
                                fullWidth
                                label="Year Group"
                            />
                            {errors.className && <ErrorMessage msg={classFormValidation.errorMsg.className} />}
                            <TextField
                                variant="outlined"
                                inputRef={register}
                                name="section"
                                className="custom-input"
                                fullWidth
                                label="Form Group"
                            />
                            {errors.section && <ErrorMessage msg={classFormValidation.errorMsg.section} />}
                            <Button type="submit" className="session-button">
                                Create Year Group
                            </Button>
                        </form>
                    </div>
                </ModalBox>
    );
}

export default AddClassModal;
