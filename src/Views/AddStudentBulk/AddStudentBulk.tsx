import React, { useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import AddButton from '../../components/Dashobard/AddButton';
import { AccountCircle } from '@material-ui/icons';
import SelectField from '../../components/Inputs/SelectField';
import { Button } from '@material-ui/core';
import { classes } from '../../Helper/classArray';
import { colors } from '../../Styles/colors';
import UploadBtn from '../../components/Button/UploadBtn';
import GenerateCsvFileBtn from '../../components/Button/GenerateCsvFileBtn';
import { student } from '../../Helper/GenerateCsvHeaders/student';
import { parseCsvFile } from "../../Helper/parseCsvFile";


const AddStudentBulk: React.FunctionComponent = () => {
    const [csvfile, setCsvfile] = useState<File>();
    const handleCsvFile = (file: File) => parseCsvFile(file, setCsvfile);
    console.log(csvfile)
    return (
        <div className="content-wrapper-student">
            <CardContainer>
                <AddButton
                    style={{ backgroundColor: colors.primary }}
                    icon={<AccountCircle className="icon-circle" />}
                    title="Student Data Upload"
                    btnTitle="Bulk Upload"
                    hideBtn={true}
                />
            </CardContainer>
            <CardContainer>
                <div className="student-container">
                    <div className="row   w-100">
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
                    </div>
                    <div className="row   w-100">
                        <div className="col-md-6 mb-4 col-lg-3 ml-auto">
                            <GenerateCsvFileBtn filename="students.csv" headers={student} />
                        </div>
                        <div className="col-md-6 mb-4 col-lg-5 mr-auto">
                            <UploadBtn btnType="inputBtn" text="upload" getFile={(file) => handleCsvFile(file)} />
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

export default AddStudentBulk;
