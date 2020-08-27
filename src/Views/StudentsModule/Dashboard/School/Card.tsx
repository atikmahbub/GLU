import React, { FC, ReactNode, memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        padding: '0 1.5625rem',
        minHeight: 250,
        height: 'fit-content',
        '&:first-child': {
            paddingLeft: 0,
        },
        '&:last-child': {
            paddingRight: 0,
        },
    },
    paper: {
        background: '#fff',
        padding: '1.0625rem 1.8125rem',
        width: '100%',
        boxShadow: 'none',
        borderRadius: 0,
        display: 'flex',
    },
    title: {
        fontSize: '2.625rem',
        lineHeight: '2.8125rem',
        whiteSpace: 'pre-wrap',
        marginBottom: 10,
    },
    titleBig: {
        fontSize: '5rem',
        lineHeight: '5rem',
    },
    titleLink: {
        fontSize: '1.25rem',
        color: '#2267FF',
        height: 'fit-content',
    },
    text: {
        fontSize: '1.5625rem',
    },
});

type CardProps = {
    size: any;
    title: string;
    bigTitle?: boolean;
    titleRightLink?: string;
    titleRightLinkTo?: string;
    description?: string;
    value?: string;
    content?: ReactNode;
};

function getTo(to: string | undefined) {
    return to || '/';
}

const Card: FC<CardProps> = ({
    size,
    title,
    bigTitle,
    titleRightLink,
    titleRightLinkTo,
    description,
    value,
    content,
}) => {
    const classes = useStyles();
    return (
        <Grid container item xs={size} className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container direction="column" justify="space-between">
                    <Grid container justify="space-between">
                        <Typography className={classNames(classes.title, { [classes.titleBig]: bigTitle })}>
                            {title}
                        </Typography>
                        {titleRightLink && (
                            <Typography className={classes.titleLink} component={Link} to={getTo(titleRightLinkTo)}>
                                {titleRightLink}
                            </Typography>
                        )}
                    </Grid>

                    {content}

                    {description && value && (
                        <Grid container direction="column">
                            <Typography>{description}</Typography>
                            <Typography>{value}</Typography>
                        </Grid>
                    )}
                </Grid>
            </Paper>
        </Grid>
    );
};

export default memo(Card);
