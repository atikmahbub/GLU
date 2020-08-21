import React from 'react';
import { TextField } from '@material-ui/core';
import OutlineButton from '../../components/Button/OutlineButton';

const SocialLinks: React.FunctionComponent = () => {
    return (
        <div className="social__media__container">
            <div className="row">
            <div className="col-md-12">
                    <TextField className="line-input2" label="Facebook" fullWidth />
                    <TextField className="line-input2" label="Twitter" fullWidth />
                    <TextField className="line-input2" label="Instagram" fullWidth />
                    <OutlineButton text="Add More"/>
                </div>
                
            </div>
        </div>
    );
}

export default SocialLinks;
