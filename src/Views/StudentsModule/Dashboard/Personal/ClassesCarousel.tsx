import React, { FC, memo } from 'react';
import Slider from 'react-slick';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ClassCard from '../../../../components/Cards/ClassCard';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
        paddingRight: '5rem',
        paddingBottom: '2em',
    },
    sliderRoot: {
        width: '100%',
    },
});

const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const ClassesCarousel: FC = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Slider {...settings} className={classes.sliderRoot}>
                <ClassCard />
                <ClassCard />
                <ClassCard />
            </Slider>
        </Grid>
    );
};

export default memo(ClassesCarousel);
