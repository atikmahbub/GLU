import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TitlePrimary from '../../components/Typographies/TitlePrimary';
import Drawer from '../../components/Drawer';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import FilterDrawerContent from './FilterDrawerContent';
import useToggle from '../../Hooks/useToggle';

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
};

const FilterContainer: FC<CardsGridContainerProps> = ({ title, rootClassName, children }) => {
    const classes = useStyles();
    const [filterDrawer, toggleFilterDrawer] = useToggle(true);
    return (
        <Grid container direction="column" className={rootClassName}>
            <Drawer position="left" width="44vw" open={filterDrawer} onClose={toggleFilterDrawer}>
                <FilterDrawerContent />
            </Drawer>
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

export default FilterContainer;
