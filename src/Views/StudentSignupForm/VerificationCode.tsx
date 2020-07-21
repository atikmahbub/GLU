import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import OtpInput from 'react-otp-input';

const VerificationCode: React.FunctionComponent = () => {
    const [OTP, setOTP] = useState('');
    return (
        <div className="info__container">
            <Typography variant="h6" className="small__heading">
                Verification Code
            </Typography>
            <div className="otp-container">
                <OtpInput value={OTP} onChange={setOTP} numInputs={6} />
            </div>
            <Typography className="mono__text">We sent a code to +44 7711 805 667</Typography>
            <Typography className="mono__text"> Didn’t receive a code <span>Resend </span> or <span> Change number </span></Typography>

        </div>
    );
};

export default VerificationCode;
