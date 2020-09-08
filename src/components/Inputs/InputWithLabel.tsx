import React from 'react';
import { Typography } from '@material-ui/core';

interface props{
    type?: string;
    fieldName?: string;
    fieldClass?:any;
    mt?:string;
    placeholder?:string;
}
const InputWithLabel:React.FunctionComponent<props> = ({type, fieldName, fieldClass, mt, placeholder}) => {
    return (
        <div className={`input__with__label ${mt}`}>
            <Typography className={`fieldName ${fieldClass}`}>{fieldName}</Typography>
            <input type={type} className="inputfield" placeholder={placeholder}  />
        </div>
    );
};

export default InputWithLabel;
