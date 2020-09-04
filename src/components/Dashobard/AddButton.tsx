import React from 'react';
import { Typography, Button, Box, makeStyles, Grid } from '@material-ui/core';
import SelectField from '../Inputs/SelectField';
import { MailOutline } from '@material-ui/icons';

interface AddButtonProps {
    icon?: any;
    title?: string;
    btnTitle?: string;
    btnIcon?: any;
    trigger?: () => void;
    style?: object;
    component?: string;
    hideBtn?: boolean;
    bulkbtn?: boolean;
    bulkText?: string;
    bulkTrigger?: () => void;
    notificationText?: string;
    notificationIcon?: React.ReactNode;
    showNotification?: boolean;
}

const useStyle = makeStyles({
    buttonContainer: {
        maxWidth: '26rem',
    },
});
const AddButton: React.FunctionComponent<AddButtonProps> = ({
    icon,
    title,
    btnTitle,
    btnIcon,
    trigger,
    component,
    hideBtn,
    bulkbtn,
    bulkText,
    bulkTrigger,
    notificationText,
    notificationIcon,
    showNotification,
    ...props
}) => {
    const classes = useStyle();
    const getComponent = () => {
        switch (component) {
            case 'select': {
                return (
                    <div className="dropdown-container">
                        <SelectField
                            className="custom-input mb-0"
                            label="Permission For"
                            options={['Admin', 'Manager', 'Teacher', 'Staff', 'Parent']}
                            getValue={() => {}}
                        />
                    </div>
                );
            }
            case 'notification': {
                return (
                    <Grid container className={classes.buttonContainer} alignItems="center" justify="space-between">
                        {showNotification && (
                            <div {...props} onClick={trigger} className="rounded-btn">
                                {notificationText}
                                {notificationIcon}
                            </div>
                        )}
                        <div {...props} onClick={trigger} className="rounded-btn">
                            {btnTitle}
                            {btnIcon}
                        </div>
                    </Grid>
                );
            }
            default: {
                return (
                    <div {...props} onClick={trigger} className="rounded-btn">
                        {btnTitle}
                        {btnIcon}
                    </div>
                );
            }
        }
    };
    return (
        <div className="student-header-container">
            <div className="student-header">
                <div className="img-container">
                    {icon}
                    <Typography className="heading">{title}</Typography>
                </div>
                {bulkbtn && (
                    <Button
                        {...props}
                        startIcon={btnIcon}
                        style={{ marginLeft: 'auto', marginRight: 5 }}
                        onClick={bulkTrigger}
                        className="rounded-btn"
                    >
                        {bulkText}
                    </Button>
                )}
                {hideBtn ? null : getComponent()}
            </div>
        </div>
    );
};

export default AddButton;
