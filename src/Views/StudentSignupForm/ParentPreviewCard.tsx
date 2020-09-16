import React from 'react';
import { Typography, Button } from '@material-ui/core';
import OutlineButton from '../../components/Button/OutlineButton';

interface props {
    title: string;
    handler: () => void;
    data: any;
    handleEdit: (edit: number) => void;
    handleDelete: (delId: number) => void;
}
const ParentPreviewCard: React.FunctionComponent<props> = ({ title, handler, data, handleEdit, handleDelete }) => {
    return (
        <div className="info__container">
            {data.map((item: any, i: number) => (
                <div className="preview">
                    <div className="button__title__row">
                        <Typography className="title">
                            {title} {i + 1}
                        </Typography>
                        <div className="button-group">
                            <Button className="text-button" onClick={() => handleEdit(i)}>
                                Edit
                            </Button>
                            <Button className="text-button" onClick={() => handleDelete(i)}>
                                Delete
                            </Button>
                        </div>
                    </div>
                    <Typography variant="h5" className="heading">
                        {item.firstName}
                    </Typography>
                    <Typography variant="h5" className="heading">
                        {item.email}
                    </Typography>
                    <Typography variant="h5" className="heading">
                        {item.phoneCode} {item.phoneNum}
                    </Typography>
                </div>
            ))}
            <div className="my-4">
                <OutlineButton text="Add More" btnClick={() => handler()} />
            </div>
        </div>
    );
};

export default ParentPreviewCard;
