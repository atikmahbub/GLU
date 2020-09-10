import React, { FC, memo } from 'react';
import classNames from 'classnames';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import makeStyles from '@material-ui/core/styles/makeStyles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { ISelectOption } from './types';

const useStyles = makeStyles({
    root: {
        width: ({ fullWidth }: any) => fullWidth ? '100%' : 'fit-content',
        height: 'fit-content',
    },
    rootColumn: {
        flexDirection: 'column',
    },
    rootRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        color: '#000',
        marginBottom: 0
    },
    labelTop: {
        marginBottom: '0.6875rem',
    },
    labelLeft: {
        marginRight: '0.6875rem',
    },
    inputRoot: {
        flexGrow: 1,
        width: 250,
        height: 44,
        cursor: 'default',
        '&::before': {
            display: 'none',
        },
        '&::after': {
            display: 'none',
        },
        '& .MuiSelect-select': {
            padding: '0 0.6875rem',
            height: '100%',
            color: ({ value }: any) => (value ? '#000' : '#5F5F5F'),
            '&:focus': {
                background: 'inherit',
            },
        },
        '&.Mui-focused': {
            borderColor: '#000',
        },
    },
    inputRootUnderlined: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
    },
    inputRootOutlined: {
        border: '1px solid rgba(0, 0, 0, 0.25)',
        borderRadius: ({ rounded }: any) => (rounded ? 5 : 0),
    },
});

type FormControlSelectProps = {
    value: string;
    label?: string;
    placeholder?: string;
    options: ISelectOption[];
    onChange: () => void;
    variant?: 'underlined' | 'outlined';
    rounded?: boolean;
    rootClassName?: string;
    inputRootClassName?: string;
    labelPlacement?: 'left' | 'top';
    fullWidth?: boolean;
};

const FormControlSelect: FC<FormControlSelectProps> = ({
    value,
    label,
    options,
    onChange,
    variant,
    rounded,
    placeholder,
    rootClassName,
    inputRootClassName,
    labelPlacement,
    fullWidth
}) => {
    const classes = useStyles({ rounded, value, fullWidth });
    return (
        <Grid
            container
            className={classNames(classes.root, rootClassName, {
                [classes.rootColumn]: labelPlacement === 'top',
                [classes.rootRow]: labelPlacement === 'left'
            })}
        >
            {label && (
                <InputLabel
                    className={classNames(classes.label, {
                        [classes.labelTop]: labelPlacement === 'top',
                        [classes.labelLeft]: labelPlacement === 'left',
                    })}
                >
                    {label}
                </InputLabel>
            )}
            <Select
                native
                value={value}
                className={classNames(classes.inputRoot, inputRootClassName, {
                    [classes.inputRootUnderlined]: variant === 'underlined',
                    [classes.inputRootOutlined]: variant === 'outlined',
                })}
                IconComponent={KeyboardArrowDownIcon}
                onChange={onChange}
            >
                {placeholder && (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                )}
                {options.map(({ label, value }: ISelectOption, index) => (
                    <option value={value} key={index}>
                        {label}
                    </option>
                ))}
            </Select>
        </Grid>
    );
};

FormControlSelect.defaultProps = {
    options: [],
    onChange: () => {},
    variant: 'underlined',
    labelPlacement: 'top',
};

export default memo(FormControlSelect);
