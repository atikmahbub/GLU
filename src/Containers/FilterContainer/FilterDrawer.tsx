import React, { FC, memo, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import { Tabs, Tab } from '../../components/Tabs';
import Drawer from '../../components/Drawer';
import { FilterValue, IFilterDataElement, IFilterElement } from './types';

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
    data: IFilterDataElement[];
    onChange: (item: IFilterDataElement) => void;
}

const initialFilter: IFilterElement[] = [
    {
        value: null,
        label: 'All',
    },
];

const FilterDrawer: FC<IFilterDrawer> = ({ open, onClose, filters, data, onChange }) => {
    const classes = useStyles();
    const [activeFilter, setActiveFilter] = useState<FilterValue>(null);

    const handleActiveFilterChange = (_: any, value: FilterValue) => {
        setActiveFilter(value);
    };

    const handleChange = (item: IFilterDataElement) => {
        onChange(item)
        onClose()
    }

    const filteredData =
        activeFilter ? data.filter(({ type }: IFilterDataElement) => type === activeFilter) : data;

    return (
        <Drawer
            position="left"
            width="44vw"
            open={open}
            onClose={onClose}
            headerComponent={
                <Grid container>
                    <Tabs value={activeFilter} onChange={handleActiveFilterChange}>
                        {[...initialFilter, ...filters].map(({ label, value }: IFilterElement, index) => (
                            <Tab key={index} value={value} label={label} className={classes.tabRoot} />
                        ))}
                    </Tabs>
                </Grid>
            }
        >
            <Grid container direction="column">
                <Grid container direction="column">
                    {filteredData.map((item: IFilterDataElement, index) => (
                        <ButtonPrimary
                            key={index}
                            onClick={() => handleChange(item)}
                            className={classes.buttonFilterType}
                        >
                            {item.label}
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
