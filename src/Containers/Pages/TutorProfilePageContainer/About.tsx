import React, { FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CardsGridContainer from '../../CardsGridContainer';
import ColumnsContainer from '../../ColumnsContainer';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import TextPrimary from '../../../components/Typographies/TextPrimary';
import { tags } from '../../../Views/StudentsModule/Reports/data';
import Tag from '../../../components/Tag';

const useStyles = makeStyles({
    textContainer: {
        marginBottom: '1.875rem',
    },
    infoContainer: {
        paddingBottom: '4.6875rem',
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
    },
    tagsContainer: {
        paddingTop: '3.125rem',
    },
    skillsTitle: {
        marginBottom: '1.5625rem',
    },
});

const About: FC = () => {
    const classes = useStyles();
    return (
        <CardsGridContainer background="secondary">
            <ColumnsContainer
                leftContent={
                    <Grid container direction="column">
                        <TitlePrimary>About</TitlePrimary>
                    </Grid>
                }
                rightContent={
                    <Grid container direction="column">
                        <Grid container direction="column" className={classes.infoContainer}>
                            <ColumnsContainer
                                topBorder={false}
                                leftContent={
                                    <Grid container direction="column">
                                        <Grid container direction="column" className={classes.textContainer}>
                                            <TextPrimary>Experience</TextPrimary>
                                        </Grid>
                                        <Grid container direction="column" className={classes.textContainer}>
                                            <TextPrimary>2014-Present</TextPrimary>
                                            <TextPrimary>Dubai British School</TextPrimary>
                                            <TextPrimary>Chemistry</TextPrimary>
                                            <TextPrimary>Head of Department</TextPrimary>
                                        </Grid>
                                        <Grid container direction="column">
                                            <TextPrimary>2012-2014</TextPrimary>
                                            <TextPrimary>Gems Intl.</TextPrimary>
                                            <TextPrimary>School Science</TextPrimary>
                                            <TextPrimary>Teacher</TextPrimary>
                                        </Grid>
                                    </Grid>
                                }
                                rightContent={
                                    <Grid container direction="column">
                                        <Grid container direction="column" className={classes.textContainer}>
                                            <TextPrimary>Education</TextPrimary>
                                        </Grid>
                                        <Grid container direction="column" className={classes.textContainer}>
                                            <TextPrimary>University of Essex</TextPrimary>
                                            <TextPrimary>Project Management</TextPrimary>
                                            <TextPrimary>MSc</TextPrimary>
                                        </Grid>
                                        <Grid container direction="column">
                                            <TextPrimary>Westmister University</TextPrimary>
                                            <TextPrimary>Biomedical Science</TextPrimary>
                                            <TextPrimary>BSc Honours</TextPrimary>
                                        </Grid>
                                    </Grid>
                                }
                            />
                        </Grid>
                        <Grid container direction="column" className={classes.tagsContainer}>
                            <TextPrimary className={classes.skillsTitle}>Skills</TextPrimary>
                            <Grid container item xs={10}>
                                {tags.map((tag, index) => (
                                    <Tag key={index} title={tag} />
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                }
            />
        </CardsGridContainer>
    );
};

export default memo(About);
