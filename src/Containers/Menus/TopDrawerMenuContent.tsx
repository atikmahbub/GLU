import React, { FC, memo } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextBlue from '../../components/Typographies/TextBlue';
import { academic, academicMore, curricular } from './data';
import ImageCard from '../../components/Cards/ImageCard';

const useStyles = makeStyles({
    titleContainer: {
        paddingBottom: '1.5625rem'
    },
    title: {
        fontSize: '1.5625rem',
        lineHeight: '2.0625rem',
        color: '#5F5F5F',
    },
    linkContainer: {
        paddingTop: '3.125rem'
    },
    link: {
        fontSize: '1.5625rem',
        lineHeight: '2.0625rem',
        cursor: 'pointer',
        width: 'fit-content',
    },
    border: {
        borderLeft: '1px solid rgba(0, 0, 0, 0.25)',
        paddingLeft: '1.5625rem'
    }
});

const TopDrawerMenuContent: FC = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid container>
                <Grid container item xs={6} className={classes.titleContainer}>
                    <Typography className={classes.title}>Academic</Typography>
                </Grid>
                <Grid container item xs={3} className={classes.titleContainer}>
                    <Typography className={classes.title}>Extra Curricular</Typography>
                </Grid>
                <Grid container item xs={3} className={classNames(classes.border, classes.titleContainer)}>
                    <Typography className={classes.title}>Featured</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid container item xs={6}>
                    <Grid container direction="column" item xs={6}>
                        {academic.map((item, index) => (
                            <Typography key={index} className={classes.link}>
                                {item}
                            </Typography>
                        ))}
                    </Grid>
                    <Grid container direction="column" item xs={6}>
                        {academicMore.map((item, index) => (
                            <Typography key={index} className={classes.link}>
                                {item}
                            </Typography>
                        ))}
                    </Grid>
                </Grid>
                <Grid container item xs={3}>
                    <Grid container direction="column">
                        {curricular.map((item, index) => (
                            <Typography key={index} className={classes.link}>
                                {item}
                            </Typography>
                        ))}
                    </Grid>
                </Grid>
                <Grid container item xs={3} className={classes.border}>
                    <Grid container direction="column" justify="center" item xs={6}>
                        <ImageCard
                            img="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596608140/gluschool/shorthair_bitghu.jpg"
                            title={'Skateboarding.\nCharlie Ray'}
                            subTitle="AED200 / 45mins"
                            bigTitle
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                <Grid container item xs={6} className={classes.linkContainer}>
                    <TextBlue>See all</TextBlue>
                </Grid>
                <Grid container item xs={3} className={classes.linkContainer}>
                    <TextBlue>See all</TextBlue>
                </Grid>
                <Grid container item xs={3} className={classNames(classes.border, classes.linkContainer)}>
                    <TextBlue>See</TextBlue>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default memo(TopDrawerMenuContent);
