import React from 'react';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';
import UnderLineAddornmentSingleIcon from '../../components/Inputs/UnderLineAddornmentSingleIcon';
import { Typography } from '@material-ui/core';

const VerifyAccount = () => {
    return (
        <div className="info__container">
            <div className="row">
                <div className="col-md-4 mb-3">
                <SelectFieldUnderline
                        className="custom-adornment-input mb-3"
                        label="Mobile Number"
                        options={[]}
                        getValue={() => {}}
                    />
                </div>
                <div className="col-md-8 mb-3">
                <UnderLineAddornmentSingleIcon
                        label=""
                        className="custom-adornment-input"
                        icon={<Typography className="text">Send Code</Typography>}
                    />
                </div>
            </div>
        </div>
    );
}

export default VerifyAccount;
