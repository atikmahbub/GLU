import React from 'react';
import Identity from './Identity';
import OutlineButton from '../../components/Button/OutlineButton';
import { Typography } from '@material-ui/core';

const IdentyCard = () => {
    return (
        <div >
            <Identity/>
            <div className="upload-container mb-4">
                <OutlineButton text="Upload" />
                <Typography className="title">Max file size 5MB</Typography>
            </div>
        </div>
    );
}

export default IdentyCard;
