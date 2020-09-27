import React, { FC } from 'react';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AspectRatioImgCard from './AspectRationImgCard';
import TextPrimary from '../Typographies/TextPrimary';
import { MessageUserCardElement } from './types';

const useStyles = makeStyles({
    imgContainer: {
        width: '2.625rem',
    },
    infoContainer: {
        flexGrow: 1,
        width: 'auto',
        paddingLeft: '1.5625rem',
    },
    name: {
        lineHeight: '1.2rem',
    },
    status: {
        fontSize: '1.125rem',
        lineHeight: '1rem',
        color: '#5F5F5F',
    },
    link: {
        color: 'inherit',
        '&:hover': {
            color: 'inherit',
        },
    },
});

interface IMessageUserCard extends MessageUserCardElement {
    link: string;
}

const MessageUserCard: FC<IMessageUserCard> = ({ img, name, status, link }) => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid container className={classes.imgContainer}>
                <AspectRatioImgCard
                    ratio="100%"
                    img={img}
                />
            </Grid>
            <Grid container direction="column" justify="space-between" className={classes.infoContainer}>
                    <Link to={link} className={classes.link}>
                        <TextPrimary className={classes.name}>{name}</TextPrimary>
                    </Link>
                    <Typography className={classes.status}>{status}</Typography>
            </Grid>
        </Grid>
    );
};

export default MessageUserCard;
