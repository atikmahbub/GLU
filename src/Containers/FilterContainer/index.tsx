import React, { FC, useCallback, useState } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TitlePrimary from '../../components/Typographies/TitlePrimary';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import FilterDrawer from './FilterDrawer';
import useToggle from '../../Hooks/useToggle';
import { IFilterDataElement, IFilterElement } from './types';

const useStyles = makeStyles({
    root: {
        padding: ({ padding }: any) => padding ? '4.5625rem 3.125rem' : 0
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
        marginBottom: '2.4375rem',
    },
    headerFilterContainer: {
        paddingLeft: '1.5625rem',
    },
});

function getFilterText(filter: string): string {
    return filter ? ' - ' + filter : '+';
}

type CardsGridContainerProps = {
    title: string;
    rootClassName?: string;
    padding?: boolean;
    filters: IFilterElement[];
    filtersData: IFilterDataElement[];
    sort?: boolean;
};

const FilterContainer: FC<CardsGridContainerProps> = ({
    title,
    rootClassName,
    padding,
    filters,
    filtersData,
    sort,
    children,
}) => {
    const classes = useStyles({ padding });
    const [filterDrawer, toggleFilterDrawer] = useToggle(false);
    const [activeFilter, setActiveFilter] = useState('');

    const handleChange = useCallback(({ label }: IFilterDataElement) => {
        setActiveFilter(label);
    }, []);

    return (
        <Grid container direction="column" className={classNames(classes.root, rootClassName)}>
            <FilterDrawer
                open={filterDrawer}
                onClose={toggleFilterDrawer}
                filters={filters}
                data={filtersData}
                onChange={handleChange}
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
                        {getFilterText(activeFilter)}
                    </ButtonPrimary>
                    {sort && (
                        <ButtonPrimary className={classes.sortBtn}>
                            <ExpandMoreIcon />
                            Sort
                        </ButtonPrimary>
                    )}
                </Grid>
            </Grid>
            <Grid container>{children}</Grid>
        </Grid>
    );
};

FilterContainer.defaultProps = {
    filters: [],
    filtersData: [],
    sort: true
};

export default FilterContainer;
