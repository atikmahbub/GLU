import React from 'react';
import { Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

interface props {
    fieldName?: string;
}
const SelectWithLabel: React.FunctionComponent<props> = ({  fieldName }) => {
    return (
        <div className="input__with__label">
            <Typography className="fieldName">{fieldName}</Typography>
            <div className="select-w-icon">
            <select className="inputfield">
                <option >Select</option>
            </select>
            <div className="icon-container">
                <ExpandMore className="icon"/>
            </div>
            </div>
        </div>
    );
};

export default SelectWithLabel;
