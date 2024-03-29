import React, { FC, memo } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        background: ({ background }: any) => background === 'primary' ? '#fff' : '#F7F7F7',
        paddingTop: '2.25rem',
        paddingBottom: '2.25rem',
        paddingLeft: ({ padding }: any) => padding ? '3.125rem' : 0,
        paddingRight: ({ padding }: any) => padding ? '3.125rem' : 0,
        fontFamily: 'CircularXXMonoWeb-Regular'
    },
    text: {
        fontFamily: 'inherit',
        color: '#000',
        cursor: 'pointer',
        fontSize: '1rem',
        marginRight: '3.125rem',
        '&:last-child': {
            marginRight: 0,
        },
    },
    textGrey: {
        color: '#5F5F5F',
    },
});

type PageFooterProps = {
    background?: 'primary' | 'secondary';
    padding?: boolean;
    rootClassName?: string;
}

const PageFooter: FC<PageFooterProps> = ({ background, padding, rootClassName }) => {
    const classes = useStyles({ background, padding });
    return (
        <Grid container justify="space-between" className={classNames(classes.root, rootClassName)}>
            <Grid item container xs={6}>
                <Typography className={classes.text}>
                    Made by <span className={classes.textGrey}>Six</span>
                </Typography>
                <Typography className={classes.text}>
                    Build by <a href="https://www.antino.io/"><span className={classes.textGrey}>Antino Labs</span></a>
                </Typography>
            </Grid>
            <Grid container justify="flex-end" item xs={6}>
                <Typography className={classes.text}>T&C’s / Privacy & Cookies</Typography>
                <Typography className={classes.text}>Glu © 2020</Typography>
            </Grid>
        </Grid>
    );
};

PageFooter.defaultProps = {
    padding: true,
    background: 'primary'
}

export default memo(PageFooter);
