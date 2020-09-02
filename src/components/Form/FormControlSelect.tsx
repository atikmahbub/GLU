import React, { FC, memo } from 'react';
import classNames from 'classnames';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import makeStyles from '@material-ui/core/styles/makeStyles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles({
    root: {
        width: 'fit-content',
        height: 40
    },
    label: {
        marginBottom: 0,
        marginRight: '0.6875rem',
        color: '#000'
    },
    inputRoot: {
        minWidth: 150,
        height: 'inherit',
        border: '1px solid rgba(0, 0, 0, 0.25)',
        '&::before': {
            display: 'none'
        },
        '&::after': {
            display: 'none'
        },
        '& .MuiSelect-select': {
            padding: '0 0.6875rem',
            '&:focus': {
                background: 'inherit'
            }
        }
    }
})

type FormControlSelectProps = {
    value: string;
    label?: string;
    options: object[];
    onChange: () => void;
    rootClassName?: string;
}

const FormControlSelect: FC<FormControlSelectProps> = ({ value, label, options, onChange, rootClassName }) => {
    const classes = useStyles()
    return (
        <Grid container className={classNames(classes.root, rootClassName)} alignItems="center">
            {label && <InputLabel className={classes.label}>{label}</InputLabel>}
            <Select
                native
                value={value}
                className={classes.inputRoot}
                IconComponent={KeyboardArrowDownIcon}
                onChange={onChange}
            >
                {options.map(({ label, value }: any, index) => (
                    <option value={value} key={index}>{label}</option>
                ))}
            </Select>
        </Grid>
    )
}

FormControlSelect.defaultProps = {
    options: [],
    onChange: () => {}
}

export default memo(FormControlSelect)
