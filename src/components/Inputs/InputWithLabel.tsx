import React from 'react';
import { Typography } from '@material-ui/core';

interface props{
    type?: string;
    fieldName?: string;
    fieldClass?:any;
}
const InputWithLabel:React.FunctionComponent<props> = ({type, fieldName, fieldClass}) => {
    return (
        <div className="input__with__label">
            <Typography className={`fieldName ${fieldClass}`}>{fieldName}</Typography>
            <input type={type} className="inputfield"  />
        </div>
    );
};

export default InputWithLabel;
