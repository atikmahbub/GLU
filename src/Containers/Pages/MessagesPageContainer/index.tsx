import React, { FC, useState } from 'react';
import NavigationMenu from '../../../components/NavigationMenu';
import LeftDrawerMenuContent from '../../Menus/LeftDrawerMenuContent';
import useMenuList from '../../../Hooks/useMenuList';
import { UserType } from '../types';
import NoMessages from './NoMessages';
import Chat from './Chat';

interface IMessagesPageContainer extends UserType {}

const MessagesPageContainer: FC<IMessagesPageContainer> = ({ userType }) => {
    const menuList = useMenuList(userType);
    const [showChat, setShowChat] = useState(false);
    return (
        <NavigationMenu
            absolute
            background="transparent"
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            {showChat ? <Chat /> : <NoMessages showChat={() => setShowChat(true)} userType={userType}/>}
        </NavigationMenu>
    );
};

export default MessagesPageContainer;
