import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import StudentsPageContainer from '../StudentsPageContainer';
import ChartInfo from './ChartInfo';
import WhiteContainer from '../../../Containers/WhiteContainer';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import ColumnsContainer from '../../../Containers/ColumnsContainer';
import FormControlSelect from '../../../components/Form/FormControlSelect';
import ExamResultCard from '../../../components/Cards/ExamResultCard';
import { monthsOptions } from '../../../Helper/options';

const useStyles = makeStyles({
    whiteContainerRoot: {
        width: 'calc(100% + (3.125rem * 2))',
        position: 'relative',
        left: '-3.125rem',
        paddingTop: '6.25rem',
        padding: '6.25rem 3.125rem',
    },
    controlsContainer: {
      marginBottom: '5rem'
    },
    selectRoot: {
        marginRight: '7.375rem',
    },
});

const Reports: FC = () => {
    const classes = useStyles();
    return (
        <StudentsPageContainer>
            <Grid container direction="column">
                <ChartInfo />
                <WhiteContainer rootClassName={classes.whiteContainerRoot}>
                    <ColumnsContainer
                        leftContent={
                            <Grid container>
                                <TitlePrimary>Exam Results</TitlePrimary>
                            </Grid>
                        }
                        rightContent={
                            <Grid container direction="column">
                                <Grid container className={classes.controlsContainer}>
                                    <FormControlSelect
                                        label="From"
                                        value="july"
                                        options={monthsOptions}
                                        onChange={console.log}
                                        rootClassName={classes.selectRoot}
                                    />
                                    <FormControlSelect
                                        label="To"
                                        value="june"
                                        options={monthsOptions}
                                        onChange={console.log}
                                    />
                                </Grid>
                                <Grid container direction="column">
                                    <ExamResultCard />
                                </Grid>
                            </Grid>
                        }
                    />
                </WhiteContainer>
            </Grid>
        </StudentsPageContainer>
    );
};

export default Reports;
