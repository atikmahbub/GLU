import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import StudentsPageContainer from '../StudentsPageContainer';
import ChartInfo from './ChartInfo';
import WhiteContainer from '../../../Containers/WhiteContainer';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import ColumnsContainer from '../../../Containers/ColumnsContainer';
import BottomRecommendedContainer from '../../../Containers/BottomRecommendedContainer';
import FormControlSelect from '../../../components/Form/FormControlSelect';
import ExamResultCard from '../../../components/Cards/ExamResultCard';
import Tag from '../../../components/Tag';
import PageFooter from '../../../components/PageFooter';
import { monthsOptions } from '../../../Helper/options';
import { exams, recommended, tags } from './data';
import { colors } from '../../../Styles/colors';

const useStyles = makeStyles({
    pageContainerContent: {
        paddingBottom: 0
    },
    whiteContainerRoot: {
        width: 'calc(100% + (3.125rem * 2))',
        position: 'relative',
        left: '-3.125rem',
        paddingTop: '6.25rem',
        padding: '6.25rem 3.125rem 0 3.125rem',
    },
    controlsContainer: {
      marginBottom: '5rem'
    },
    selectRoot: {
        marginRight: '7.375rem',
    },
    seeAll: {
        fontSize: '1.25rem',
        lineHeight: '1.875rem',
        color: colors.primary,
        cursor: 'pointer'
    },
    columnsContainerRoot: {
        marginBottom: '5.3125rem'
    },
    tagsContainer: {
        borderLeft: '1px solid rgba(0, 0, 0, 0.25)',
        padding: '0 1.5625rem'
    },
    tagsWrapper: {
        marginBottom: '8rem'
    },
    tagsTitle: {
        fontSize: '1.5625rem',
        lineHeight: '2.0625rem',
        marginBottom: '1.5rem'
    },
    footerRoot: {
        paddingLeft: 0,
        paddingRight: 0
    }
});

const Reports: FC = () => {
    const classes = useStyles();
    return (
        <StudentsPageContainer contentClassName={classes.pageContainerContent}>
            <Grid container direction="column">
                <ChartInfo />
                <WhiteContainer rootClassName={classes.whiteContainerRoot}>
                    <ColumnsContainer
                        rootClassName={classes.columnsContainerRoot}
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
                                    {exams.map((exam, index) => {
                                        return (
                                            <ExamResultCard key={index} {...exam} />
                                        )
                                    })}
                                </Grid>
                                <Typography className={classes.seeAll}>See all</Typography>
                            </Grid>
                        }
                    />
                    <Grid container justify="flex-end" className={classes.tagsWrapper}>
                        <Grid item xs={6} className={classes.tagsContainer}>
                            <Typography className={classes.tagsTitle}>Recommended Tags</Typography>
                            <Grid container item xs={10}>
                                {tags.map((tag, index) => {
                                    return <Tag key={index} title={tag} />
                                })}
                            </Grid>
                        </Grid>
                    </Grid>
                    <BottomRecommendedContainer title="Recommended Tutors" data={recommended} />
                    <PageFooter rootClassName={classes.footerRoot} />
                </WhiteContainer>
            </Grid>
        </StudentsPageContainer>
    );
};

export default Reports;
