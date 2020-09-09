import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import SelectWithLabel from '../../components/Inputs/SelectWithLabel';
import SaveController from '../../components/Dashobard/SaveController';
import UploadMaxSize from '../../components/Button/UploadMaxSize';

const AddNewStudent: React.FunctionComponent = () => {
    const routes = useHistory();
    // const handleRoutes = () => {
    //     routes.push({
    //         pathname: '/dashboard/student/bulk-upload',
    //         state: {
    //             breadcrumb: '/dashboard/student/student admission',
    //         },
    //     });
    // };

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
                            <UploadMaxSize />
                            <InputWithLabel fieldName="First Name" />
                            <InputWithLabel fieldName="Last Name" />
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                    <InputWithLabel fieldName="Email" />
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <SelectWithLabel fieldName="Gender" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                    <InputWithLabel fieldName="Form Group" />
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <SelectWithLabel fieldName="Year Group" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <InputWithLabel fieldName="Fathers name" />
                                    <InputWithLabel fieldName="Mothers name" />
                                    <InputWithLabel fieldName="Additional field 1" />
                                    <InputWithLabel fieldName="Additional field 2" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mt-5 w-100">
                            <SaveController handleNext={() => {}} activeCom={1} />
                        </div>
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default AddNewStudent;
