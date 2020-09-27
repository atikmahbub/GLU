import React, { FC } from 'react';
import NavigationMenu from '../../../components/NavigationMenu';
import LeftDrawerMenuContent from '../../Menus/LeftDrawerMenuContent';
import useMenuList from '../../../Hooks/useMenuList';
import { UserType } from '../types';
import NoMessages from './NoMessages';
import Chat from './Chat';

interface IMessagesPageContainer extends UserType {}

const MessagesPageContainer: FC<IMessagesPageContainer> = ({ userType }) => {
    const menuList = useMenuList(userType);
    return (
        <NavigationMenu
            absolute
            background="transparent"
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            {true ? <Chat /> : <NoMessages userType={userType}/>}
        </NavigationMenu>
    );
};

export default MessagesPageContainer;
