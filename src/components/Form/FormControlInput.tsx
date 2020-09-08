import React, { FC, ReactNode, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'relative',
    },
    inputRoot: {
        height: 42,
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
        '&.Mui-focused': {
            borderBottom: '1px solid rgba(0, 0, 0, 1)',
        },
        '& .MuiInputBase-input': {
            padding: 0,
            height: 42,
            fontSize:'1.125rem',
            paddingLeft: ({ icon }: any) => (icon ? 25 : 0),
        },
    },
    iconContainer: {
        position: 'absolute',
        width: 20,
        height: 20,
        '& svg': {
            display: 'block',
            width: 'inherit',
            height: 'inherit',
        },
    },
});

type FormControlInputProps = {
    id: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: () => void;
    icon?: ReactNode;
};

const FormControlInput: FC<FormControlInputProps> = ({ id, name, placeholder, value, onChange, icon }) => {
    const classes = useStyles({ icon });
    return (
        <Grid container alignItems="center" className={classes.root}>
            <Grid item className={classes.iconContainer}>
                {icon}
            </Grid>
            <InputBase
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={classes.inputRoot}
                fullWidth
            />
        </Grid>
    );
};

FormControlInput.defaultProps = {
    onChange: () => {},
};

export default memo(FormControlInput);
