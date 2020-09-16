import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import image from '../../Assets/images';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles({
    imageBox: {
        marginBottom: '3.125rem',
        width: '100%',
    },
    imgg: {},
    headerText: {
        fontSize: '2.625rem',
        display: 'inline-block',
        lineHeight: 1,
        marginBottom: '1.875rem',
        marginTop: '5.25rem',
        fontFamily: 'CircularXXWeb-Book',
    },
    upload: {
        fontSize: '1.25rem',
        width: '9.375rem',
        height: '2.5rem',
        paddingTop: '4.1px',
        paddingBottom: '0.5625rem',
        marginBottom: '1.875rem',
        marginTop: '5.25rem',
        boxSizing: 'border-box',
        display: 'inline-block',
        textAlign: 'right',
        fontFamily: 'CircularXXWeb-Book',
    },
    mainBox: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    textBox: {
        fontSize: '1.5625rem',
        width: 'inherit',
        fontFamily: 'CircularXXWeb-Book',
        lineHeight: 1,
        marginTop: '1.3125rem',
    },
    rating: {
        color: '#5F5F5F',
        fontSize: '1.3125rem',
        marginTop: '0.5rem',
    },
    img: {
        width: '100%',
    },
});

const PreviousClass = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.mainBox}>
                <Typography className={classes.headerText}>PreviousClasses</Typography>
                <a href="#" className={classes.upload}>
                    See all
                </a>
            </div>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <div className={classes.imageBox}>
                        <div className={classes.imgg}>
                            <img src={image.bookredinggirl} alt="sedimentary rocks" className={classes.img} />
                        </div>
                        <div className={classes.textBox}>
                            <div className={classes.textBox}>First look at French for beginners Language</div>
                            <div className={classes.rating}>
                                <div style={{ transform: 'translateY(-3.5px)', display: 'inline-block' }}>
                                    <StarIcon fontSize="small" />
                                </div>
                                4/5
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                    <div className={classes.imageBox}>
                        <div className={classes.imgg}>
                            <img src={image.bookredinggirl} alt="sedimentary rocks" className={classes.img} />
                        </div>
                        <div className={classes.textBox}>
                            <div className={classes.textBox}>First look at French for beginners Language</div>
                            <div className={classes.rating}>
                                <div style={{ transform: 'translateY(-3.5px)', display: 'inline-block' }}>
                                    <StarIcon fontSize="small" />
                                </div>
                                4/5
                            </div>
                        </div>
                    </div>
                </Grid>

                <Grid item md={3} sm={6} xs={12}>
                    <div className={classes.imageBox}>
                        <div className={classes.imgg}>
                            <img src={image.bookredinggirl} alt="sedimentary rocks" className={classes.img} />
                        </div>
                        <div className={classes.textBox}>
                            <div className={classes.textBox}>First look at French for beginners Language</div>
                            <div className={classes.rating}>
                                <div style={{ transform: 'translateY(-3.5px)', display: 'inline-block' }}>
                                    <StarIcon fontSize="small" />
                                </div>
                                4/5
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                    <div className={classes.imageBox}>
                        <div className={classes.imgg}>
                            <img src={image.bookredinggirl} alt="sedimentary rocks" className={classes.img} />
                        </div>
                        <div className={classes.textBox}>
                            <div className={classes.textBox}>First look at French for beginners Language</div>
                            <div className={classes.rating}>
                                <div style={{ transform: 'translateY(-3.5px)', display: 'inline-block' }}>
                                    <StarIcon fontSize="small" />
                                </div>
                                4/5
                            </div>
                        </div>
                    </div>
                </Grid>

                {/* <div className={classes.imageBox}>
                    <img src={image.greentshirtboy} alt="sedimentary rocks" width="418px" height="324px" />
                    <div className={classes.textBox}>
                        <div className={classes.textBox}>First look at French for beginners Language</div>
                        <div className={classes.rating}>
                            <div style={{ transform: 'translateY(-3.5px)', display: 'inline-block' }}>
                                <StarIcon fontSize="small" />
                            </div>
                            4/5
                        </div>
                    </div>
                </div>

                <div className={classes.imageBox}>
                    <img src={image.blurgirl} alt="sedimentary rocks" width="418px" height="324px" />
                    <div className={classes.textBox}>
                        <div className={classes.textBox}>First look at French for beginners Language</div>
                        <div className={classes.rating}>
                            <div style={{ transform: 'translateY(-3.5px)', display: 'inline-block' }}>
                                <StarIcon fontSize="small" />
                            </div>
                            4/5
                        </div>
                    </div>
                </div>

                <div className={classes.imageBox}>
                    <img src={image.girlScatter} alt="sedimentary rocks" width="418px" height="324px" />
                    <div className={classes.textBox}>
                        <div className={classes.textBox}>First look at French for beginners Language</div>
                        <div className={classes.rating}>
                            <div style={{ transform: 'translateY(-3.5px)', display: 'inline-block' }}>
                                <StarIcon fontSize="small" />
                            </div>
                            4/5
                        </div>
                    </div>
                </div> */}
            </Grid>
        </div>
    );
};

export default PreviousClass;
