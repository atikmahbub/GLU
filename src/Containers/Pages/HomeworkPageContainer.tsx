import React, { FC, useMemo } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import { UserTypes } from '../../Types/user';
import { createMenuList } from '../../Helper/menus';
import CardsGridContainer from '../CardsGridContainer';

interface IHomeworkPageContainer {
    userType: UserTypes;
}

const HomeworkPageContainer: FC<IHomeworkPageContainer> = ({ userType }) => {
    const menuList = useMemo(() => createMenuList(userType), [userType])
    return (
        <NavigationMenu
            absolute
            background="primary"
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            <CardsGridContainer>
                123
            </CardsGridContainer>
        </NavigationMenu>
    )
}

export default HomeworkPageContainer
