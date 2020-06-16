import React from 'react';
import SelectField from '../../components/Inputs/SelectField';
import { TextField } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';

const FormRow: React.FunctionComponent = () => {
    const { control, handleSubmit } = useForm();
    const onSubmit = (data: any) => console.log(data);
    return (
        <form id="student-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="row form-container">
                <div className="col-lg-3">
                    <Controller
                        as={<TextField className="custom-input" label="Name" variant="outlined" fullWidth />}
                        name="name"
                        control={control}
                        defaultValue=""
                    />
                </div>
                <div className="col-lg-3">
                    <Controller
                        as={<TextField className="custom-input" label="Email" variant="outlined" fullWidth />}
                        name="email"
                        control={control}
                        defaultValue=""
                    />
                </div>
                <div className="col-lg-3">
                    <Controller
                        as={
                            <SelectField
                                className="custom-input"
                                options={['Male', 'Female']}
                                label="Select Gender"
                                getValue={() => {}}
                            />
                        }
                        name="gender"
                        control={control}
                        defaultValue=""
                    />
                </div>
                <div className="col-lg-3">
                    <Controller
                        as={
                            <SelectField
                                className="custom-input"
                                options={['', '']}
                                label="Select Parent"
                                getValue={() => {}}
                            />
                        }
                        name="parent"
                        control={control}
                        defaultValue=""
                    />
                </div>
            </div>
        </form>
    );
};

export default FormRow;
