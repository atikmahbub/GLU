import React from 'react';
import { Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

interface props {
    fieldName?: string;
    options: string[];
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    value?: string | number;
}
const SelectWithLabel: React.FunctionComponent<props> = ({ fieldName, value, onChange, options }) => {
    return (
        <div className="input__with__label">
            <Typography className="fieldName">{fieldName}</Typography>
            <div className="select-w-icon">
                <select className="inputfield" value={value} onChange={onChange}>
                    <option>Select</option>
                    {options.map((item: string) => (
                        <option value={item}>{item}</option>
                    ))}
                </select>
                <div className="icon-container">
                    <ExpandMore className="icon" />
                </div>
            </div>
        </div>
    );
};

export default SelectWithLabel;
