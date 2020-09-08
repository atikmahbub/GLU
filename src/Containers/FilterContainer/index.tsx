import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TitlePrimary from '../../components/Typographies/TitlePrimary';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import FilterDrawer from './FilterDrawer';
import useToggle from '../../Hooks/useToggle';
import { IFilterElement } from './types';

const useStyles = makeStyles({
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

type CardsGridContainerProps = {
    title: string;
    rootClassName?: string;
    filters: IFilterElement[];
    filtersData: IFilterElement[];
};

const FilterContainer: FC<CardsGridContainerProps> = ({ title, rootClassName, filters, filtersData, children }) => {
    const classes = useStyles();
    const [filterDrawer, toggleFilterDrawer] = useToggle(false);
    return (
        <Grid container direction="column" className={rootClassName}>
            <FilterDrawer open={filterDrawer} onClose={toggleFilterDrawer} filters={filters} data={filtersData} />
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
                        <AddIcon fontSize="large" />
                    </ButtonPrimary>
                    <ButtonPrimary className={classes.sortBtn}>
                        <ExpandMoreIcon />
                        Sort
                    </ButtonPrimary>
                </Grid>
            </Grid>
            <Grid container>{children}</Grid>
        </Grid>
    );
};

FilterContainer.defaultProps = {
    filters: [],
    filtersData: []
}

export default FilterContainer;
