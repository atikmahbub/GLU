import React, { FC, useMemo } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import CardsGridContainer from '../CardsGridContainer';
import CardsGrid from '../CardsGrid';
import { Tab, Tabs } from '../../components/Tabs';
import { createMenuList } from '../../Helper/menus';
import { UserTypes } from '../../Types/user';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    tabsContainer: {
        paddingBottom: '2.4375rem'
    }
})

interface IDashboardPageContainer {
    userType: UserTypes;
}

const DashboardPageContainer: FC<IDashboardPageContainer> = ({ userType }) => {
    const classes = useStyles()
    const menuList = useMemo(() => createMenuList(userType), [userType])
    return (
        <NavigationMenu
            absolute
            background="transparent"
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            <CardsGridContainer background="secondary" rootClassName={classes.tabsContainer}>
                <Tabs>
                    <Tab label="Personal" />
                    <Tab label="School" />
                </Tabs>
            </CardsGridContainer>
            <CardsGridContainer background="secondary" paddingTop={false}>
                <CardsGrid rows="1/2">
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                </CardsGrid>
            </CardsGridContainer>
        </NavigationMenu>
    )
}

export default DashboardPageContainer
