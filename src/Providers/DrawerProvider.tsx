import React, { FC, ReactNode } from 'react';
import isNumber from 'lodash.isnumber';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Drawer from '../components/Drawer';

const formatTranslateValue = (value: number | string) => (isNumber(value) ? value + 'px' : value);

function createTransition(open: boolean, { create, duration }: any): string {
    return create('transform', {
        duration: open ? duration.leavingScreen : duration.enteringScreen,
    });
}

const useStyles = makeStyles(({ transitions }) => ({
    content: {
        transform: ({ open, animation, drawerWidth }: any) =>
            open && animation ? `translateX(-${formatTranslateValue(drawerWidth)})` : 'none',
        transition: ({ open }: any) => createTransition(open, transitions),
    },
}));

type DrawerProviderProps = {
    open: boolean;
    onClose: () => void;
    drawerWidth?: number;
    drawerContent: ReactNode;
    children: ReactNode;
    animation?: boolean;
};

const DrawerProvider: FC<DrawerProviderProps> = ({
    open,
    onClose,
    drawerWidth = 500,
    drawerContent,
    animation,
    children,
}) => {
    const classes = useStyles({ open, drawerWidth, animation });
    return (
        <div>
            <Drawer open={open} onClose={onClose} width={drawerWidth}>
                {drawerContent}
            </Drawer>
            <div className={classes.content}>{children}</div>
        </div>
    );
};

DrawerProvider.defaultProps = {
    animation: true,
};

export default DrawerProvider;
