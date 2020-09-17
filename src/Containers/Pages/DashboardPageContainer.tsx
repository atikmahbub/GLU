import React, { FC, useMemo } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import { createMenuList } from '../../Helper/menus';
import { UserTypes } from '../../Types/user';
import CardsGridContainer from '../CardsGridContainer';
import CardsGrid from '../CardsGrid';

interface IDashboardPageContainer {
    userType: UserTypes;
}

const DashboardPageContainer: FC<IDashboardPageContainer> = ({ userType }) => {
    const menuList = useMemo(() => createMenuList(userType), [userType])
    return (
        <NavigationMenu
            absolute
            background="transparent"
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            <CardsGridContainer background="secondary">
                <CardsGrid>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                </CardsGrid>
            </CardsGridContainer>
        </NavigationMenu>
    )
}

export default DashboardPageContainer
