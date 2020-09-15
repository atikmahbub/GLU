import React, { FC, memo } from 'react';
import classNames from 'classnames';
import Slider from 'react-slick';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import BannerCard from '../Cards/BannerCard';
import { BannerCardElement } from '../Cards/types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const useStyles = makeStyles({
    sliderRoot: {
        width: '100%',
        position: 'relative',
    },
    sliderDots: {
        width: 'fit-content',
        position: 'absolute',
        bottom: '1.875rem',
        left: '3.125rem',
        '& li': {
            width: 100,
            height: 16,
            '& button': {
                width: '100%',
                height: '100%',
                padding: '7px 0',
                display: 'flex',
                alignItems: 'center',
                '&::after': {
                    content: '""',
                    display: 'block',
                    width: '100%',
                    height: 2,
                    background: 'rgba(255, 255, 255, 0.25)',
                    position: 'absolute'
                },
                '&::before': {
                    content: '""',
                    display: 'block',
                    width: '0%',
                    height: 2,
                    position: 'absolute',
                    top: 'unset'
                }
            },
            '&.slick-active': {
                '& button': {
                    '&::before': {
                        animation: 'progress 5s',
                        background: '#fff'
                    }
                }
            }
        }
    },
});

const settings = {
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    pauseOnHover: false,
};

interface IBannerCarousel {
    cards: BannerCardElement[];
}

const BannerCarousel: FC<IBannerCarousel> = ({ cards }) => {
    const classes = useStyles();

    return (
        <Grid container>
            <Slider
                {...settings}
                dotsClass={classNames('slick-dots', classes.sliderDots)}
                className={classes.sliderRoot}
            >
                {cards.map((card, index) => (
                    <BannerCard {...card} key={index} />
                ))}
            </Slider>
        </Grid>
    );
};

BannerCarousel.defaultProps = {
    cards: []
}

export default memo(BannerCarousel);
