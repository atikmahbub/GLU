import React, { FC } from 'react';
import classNames from 'classnames';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    icon: {
        fontSize: '0.85em',
    },
});

interface IRatingCard {
    rating: string;
    rootClassName?: string;
}

const RatingCard: FC<IRatingCard> = ({ rating, rootClassName }) => {
    const classes = useStyles();
    return (
        <span className={rootClassName}>
            <i className={classNames('icon-Star_3', classes.icon)} />
            &nbsp;
            {rating}
            &nbsp;&nbsp;&nbsp;&nbsp;
        </span>
    );
};

export default RatingCard;
