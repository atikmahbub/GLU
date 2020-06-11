import React, { useState } from 'react';
import ModalBox from '../../components/Modal/ModalBox';
import { TextField, Button, Typography, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import TimeSelector from '../../components/DateTimeSelector/TimeSelector';
import SelectField from '../../components/Inputs/SelectField';
import { classes } from '../../Helper/classArray';
import DailyAttendance from './DailyAttendance';
import DateSelector from '../../components/DateTimeSelector/DateSelector';
import OutlineBtn from '../../components/Button/OutlineBtn';
import { colors } from '../../Styles/colors';
import AttendanceCard from './AttendanceCard';

const index: React.FunctionComponent = () => {
    const [toggler, setToggler] = useState(false);
    const handleToggler = () => {
        setToggler(!toggler);
    };

    const students = [
        "John",
        "Abhay",
        "Subham",
        "Govind",
        "John",
        "Abhay",
        "Subham",
        "Govind",
        "John",
        "Abhay",
        "Subham",
        "Govind",
        "John",
        "Abhay",
        "Subham",
        "Govind",
    ]
    
    return (
        <div>
            {toggler ? (
                <ModalBox title="Take Attendance" modalHandler={handleToggler}>
                    <div className="modal-form">
                        <div className="mb-4">
                            <DateSelector />
                        </div>
                        <SelectField
                            className="custom-input"
                            label="Select Class"
                            options={classes}
                            getValue={() => {}}
                        />
                        <SelectField
                            className="custom-input"
                            label="Select Section"
                            options={['A', 'B', 'C']}
                            getValue={() => {}}
                        />
                        <div className="button-container">
                            <OutlineBtn title="Present All" color={colors.primary} />
                            <OutlineBtn title="Absent All" color={colors.primary} />
                        </div>
                        <div className="attendance-table">
                           {
                               students.map(item=>(
                                   <AttendanceCard data={item} />
                               ))
                           }
                        </div>
                        <Button className="session-button">Update Attendance</Button>
                    </div>
                </ModalBox>
            ) : null}
            <DailyAttendance triggerModal={handleToggler} />
        </div>
    );
};

export default index;
