import React from 'react';
import { TextField } from '@material-ui/core';
import { Facebook } from '@material-ui/icons';

interface props{
    inputName?: string,
    icon: React.ReactNode
}
const LinkContainer: React.FunctionComponent<props> = ({inputName, icon}) => {
    return (
        <div className="social-link-container">
            <div className="left-part">
                {icon}
            </div>
            <div className="right-part">
                <TextField variant="standard" className="custom-input mb-0" label={inputName} fullWidth />
            </div>
        </div>
    );
};

export default LinkContainer;
