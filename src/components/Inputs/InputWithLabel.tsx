import React from 'react';
import { Typography } from '@material-ui/core';

interface props{
    type?: string;
    fieldName?: string;
    fieldClass?:any;
    mt?:string
}
const InputWithLabel:React.FunctionComponent<props> = ({type, fieldName, fieldClass, mt}) => {
    return (
        <div className={`input__with__label ${mt}`}>
            <Typography className={`fieldName ${fieldClass}`}>{fieldName}</Typography>
            <input type={type} className="inputfield"  />
        </div>
    );
};

export default InputWithLabel;
