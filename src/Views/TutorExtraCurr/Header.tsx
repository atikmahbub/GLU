import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import image from '../../Assets/images';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles({
    headerText: {
        fontSize: '2.625rem',
        display: 'inline-block',
        lineHeight: 1,
        height: '9.125rem',
    },
    dateBox: {
        marginRight: '9.8125rem',
    },
    medText: {
        fontSize: '1.5625rem',
        height: '2.0625rem',
        marginTop: '0.5625rem',
        display: 'inline-block',
    },
    headerTextBox: {
        marginRight: '9.1875rem',
    },
    imageBox: {
        marginBottom: '6.25rem',
        display: 'inline-block',
        width: '100%',
        height: '20.5rem',
    },
    upload: {
        fontSize: '1.25rem',
        width: '9.375rem',
        height: '2.5rem',
        border: '1.2px solid #A8A8A8',
        textAlign: 'center',
        paddingTop: '4.1px',
        paddingBottom: '0.5625rem',
        marginTop: '.53125rem',
        boxSizing: 'border-box',
        display: 'inline-block',
    },

    mainBox: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    textBox: {
        fontSize: '1.5625rem',
        width: 'inherit',
        font: 'normal normal normal 25px/30px CircularXXWeb-Book;',
        marginTop: '1.3125rem',
        display: 'inline-block',
    },
    rating: {
        color: '#5F5F5F',
        fontSize: '1.3125rem',
        marginTop: '0.5rem',
    },
    boxDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        justifySelf: 'space-between',
    },
    boxGrid: {
        display: 'grid',
        gridTemplateRows: '27.5rem',
        gridTemplateColumns: 'repeat(4, 1fr)',
        maxWidth: '113.875rem',
        gridRowGap: '4.6875rem',
        gridColumnGap: '3.125rem',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    gridBox: {
        paddingBottom: '6.25rem',
    },
});

const Header = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.boxDiv}>
                <Typography className={classes.headerText}>Extra Curriculam</Typography>
                <div className={classes.upload}>Create</div>
            </div>
            {/* <div className={classes.boxGrid}>
                <div className={classes.imageBox}>
                    <img src={image.bookredinggirl} alt="sedimentary rocks" className={classes.image} />
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
                    <img src={image.girlScatter} alt="sedimentary rocks" className={classes.image} />
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
            </div> */}
            <Grid container spacing={5}>
                <Grid item md={3} sm={4} xs={12}>
                    <div className={classes.imageBox}>
                        <img src={image.girlScatter} alt="sedimentary rocks" className={classes.image} />
                        <div className={classes.textBox}>
                            <div>First look at French for beginners Language</div>
                            <div className={classes.rating}>
                                <div style={{ transform: 'translateY(-3.5px)', display: 'inline-block' }}>
                                    <StarIcon fontSize="small" />
                                </div>
                                4/5
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item md={3} sm={4} xs={12}>
                    <div className={classes.imageBox}>
                        <img src={image.girlScatter} alt="sedimentary rocks" className={classes.image} />
                        <div className={classes.textBox}>
                            <div>First look at French for beginners Language</div>
                            <div className={classes.rating}>
                                <div style={{ transform: 'translateY(-3.5px)', display: 'inline-block' }}>
                                    <StarIcon fontSize="small" />
                                </div>
                                4/5
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item md={3} sm={4} xs={12}>
                    <div className={classes.imageBox}>
                        <img src={image.girlScatter} alt="sedimentary rocks" className={classes.image} />
                        <div className={classes.textBox}>
                            <div>First look at French for beginners Language</div>
                            <div className={classes.rating}>
                                <div style={{ transform: 'translateY(-3.5px)', display: 'inline-block' }}>
                                    <StarIcon fontSize="small" />
                                </div>
                                4/5
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item md={3} sm={4} xs={12}>
                    <div className={classes.imageBox}>
                        <img src={image.girlScatter} alt="sedimentary rocks" className={classes.image} />
                        <div className={classes.textBox}>
                            <div>First look at French for beginners Language</div>
                            <div className={classes.rating}>
                                <div style={{ transform: 'translateY(-3.5px)', display: 'inline-block' }}>
                                    <StarIcon fontSize="small" />
                                </div>
                                4/5
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item md={3} sm={4} xs={12}>
                    <div className={classes.imageBox}>
                        <img src={image.girlScatter} alt="sedimentary rocks" className={classes.image} />
                        <div className={classes.textBox}>
                            <div>First look at French for beginners Language</div>
                            <div className={classes.rating}>
                                <div style={{ transform: 'translateY(-3.5px)', display: 'inline-block' }}>
                                    <StarIcon fontSize="small" />
                                </div>
                                4/5
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item md={3} sm={4} xs={12}>
                    <div className={classes.imageBox}>
                        <img src={image.girlScatter} alt="sedimentary rocks" className={classes.image} />
                        <div className={classes.textBox}>
                            <div>First look at French for beginners Language</div>
                            <div className={classes.rating}>
                                <div style={{ transform: 'translateY(-3.5px)', display: 'inline-block' }}>
                                    <StarIcon fontSize="small" />
                                </div>
                                4/5
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Header;