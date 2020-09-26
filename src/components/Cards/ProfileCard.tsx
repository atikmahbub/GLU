import React, { FC } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { linkTo } from '../../Helper/linkTo';

const useStyles = makeStyles({
    root: {
        background: '#fff',
        color: '#000',
        padding: '8.4375rem 3.0625rem',
    },
    container: {
        marginBottom: '4.5rem',
        position: 'relative',
    },
    section: {
      padding: '0 1.5625rem'
    },
    title: {
        fontSize: '2.625rem',
        lineHeight: '2.8125rem',
        fontWeight: 400,
    },
    img: {
        width: 393,
        height: 393,
        objectFit: 'cover',
    },
    text: {
        fontSize: '5rem',
        lineHeight: '5rem',
        fontWeight: 400,
    },
    textSmall: {
        fontSize: '1.25rem',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
        '&:hover': {
            color: 'inherit',
        },
    },
    seeLink: {
        position: 'absolute',
        right: 0
    },
});

type ProfileCardProps = {
    name: string;
    address: string;
    phone: string;
    email: string;
    rootClassName?: string;
};

const ProfileCard: FC<ProfileCardProps> = ({ name, address, phone, email, rootClassName }) => {
    const classes = useStyles();
    return (
        <Grid container className={classNames(classes.root, rootClassName)}>
            <Grid container className={classes.container}>
                <Grid container item xs={6} className={classes.section}>
                    <Typography variant="h4" className={classes.title}>
                        Profile
                    </Typography>
                </Grid>
                <Grid container item xs={6} className={classes.section}>
                    <img
                        src="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1597229086/gluschool/curlyahirgilr_owcgya.jpg"
                        alt="thumbnail"
                        className={classes.img}
                    />
                </Grid>
                <Typography
                    className={classNames(classes.textSmall, classes.link, classes.seeLink)}
                    component={Link}
                    to="/students/"
                >
                    See
                </Typography>
            </Grid>
            <Grid container className={classes.container}>
                <Grid container item xs={6} className={classes.section}>
                    <Typography variant="h2" className={classes.text}>
                        {name}
                    </Typography>
                </Grid>
                <Grid container item xs={6} className={classes.section}>
                    <Typography variant="h3" className={classes.text}>
                        {address}
                    </Typography>
                    <Typography variant="h3" className={classes.text}>
                        {phone}
                    </Typography>
                    <Typography variant="h3" className={classes.text}>
                        {email}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justify="flex-end">
                <Grid container item xs={6} className={classes.section}>
                    <Typography
                        className={classNames(classes.textSmall, classes.link)}
                        component={Link}
                        to={linkTo.studentProfile}
                    >
                        Edit profile
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ProfileCard;
