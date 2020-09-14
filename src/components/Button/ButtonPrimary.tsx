import React, { FC, memo } from 'react';
import classNames from 'classnames';
import Button, { ButtonProps } from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { BaseProps } from '@material-ui/core/OverridableComponent';

const useStyles = makeStyles({
    root: {
        padding: 0,
        minWidth: 'fit-content',
        width: 'fit-content',
        height: 'fit-content',
        textTransform: 'unset',
        fontWeight: 400,
        color: '#000',
        '&:hover': {
            background: 'unset',
            color: '#000',
        },
    },
    outlined: {
        borderRadius: 0,
        padding: '0.3125rem 1.5625rem'
    },
});

interface IButtonPrimary extends ButtonProps, BaseProps<any> {}

const ButtonPrimary: FC<IButtonPrimary> = ({ className, children, ...props }) => {
    const classes = useStyles();
    return (
        <Button
            disableRipple
            className={classNames(classes.root, className)}
            classes={{ outlined: classes.outlined }}
            {...props}
        >
            {children}
        </Button>
    );
};

export default memo(ButtonPrimary);
