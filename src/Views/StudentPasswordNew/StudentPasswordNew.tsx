import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { TextField, Button, Typography } from '@material-ui/core';
import UnderLineAddornment from '../../components/Inputs/UnderLineAddornment';

const StudentPasswordNew = () => {
    return (
        <NavigationMenu absolute>
            <div className="credential__container">
                <div className="credential__form__container">
                    <div className="form-container">
                        <Typography className="title">Make New Password</Typography>
                        <Typography className="sub__title">
                            Enter a password that you’ll be able to remember. Make sure it contains one uppercase and
                            one special character.
                        </Typography>
                        <UnderLineAddornment label="New Password" className="custom-adornment-input mb-5" />
                        <TextField className="line-input mb-5" type="password" label="Confirm Password" fullWidth />
                        <div className="button-container">
                            <Button className="outline-button">Reset</Button>
                        </div>
                    </div>
                </div>
            </div>
        </NavigationMenu>
    );
};

export default StudentPasswordNew;
