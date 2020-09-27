import React, { FC } from 'react';
import NavigationMenu from '../../../components/NavigationMenu';
import LeftDrawerMenuContent from '../../Menus/LeftDrawerMenuContent';
import useMenuList from '../../../Hooks/useMenuList';
import { UserType } from '../types';
import EmptyPageContainer from '../EmptyPageContainer';

interface IMessagesPageContainer extends UserType {}

const MessagesPageContainer: FC<IMessagesPageContainer> = ({ userType }) => {
    const menuList = useMenuList(userType);
    return (
        <NavigationMenu
            absolute
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            <EmptyPageContainer title="Messages" description="Looks like you need to start talking.">
                123
            </EmptyPageContainer>
        </NavigationMenu>
    );
};

export default MessagesPageContainer;
