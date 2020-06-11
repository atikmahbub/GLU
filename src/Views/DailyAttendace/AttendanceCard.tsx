import React, { useState } from 'react';
import { Typography, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

interface props{
    data?: string
}
const AttendanceCard: React.FunctionComponent<props> = ({data}) => {
    const [available, setAvailable] = useState("");

    const handleChange =(e: React.ChangeEvent<HTMLInputElement>) => {
        setAvailable((e.target as HTMLInputElement).value)
    }
    return (
        <div className="attendance-card">
        <Typography className="name">{data}</Typography>
        <div className="attendance-checkbox">
            <RadioGroup
                className="radio-group"
                aria-label="gender"
                name="attendance"
                value={available}
                onChange={handleChange}>
                <FormControlLabel className="title" value="Present" control={<Radio className="icon" />} label="Present" />
                <FormControlLabel className="title absent" value="Absent" control={<Radio className="icon" />} label="Absent" />
            </RadioGroup>
        </div>
    </div>
    );
}

export default AttendanceCard;
