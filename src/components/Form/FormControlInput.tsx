import React, { FC, ReactNode, memo } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        width: ({ fullWidth }: any) => fullWidth ? '100%' : 'fit-content',
        position: 'relative',
    },
    inputRoot: {
        flexGrow: 1,
        width: 250,
        height: 44,
        '& .MuiInputBase-input': {
            padding: 0,
            height: '100%',
            fontSize: '1rem',
        },
    },
    inputRootUnderlined: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
        '&.Mui-focused': {
            borderBottom: '1px solid rgba(0, 0, 0, 1)',
        },
        '& .MuiInputBase-input': {
            paddingLeft: ({ icon }: any) => (icon ? 25 : 0),
        },
    },
    inputRootOutlined: {
        border: '1px solid rgba(0, 0, 0, 0.25)',
        borderRadius: ({ rounded }: any) => (rounded ? 5 : 0),
        '&.Mui-focused': {
            border: '1px solid rgba(0, 0, 0, 1)',
        },
        '& .MuiInputBase-input': {
            paddingLeft: ({ icon }: any) => (icon ? 35 : 10),
            paddingRight: 10,
        },
    },
    iconContainer: {
        position: 'absolute',
        width: 20,
        height: 20,
        pointerEvents: 'none',
        '& svg': {
            display: 'block',
            width: 'inherit',
            height: 'inherit',
        },
    },
    iconContainerOutlined: {
        width: 35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

type FormControlInputProps = {
    id: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: () => void;
    variant?: 'underlined' | 'outlined';
    rounded?: boolean;
    fullWidth?: boolean;
    icon?: ReactNode;
    rootClassName?: string;
    inputRootClassName?: string;
};
const FormControlInput: FC<FormControlInputProps> = ({
    id,
    name,
    placeholder,
    value,
    onChange,
    variant,
    rounded,
    fullWidth,
    icon,
    rootClassName,
    inputRootClassName
}) => {
    const classes = useStyles({ icon, rounded, fullWidth });
    return (
        <Grid container alignItems="center" className={classNames(classes.root, rootClassName)}>
            {icon && (
                <Grid
                    item
                    className={classNames(classes.iconContainer, {
                        [classes.iconContainerOutlined]: variant === 'outlined',
                    })}
                >
                    {icon}
                </Grid>
            )}
            <InputBase
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={classNames(classes.inputRoot, inputRootClassName, {
                    [classes.inputRootUnderlined]: variant === 'underlined',
                    [classes.inputRootOutlined]: variant === 'outlined',
                })}
            />
        </Grid>
    );
};

FormControlInput.defaultProps = {
    onChange: () => {},
    variant: 'underlined'
};

export default memo(FormControlInput);
