import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import NavigationMenu from '../../components/NavigationMenu';
import TopDrawerMenuContent from '../../Containers/Menus/TopDrawerMenuContent';
import { studentMenus } from '../../Helper/studentMenus';
import { getColor } from '../../Helper/studentModule';

const useStyles = makeStyles({
    root: {
        background: ({ background }: any) => getColor(background),
        minHeight: '100vh',
    },
    content: {
        padding: '3.75rem 3.125rem',
    },
});

type StudentsPageContainerProps = {
    navMenuBackground?: 'primary' | 'secondary' | 'transparent';
    background?: 'primary' | 'secondary';
    rootClassName?: string;
    contentClassName?: string;
    children: ReactNode;
    paddingBottom?: boolean;
};

const StudentsPageContainer: FC<StudentsPageContainerProps> = ({
    navMenuBackground,
    background,
    rootClassName,
    contentClassName,
    children,
}) => {
    const classes = useStyles({ background });
    return (
        <NavigationMenu
            menuList={studentMenus}
            background={navMenuBackground}
            TopDrawerMenuComponent={<TopDrawerMenuContent />}
        >
            <Grid container direction="column" className={classNames(classes.root, rootClassName)}>
                <Grid container direction="column" className={classNames(classes.content, contentClassName)}>
                    {children}
                </Grid>
            </Grid>
        </NavigationMenu>
    );
};

StudentsPageContainer.defaultProps = {
    navMenuBackground: 'secondary',
    background: 'secondary'
}

export default StudentsPageContainer;
