import React from 'react';
import { Typography, Button } from '@material-ui/core';
import OutlineButton from '../../components/Button/OutlineButton';

interface props {
    title: string;
    heading1: string;
    heading2: string;
    heading3: string;
    handler: ()=> void;
}
const PreviewCard: React.FunctionComponent<props> = ({ title, heading1, heading2, heading3, handler }) => {
    return (
        <div className="info__container">
            <div className="preview">
                <div className="button__title__row">
                    <Typography className="title">{title}</Typography>
                    <div className="button-group">
                        <Button className="text-button">Edit</Button>
                        <Button className="text-button">Delete</Button>
                    </div>
                </div>
                <Typography variant="h5" className="heading">
                    {heading1}
                </Typography>
                <Typography variant="h5" className="heading">
                    {heading2}
                </Typography>
                <Typography variant="h5" className="heading">
                    {heading3}
                </Typography>
                <div className="mb-4"></div>
                <OutlineButton text="Add More" btnClick={()=>handler()} />
            </div>
        </div>
    );
};

export default PreviewCard;
