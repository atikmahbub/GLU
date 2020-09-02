import React, { FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { colors } from '../../Styles/colors';

const useStyles = makeStyles({
    title: {
        fontSize: '2.625rem',
        lineHeight: '2.8125rem'
    },
    subTitle: {
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
        position: 'relative',
        paddingLeft: 20,
        display: 'flex',
        alignItems: 'center',
        '&::before': {
            content: '""',
            position: 'absolute',
            left: 0,
            width: 10,
            height: 10,
            background: ({ color }: any) => color
        }
    },
    percentSmall: {
        position: 'relative',
        top: '-0.7em',
        fontSize: '1.25rem',
        lineHeight: '1.5625rem'
    }
})

type PercentCardProps = {
    color?: string;
    value: string;
    dif: string;
    title: string;
    rootClassName?: string
}

const PercentCard: FC<PercentCardProps> = ({ value, dif, title, color, rootClassName }) => {
    const classes = useStyles({ color })
    return (
        <Grid container className={rootClassName}>
            <Grid container>
                <Typography className={classes.title}>
                    {value}
                    <sup className={classes.percentSmall}>{dif}</sup>
                </Typography>
            </Grid>
            <Typography className={classes.subTitle}>{title}</Typography>
        </Grid>
    )
}

PercentCard.defaultProps = {
    color: colors.primary
}

export default memo(PercentCard)
