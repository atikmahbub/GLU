import React from 'react';
import commonImg from '../../../Assets/images';
import { TextField } from '@material-ui/core';
import UnderLineAddornment from '../../../components/Inputs/UnderLineAddornment';
const Header: React.FunctionComponent = () => {
    return (
        <>
            <div className="detail__box">
                <h2 className="detail__heading">Your Details</h2>
                <TextField className="inputs first" label="First Name" fullWidth />
                <TextField className="inputs" label="Last Name" fullWidth />
                <TextField className="inputEmail" label="Email" fullWidth />
                <TextField className="inputEmail" label="Location" fullWidth />
                <UnderLineAddornment label="Password" />
            </div>
        </>
    );
};

export default Header;
