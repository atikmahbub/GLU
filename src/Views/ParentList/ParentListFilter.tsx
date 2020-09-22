import { Box, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import FormControlInput from '../../components/Form/FormControlInput';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';
import { colors } from '../../Styles/colors';

const useStyles = makeStyles({
    parent: {
        backgroundColor: colors.lighterPrimary,
        padding: '1.875rem',
        paddingTop: '0.3rem',
    },
    mt:{
        marginTop: '1.4rem'
    }
});
const ParentListFilter = () => {
    const classes = useStyles();
    return (
        <Box className={classes.parent}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <SelectFieldUnderline
                        className="custom-sm-txt-dashbord"
                        label="Name"
                        options={[]}
                        getValue={() => {}}
                    />
                </Grid>
                <Grid item xs={12} md={6}></Grid>
                <Grid item xs={12} md={3}>
                    <FormControlInput
                        name=""
                        id=""
                        fullWidth={true}
                        rootClassName={classes.mt}
                        placeholder="Search"
                        value=""
                        icon={<i className="icon-Search_Nav" />}
                        onChange={() => {}}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default ParentListFilter;
