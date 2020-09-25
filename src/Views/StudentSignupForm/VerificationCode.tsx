import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import OtpInput from 'react-otp-input';
import { registerContext } from './Index';

interface props {
    onClick?: (value: string) => void;
    changeNumber?: () => void;
}

const VerificationCode: React.FunctionComponent<props> = ({ onClick, changeNumber }) => {
    const context = useContext(registerContext);
    const handleOtp = (value: string) => {
        console.log(value);
        context.setState({ ...context.state, otp: value });
    };
    const resendPassword = () => {
        if (onClick) {
            context.setState({ ...context.state, otp: '' });
            onClick(context.student.veriMobile);
        }
    };
    return (
        <div className="info__container">
            <Typography variant="h6" className="small__heading">
                verification Code
            </Typography>
            <div className="otp-container">
                <OtpInput value={context.state.otp} onChange={handleOtp} numInputs={6} />
            </div>
            <Typography className="mono__text">
                We sent a code to {context.state.student.veriCode}
                {context.state.student.veriMobile}
            </Typography>
            <Typography className="mono__text">
                Didn’t receive a code <span onClick={resendPassword}>Resend </span> or
                <span onClick={changeNumber}> Change number </span>
            </Typography>
        </div>
    );
};

export default VerificationCode;
