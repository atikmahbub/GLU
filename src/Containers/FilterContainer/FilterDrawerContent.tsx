import React, { FC, memo, useCallback, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import { Tabs, Tab } from '../../components/Tabs';
import { filters, filterTypes } from './data';

const useStyles = makeStyles({
    buttonFilterType: {
        fontSize: '5rem',
        lineHeight: '5rem',
    },
    tabsContainer: {
        marginBottom: '5rem'
    },
    tabRoot: {
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
        marginRight: '2.1875rem',
        '&:last-child': {
            marginRight: 0
        }
    },
});

const FilterDrawerContent: FC = () => {
    const classes = useStyles();
    const [activeFilter, setActiveFilter] = useState('all');

    const handleActiveFilterChange = useCallback((_, value) => {
        setActiveFilter(value);
    }, []);

    return (
        <Grid container direction="column">
            <Grid container className={classes.tabsContainer}>
                <Tabs value={activeFilter} onChange={handleActiveFilterChange}>
                    {filterTypes.map(({ label, value }, index) => (
                        <Tab
                            key={index}
                            value={value}
                            label={label}
                            className={classes.tabRoot}
                        />
                    ))}
                </Tabs>
            </Grid>
            <Grid container direction="column">
                {filters.map(({ value }, index) => (
                    <ButtonPrimary key={index} className={classes.buttonFilterType}>
                        {value}
                    </ButtonPrimary>
                ))}
            </Grid>
        </Grid>
    );
};

export default memo(FilterDrawerContent);
