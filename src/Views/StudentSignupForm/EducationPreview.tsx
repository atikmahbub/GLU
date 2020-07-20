import React from 'react';
import { Typography, Button } from '@material-ui/core';
import OutlineButton from '../../components/Button/OutlineButton';

const EducationPreview: React.FunctionComponent = () => {
    return (
        <div className="info__container">
            <div className="preview">
                <div className="button__title__row">
                    <Typography className="title">Education 1</Typography>
                    <div className="button-group">
                        <Button className="text-button">Edit</Button>
                        <Button className="text-button">Delete</Button>
                    </div>
                </div>
                <Typography variant="h5" className="heading">Dane Court Grammar </Typography>
                <Typography variant="h5" className="heading">A-Level</Typography>
                <Typography variant="h5" className="heading">Maths, Enlgish, ICT</Typography>
                <div className="mb-4"></div>
                <OutlineButton text="Add More"/>
            </div>
        </div>
    );
};

export default EducationPreview;
