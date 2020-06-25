import React from 'react';
import { Typography } from '@material-ui/core';
import commonImg from '../../Assets/images';

interface props {
    name: string;
    phone: string;
    email: string;
}
const HeadDepartment: React.FunctionComponent<props> = ({ name, phone, email}) => {
    return (
        <div className="parent-child-container">
            <img src={commonImg.photo} alt="" />
            <div className="student-info">
                <Typography className="heading">{name}</Typography>
                <Typography className="title">{phone}</Typography>
                <Typography className="title">{email}</Typography>
            </div>
        </div>
    );
};

export default HeadDepartment;
