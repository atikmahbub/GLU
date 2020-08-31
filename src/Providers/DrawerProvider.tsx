import React, { FC, ReactNode } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Drawer from '../components/Drawer';

function createTransition(open: boolean, { create, duration }: any): string {
    return create('transform', {
        duration: open ? duration.leavingScreen : duration.enteringScreen
    })
}

const useStyles = makeStyles(({ transitions }) => ({
    content: {
        transform: ({ open, drawerWidth }: any) => open ? `translateX(-${drawerWidth}px)` : 'none',
        transition: ({ open }: any) => createTransition(open, transitions)
    }
}))

type DrawerProviderProps = {
    open: boolean;
    onClose: () => void;
    drawerWidth?: number;
    drawerContent: ReactNode;
    children: ReactNode;
}

const DrawerProvider: FC<DrawerProviderProps> = ({ open, onClose, drawerWidth = 500, drawerContent, children }) => {
    const classes = useStyles({ open, drawerWidth })
    return (
        <div>
            <Drawer open={open} onClose={onClose} width={drawerWidth}>{drawerContent}</Drawer>
            <div className={classes.content}>
                {children}
            </div>
        </div>
    )
}

export default DrawerProvider
