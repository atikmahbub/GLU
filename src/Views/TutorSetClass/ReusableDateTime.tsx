import React, { useState } from 'react';
import { TextField, Typography } from '@material-ui/core';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';

const ReusableDateTime: React.FunctionComponent = () => {
    const daysArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const weekArray = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
    const [toggleWeeks, setToggleWeeks] = useState(false);
    const [toggleDays, setToggleDays] = useState(false);
    const [selectValue, setValue] = useState('Never');
    const addSchedule = (value) => {
        setValue(value);
        if (value == 'Never') {
            setToggleDays(false);
            setToggleWeeks(false);
        } else if (value == 'Every Week' || value == 'Every 2 Weeks') {
            setToggleDays(true);
            setToggleWeeks(false);
        } else if (value == 'Every Month') {
            setToggleDays(true);
            setToggleWeeks(true);
        }
    };
    return (
        <>
            <div className="reusableDateandTime">
                <div className="row">
                    <div className="col-md-5 p-0">
                        <TextField className="line-input" label="Date" fullWidth value="9:25AM" />
                    </div>
                    <div className="col-md-7 p-0">
                        <div className="sub_rows">
                            <div className="input_row">
                                <div className="input_text">
                                    <SelectFieldUnderline
                                        label="Start Time"
                                        value="9.25am"
                                        className="custom-adornment-input"
                                        options={['9.25am']}
                                        getValue={() => {}}
                                    />
                                </div>
                                <div className="input_text">
                                    <SelectFieldUnderline
                                        label="End Time"
                                        value="9.25am"
                                        className="custom-adornment-input"
                                        options={['9.25am']}
                                        getValue={() => {}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 p-0">
                        <SelectFieldUnderline
                            label="Repeat"
                            value={selectValue}
                            className="custom-adornment-input"
                            options={['Never', 'Every Week', 'Every 2 Weeks', 'Every Month']}
                            getValue={(value) => addSchedule(value)}
                        />
                    </div>

                    {toggleWeeks && (
                        <div className="col-md-12">
                            <div className="week_container">
                                <div className="row">
                                    <Typography className="text">Choose</Typography>
                                </div>
                                <div className="row choose_weeks">
                                    {weekArray.map((val, index) => (
                                        <Typography className="boxes" key={index}>
                                            {val}
                                        </Typography>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                    {toggleDays && (
                        <div className="col-md-12">
                            <div className="week_container">
                                <div className="row">
                                    <Typography className="text">On</Typography>
                                </div>
                                <div className="row choose_weeks">
                                    {daysArray.map((val, index) => (
                                        <Typography className="boxes" key={index}>
                                            {val}
                                        </Typography>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="col-md-12 p-0 horizontalline"></div>
                </div>
            </div>
        </>
    );
};

export default ReusableDateTime;
