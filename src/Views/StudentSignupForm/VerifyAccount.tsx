import React, { useContext } from 'react';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';
import UnderLineAddornmentSingleIcon from '../../components/Inputs/UnderLineAddornmentSingleIcon';
import { Typography } from '@material-ui/core';
import { registerContext } from './Index';

interface props {
    onClick?: () => void;
}
const VerifyAccount: React.FunctionComponent<props> = ({ onClick }) => {
    const context = useContext(registerContext);

    return (
        <div className="info__container">
            <div className="row">
                <div className="col-md-4 mb-3">
                    <SelectFieldUnderline
                        className="custom-adornment-input mb-3"
                        label="Mobile Number"
                        options={['+91']}
                        value={context.student.veriCode}
                        getValue={(value: string) => {
                            context.studentHandler.veriCode(value);
                        }}
                    />
                </div>
                <div className="col-md-8 mb-3">
                    <UnderLineAddornmentSingleIcon
                        label=""
                        type="number"
                        className="custom-adornment-input"
                        value={context.student.veriMobile}
                        onChange={context.studentHandler.veriMobile}
                        icon={
                            <Typography className="text" onClick={onClick}>
                                Send Code
                            </Typography>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default VerifyAccount;
