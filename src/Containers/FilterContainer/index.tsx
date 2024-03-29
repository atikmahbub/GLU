import React, { FC, useCallback } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TitlePrimary from '../../components/Typographies/TitlePrimary';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import FilterDrawer from './FilterDrawer';
import useToggle from '../../Hooks/useToggle';
import { IFilterDataElement, IFilterElement, SelectedFilterValue } from './types';

const useStyles = makeStyles({
    root: {
        padding: ({ padding }: any) => (padding ? '4.5625rem 3.125rem' : 0),
    },
    filterBtn: {
        fontSize: '2.625rem',
        lineHeight: '2.8125rem',
    },
    sortBtn: {
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
    },
    header: {
        marginBottom: ({ children }: any) => children ? '2.4375rem' : 0,
    },
    headerFilterContainer: {
        paddingLeft: '1.5625rem',
    },
});

function getFilterText(filter: SelectedFilterValue): string {
    return filter ? ' - ' + filter.label : '+';
}

interface IFilterContainer {
    title: string;
    rootClassName?: string;
    padding?: boolean;
    filters?: IFilterElement[];
    filtersData: IFilterDataElement[];
    initialFilterLabel?: string;
    sort?: boolean;
    onFilterChange: (filter: SelectedFilterValue) => void;
    value: SelectedFilterValue;
}

const FilterContainer: FC<IFilterContainer> = ({
    title,
    rootClassName,
    padding,
    filters,
    filtersData,
    sort,
    initialFilterLabel,
    children,
    onFilterChange,
    value,
}) => {
    const classes = useStyles({ padding, children: !!children });
    const [filterDrawer, toggleFilterDrawer] = useToggle(false);
    console.log(value)

    const handleChange = useCallback((filter: IFilterDataElement) => {
        onFilterChange(filter)
    }, []);

    return (
        <Grid container direction="column" className={classNames(classes.root, rootClassName)}>
            <FilterDrawer
                open={filterDrawer}
                onClose={toggleFilterDrawer}
                filters={filters}
                data={filtersData}
                onChange={handleChange}
                initialFilterLabel={initialFilterLabel}
            />
            <Grid container className={classes.header}>
                <Grid container item xs={6}>
                    <TitlePrimary>{title}</TitlePrimary>
                </Grid>
                <Grid
                    container
                    justify="space-between"
                    alignItems="center"
                    item
                    xs={6}
                    className={classes.headerFilterContainer}
                >
                    <ButtonPrimary className={classes.filterBtn} onClick={toggleFilterDrawer}>
                        Filter
                        {getFilterText(value)}
                    </ButtonPrimary>
                    {sort && (
                        <ButtonPrimary className={classes.sortBtn}>
                            <ExpandMoreIcon />
                            Sort
                        </ButtonPrimary>
                    )}
                </Grid>
            </Grid>
            {children && <Grid container>{children}</Grid>}
        </Grid>
    );
};

FilterContainer.defaultProps = {
    filters: [],
    filtersData: [],
    sort: true,
    onFilterChange: () => {}
};

export default FilterContainer;
