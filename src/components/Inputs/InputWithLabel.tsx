import React from 'react';
import { Typography } from '@material-ui/core';

interface props {
    type?: string;
    fieldName?: string;
    fieldClass?: any;
    mt?: string;
    placeholder?: string;
    onChange?: (e:React.ChangeEvent<HTMLInputElement>)=>void;
    value?:string | number
}
const InputWithLabel: React.FunctionComponent<props> = ({ type, fieldName, fieldClass, mt, placeholder,value, onChange }) => {
    return (
        <div className={`input__with__label ${mt}`}>
            <Typography className={`fieldName ${fieldClass}`}>{fieldName}</Typography>
            <input type={type} className="inputfield" value={value}  onChange={onChange} placeholder={placeholder} />
        </div>
    );
};

export default InputWithLabel;
