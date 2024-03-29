import React, { FC, ReactNode, memo } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import makeStyles from '@material-ui/core/styles/makeStyles';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles({
    root: {
        width: ({ fullWidth }: any) => (fullWidth ? '100%' : 'fit-content'),
        position: 'relative',
        
    },
    rootColumn: {
        flexDirection: 'column',
    },
    rootRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputRoot: {
        flexGrow: 1,
        minWidth: ({ fullWidth }: any) => (fullWidth ? 'auto' : 250),
        height: '2.75rem',
        '& input': {
            padding: 0,
            height: '100%',
            fontSize: ({ fontSizeVariant }: any) => (fontSizeVariant === 1 ? '1rem' : '1.5625rem'),
            lineHeight: ({ fontSizeVariant }: any) => (fontSizeVariant === 1 ? '1' : '1.875rem'),
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
        height: '100%',
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
        paddingBottom: '1px',
    },
    label: {
        color: '#000',
        marginBottom: 0,
        fontSize: ({ fontSizeVariant }: any) => (fontSizeVariant === 1 ? '1rem' : '1.5625rem'),
        lineHeight: ({ fontSizeVariant }: any) => (fontSizeVariant === 1 ? '1' : '1.875rem'),
    },
    labelTop: {
        marginBottom: '0.6875rem',
    },
    labelLeft: {
        marginRight: '0.6875rem',
    },
});

interface IFormControlInput {
    id: string;
    name: string;
    placeholder?: string;
    value: string;
    type?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    variant?: 'underlined' | 'outlined';
    rounded?: boolean;
    fullWidth?: boolean;
    icon?: ReactNode;
    label?: string;
    labelClassName?: string;
    labelPlacement?: 'left' | 'top';
    rootClassName?: string;
    inputRootClassName?: string;
    fontSizeVariant?: 1 | 2;
}

const FormControlInput: FC<IFormControlInput> = ({
    id,
    name,
    placeholder,
    value,
    type,
    onChange,
    variant,
    rounded,
    fullWidth,
    icon,
    label,
    labelClassName,
    labelPlacement,
    rootClassName,
    inputRootClassName,
    fontSizeVariant,
}) => {
    const classes = useStyles({ icon, rounded, fullWidth, fontSizeVariant });
    return (
        <Grid
            container
            className={classNames(classes.root, rootClassName, {
                [classes.rootColumn]: labelPlacement === 'top',
                [classes.rootRow]: labelPlacement === 'left',
            })}
        >
            {label && (
                <InputLabel
                    className={classNames(classes.label, labelClassName, {
                        [classes.labelTop]: labelPlacement === 'top',
                        [classes.labelLeft]: labelPlacement === 'left',
                    })}
                >
                    {label}
                </InputLabel>
            )}
            {icon && (
                <Grid
                    item
                    container
                    alignItems="center"
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
                type={type}
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
    variant: 'underlined',
    labelPlacement: 'top',
    fontSizeVariant: 1,
    type: 'text'
};

export default memo(FormControlInput);
