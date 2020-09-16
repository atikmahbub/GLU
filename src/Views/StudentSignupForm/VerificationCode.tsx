import React, { useContext, useState } from 'react';
import { Typography } from '@material-ui/core';
import OtpInput from 'react-otp-input';
import { registerContext } from './Index';

const VerificationCode: React.FunctionComponent = () => {
    const context = useContext(registerContext);
    const handleOtp = (value: string) => {
        console.log(value);
        context.setState({ ...context.state, otp: value });
    };
    return (
        <div className="info__container">
            <Typography variant="h6" className="small__heading">
                Verification Code
            </Typography>
            <div className="otp-container">
                <OtpInput value={context.state.otp} onChange={handleOtp} numInputs={6} />
            </div>
            <Typography className="mono__text">
                We sent a code to {context.state.student.veriCode}
                {context.state.student.veriMobile}
            </Typography>
            <Typography className="mono__text">
                {' '}
                Didn’t receive a code <span>Resend </span> or <span> Change number </span>
            </Typography>
        </div>
    );
};

export default VerificationCode;
