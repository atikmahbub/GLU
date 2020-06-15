import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import AddButton from '../../components/Dashobard/AddButton';
import { AccountCircle, GetApp } from '@material-ui/icons';
import SelectField from '../../components/Inputs/SelectField';
import { Button } from '@material-ui/core';

import { classes } from '../../Helper/classArray';
import { colors } from '../../Styles/colors';
import UploadBtn from '../../components/Button/UploadBtn';

const AddStaffBulk: React.FunctionComponent = () => {
   
    return (
        <div className="content-wrapper-student">
            <CardContainer>
                <AddButton
                    style={{ backgroundColor: colors.primary }}
                    icon={<AccountCircle className="icon-circle" />}
                    title="Staff Data Upload"
                    btnTitle=""
                    hideBtn={true}
                />
            </CardContainer>
            <CardContainer>
                <div className="student-container">
                    {/* <div className="row   w-100">
                        <div className="col-md-6 col-lg-4 ml-auto">
                            <SelectField
                                className="custom-input"
                                options={classes}
                                label="Select Class"
                                getValue={() => {}}
                            />
                        </div>
                        <div className="col-md-6 col-lg-4 mr-auto">
                            <SelectField
                                className="custom-input"
                                options={['A', 'B']}
                                label="Select A Section"
                                getValue={() => {}}
                            />
                        </div>
                    </div> */}
                    <div className="row mb-4  w-100">
                        <div className="col-md-6 col-lg-3 ml-auto">
                            <Button className="green-btn-light" endIcon={<GetApp />}>Generate CSV File</Button>
                        </div>
                        <div className="col-md-6 col-lg-5 mr-auto">
                            <UploadBtn btnType="inputBtn" text="upload" getFile={(file)=>{}}/>
                        </div>
                    </div>

                    <Button form="student-form" type="submit" className="gray-btn">
                        Add & Invite
                    </Button>
                </div>
            </CardContainer>
        </div>
    );
};

export default AddStaffBulk;
