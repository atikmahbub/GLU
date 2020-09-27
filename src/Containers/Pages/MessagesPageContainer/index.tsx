import React, { FC } from 'react';
import NavigationMenu from '../../../components/NavigationMenu';
import LeftDrawerMenuContent from '../../Menus/LeftDrawerMenuContent';
import useMenuList from '../../../Hooks/useMenuList';
import { UserType } from '../types';
import NoMessages from './NoMessages';

interface IMessagesPageContainer extends UserType {}

const MessagesPageContainer: FC<IMessagesPageContainer> = ({ userType }) => {
    const menuList = useMenuList(userType);
    return (
        <NavigationMenu
            absolute
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            <NoMessages userType={userType} />
        </NavigationMenu>
    );
};

export default MessagesPageContainer;
