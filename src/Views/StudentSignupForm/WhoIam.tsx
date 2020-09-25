import React, { useState, useEffect } from 'react';
import { FormControl, FormControlLabel, RadioGroup, Radio, makeStyles } from '@material-ui/core';
import { colors } from '../../Styles/colors';

const useStyles = makeStyles({
    icon: {
        color: colors.black,
    },
});

interface props {
    whoAmIHandler: (value: string) => void;
}
const WhoIam: React.FunctionComponent<props> = ({ whoAmIHandler }) => {
    const classes = useStyles();
    const [value, setValue] = useState('student');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    useEffect(() => {
        whoAmIHandler(value);
    }, [value]);
    return (
        <FormControl component="fieldset">
            <RadioGroup aria-label="whoareu" name="whoareu" value={value} onChange={handleChange}>
                <FormControlLabel
                    value="student"
                    className="title"
                    control={
                        <Radio
                            color="default"
                            checkedIcon={<i className={`icon-Stop_Recording ${classes.icon}`} />}
                            icon={<i className={`icon-Circle ${classes.icon}`} />}
                        />
                    }
                    label="I am a Student"
                />
                <FormControlLabel
                    value="parent"
                    className="title"
                    control={
                        <Radio
                            color="default"
                            checkedIcon={<i className={`icon-Stop_Recording ${classes.icon}`} />}
                            icon={<i className={`icon-Circle ${classes.icon}`} />}
                        />
                    }
                    label="I am a Parent"
                />
                <FormControlLabel
                    value="teacher"
                    className="title"
                    control={
                        <Radio
                            color="default"
                            checkedIcon={<i className={`icon-Stop_Recording ${classes.icon}`} />}
                            icon={<i className={`icon-Circle ${classes.icon}`} />}
                        />
                    }
                    label="I am a Tutor"
                />
            </RadioGroup>
        </FormControl>
    );
};

export default WhoIam;
