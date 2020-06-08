import React from 'react';
import { Typography, Button } from '@material-ui/core';

interface AddButtonProps {
    icon?: any,
    title: string,
    btnTitle: string,
    btnIcon?: any
}
const AddButton: React.FunctionComponent<AddButtonProps> = ({icon, title, btnTitle, btnIcon}) => {
    return (
        <div className="student-header-container">
            <div className="student-header">
                <div className="img-container">
                    {icon}
    <Typography className="heading">{title}</Typography>
                </div>
                <Button startIcon={btnIcon} className="rounded-btn">
                   {btnTitle}
                </Button>
            </div>
        </div>
    );
};

export default AddButton;
