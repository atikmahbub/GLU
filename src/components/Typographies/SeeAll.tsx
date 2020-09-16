import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { colors } from '../../Styles/colors';

const useStyles = makeStyles({
    root: {
        fontSize: '1.25rem',
        lineHeight: '1.25rem',
        cursor: 'pointer',
        color: colors.primary,
    },
});

interface ISeeAll {
    short?: boolean;
    to: string;
}

const SeeAll: FC<ISeeAll> = ({ short, to }) => {
    const classes = useStyles();
    return (
        <Typography component={Link} to={to} className={classes.root}>
            {short ? 'See' : 'See all'}
        </Typography>
    );
};

export default SeeAll;
