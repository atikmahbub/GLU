import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';
import FormControlInput from '../../components/Form/FormControlInput';
import { Search } from '@material-ui/icons';

const useStyles = makeStyles(({
    parent:{
        padding: ' 0.5rem 1.875rem',
        backgroundColor: '#f3f7ff',
        paddingBottom: '1.5rem'
    }
}))

const FormFilter = () => {
    const classes = useStyles();
    return (
        <Grid container alignItems="center" justify="space-between" className={classes.parent}>
            <Grid item xs={12} md={2}>
                <SelectFieldUnderline
                    className="custom-sm-txt-dashbord"
                    label="Form Groups"
                    options={[]}
                    getValue={() => {}}
                />
            </Grid>
            <Grid item xs={12} md={2}>
                <FormControlInput
                    id="search"
                    name="search"
                    placeholder="Search"
                    value=""
                    icon={<Search />}
                    onChange={() => {}}
                />
            </Grid>
        </Grid>
    );
};

export default FormFilter;
