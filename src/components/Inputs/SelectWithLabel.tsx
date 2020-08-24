import React from 'react';
import { Typography } from '@material-ui/core';

interface props {
    type?: string;
    fieldName?: string;
}
const SelectWithLabel: React.FunctionComponent<props> = ({ type, fieldName }) => {
    return (
        <div className="input__with__label">
            <Typography className="fieldName">{fieldName}</Typography>
            <select className="inputfield">
                <option >Select</option>
            </select>
        </div>
    );
};

export default SelectWithLabel;
