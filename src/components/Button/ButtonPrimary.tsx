import React, { FC, memo } from 'react';
import classNames from 'classnames';
import Button, { ButtonProps } from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        padding: 0,
        minWidth: 'fit-content',
        width: 'fit-content',
        height: 'fit-content',
        textTransform: 'unset',
        fontWeight: 400,
        '&:hover': {
            background: 'unset',
        },
    },
});

const ButtonPrimary: FC<ButtonProps> = ({ className, children, ...props }) => {
    const classes = useStyles();
    return (
        <Button disableRipple className={classNames(classes.root, className)} {...props}>
            {children}
        </Button>
    );
};

export default memo(ButtonPrimary);
