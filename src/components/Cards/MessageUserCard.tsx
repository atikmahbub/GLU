import React, { FC } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AspectRatioImgCard from './AspectRationImgCard';
import TextPrimary from '../Typographies/TextPrimary';
import { MessageUserCardElement } from './types';

const useStyles = makeStyles({
    root: {
        '&:hover': {
            cursor: 'pointer',
            '& $name': {
                textDecoration: 'underline'
            }
        }
    },
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
    container: {
        width: 'fit-content'
    },
    indicator: {
        width: 11,
        height: 11,
        border: '1px solid rgba(0, 0, 0, 0.5)',
        borderRadius: '50%'
    },
    indicatorActive: {
        borderColor: '#00A800',
        background: '#00A800'
    }
});

interface IMessageUserCard extends MessageUserCardElement {
    onClick: (name: string) => void,
    indicator?: boolean;
    indicatorActive?: boolean;
}

const MessageUserCard: FC<IMessageUserCard> = ({ img, name, status, onClick, indicator, indicatorActive }) => {
    const classes = useStyles();
    return (
        <Grid container onClick={() => onClick(name)} className={classes.root}>
            <Grid container className={classes.imgContainer}>
                <AspectRatioImgCard ratio="100%" img={img} />
            </Grid>
            <Grid container justify="space-between" className={classes.infoContainer}>
                <Grid container direction="column" justify="space-between" className={classes.container}>
                    <TextPrimary className={classes.name}>{name}</TextPrimary>
                    <Typography className={classes.status}>{status}</Typography>
                </Grid>
                <Grid container direction="column" className={classes.container}>
                    {indicator && (
                        <span className={classNames(classes.indicator, {
                            [classes.indicatorActive]: indicatorActive
                        })} />
                    )}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default MessageUserCard;
