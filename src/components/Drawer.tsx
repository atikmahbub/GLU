import React, { FC, ReactNode, memo } from 'react';
import MuiDrawer from '@material-ui/core/Drawer';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import IconButton from './Button/IconButton';
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles({
    content: {
        width: ({ width }: any) => width,
        padding: '0 3.125rem 1.75rem 3.125rem',
        minHeight: '-webkit-fit-content',
    },
    buttonContainer: {
        width: '100%',
        position: 'sticky',
        paddingTop: '1.75rem',
        paddingBottom: '3.125rem',
        top: 0,
        background: '#fff',
        zIndex: 1
    },
    button: {
        position: 'relative',
        left: -12
    },
});

type DrawerProps = {
    position?: 'left' | 'right' | 'top' | 'bottom';
    open: boolean;
    onClose: () => void;
    width?: number | string;
    children: ReactNode;
};

const Drawer: FC<DrawerProps> = ({
    position = 'right',
    open = false,
    width = 500,
    onClose,
    children,
}) => {
    const classes = useStyles({ width });
    return (
        <MuiDrawer anchor={position} open={open} variant="temporary">
            <Grid container direction="column" wrap="nowrap" className={classes.content}>
                <Grid className={classes.buttonContainer}>
                    <IconButton className={classes.button} onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Grid>
                {children}
            </Grid>
        </MuiDrawer>
    );
};

export default memo(Drawer);
