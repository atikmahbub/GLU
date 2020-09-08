import React, { FC, memo, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import { Tabs, Tab } from '../../components/Tabs';
import Drawer from '../../components/Drawer';
import { IFilterElement } from './types';

const useStyles = makeStyles({
    buttonFilterType: {
        fontSize: '5rem',
        lineHeight: '5rem',
    },
    tabRoot: {
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
        marginRight: '2.1875rem',
        '&:last-child': {
            marginRight: 0,
        },
    },
});

interface IFilterDrawer {
    open: boolean;
    onClose: () => void;
    filters: IFilterElement[];
    data: IFilterElement[];
}

const FilterDrawer: FC<IFilterDrawer> = ({ open, onClose, filters, data }) => {
    const classes = useStyles();
    const [activeFilter, setActiveFilter] = useState('all');

    const handleActiveFilterChange = (_: any, value: string) => {
        setActiveFilter(value);
    };

    const filteredData =
        activeFilter === 'all' ? data : data.filter(({ value }: IFilterElement) => value === activeFilter);

    return (
        <Drawer
            position="left"
            width="44vw"
            open={open}
            onClose={onClose}
            headerComponent={
                <Grid container>
                    <Tabs value={activeFilter} onChange={handleActiveFilterChange}>
                        {filters.map(({ label, value }: IFilterElement, index) => (
                            <Tab key={index} value={value} label={label} className={classes.tabRoot} />
                        ))}
                    </Tabs>
                </Grid>
            }
        >
            <Grid container direction="column">
                <Grid container direction="column">
                    {filteredData.map(({ label }: IFilterElement, index) => (
                        <ButtonPrimary key={index} className={classes.buttonFilterType}>
                            {label}
                        </ButtonPrimary>
                    ))}
                </Grid>
            </Grid>
        </Drawer>
    );
};

FilterDrawer.defaultProps = {
    filters: [],
    data: [],
};

export default memo(FilterDrawer);
