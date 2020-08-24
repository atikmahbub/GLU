import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import AddButton from '../../components/Dashobard/AddButton';
import { AccountCircle } from '@material-ui/icons';
import { colors } from '../../Styles/colors';
import { useHistory } from 'react-router-dom';
import FormContainer from './FormContainer';
import { Typography, TextField } from '@material-ui/core';
import OutlineButton from '../../components/Button/OutlineButton';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import SelectWithLabel from '../../components/Inputs/SelectWithLabel';

const AddNewStudent: React.FunctionComponent = () => {
    const routes = useHistory();
    const handleRoutes = () => {
        routes.push({
            pathname: '/dashboard/student/bulk-upload',
            state: {
                breadcrumb: '/dashboard/student/student admission',
            },
        });
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
                            <div className="button-container">
                                <OutlineButton text="Upload" />
                                <Typography className="max-size">Max file size 5MB</Typography>
                            </div>
                            <InputWithLabel fieldName="First Name"/>
                            <InputWithLabel fieldName="Last Name"/>
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                <InputWithLabel fieldName="Email"/>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <SelectWithLabel fieldName="Gender" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default AddNewStudent;
