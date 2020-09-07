import React from 'react';
import { Grid } from '@material-ui/core';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';

const Filter = () => {
    return (
        <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
            <SelectFieldUnderline
                className="custom-sm-txt-dashbord"
                label="Year Group"
                options={[]}
                getValue={() => {}}
            />
        </Grid>
        <Grid item xs={12} md={3}>
            <SelectFieldUnderline
                className="custom-sm-txt-dashbord"
                label="Form Group"
                options={[]}
                getValue={() => {}}
            />
        </Grid>
        <Grid item xs={12} md={3}>
            <SelectFieldUnderline
                className="custom-sm-txt-dashbord"
                label="Date"
                options={[]}
                getValue={() => {}}
            />
        </Grid>
        <Grid item xs={12} md={3}>
            <SelectFieldUnderline
                className="custom-sm-txt-dashbord"
                label="Subject"
                options={[]}
                getValue={() => {}}
            />
        </Grid>
    </Grid>
    );
}

export default Filter;
