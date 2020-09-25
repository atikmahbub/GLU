import React, { FC } from 'react';
import NavigationMenu from '../../../components/NavigationMenu';
import LeftDrawerMenuContent from '../../Menus/LeftDrawerMenuContent';
import { UserTypes } from '../../../Types/user';
import Activity from './Activity';
import NoActivity from './NoActivity';
import useMenuList from '../../../Hooks/useMenuList';

interface IWalletPageContainer {
    userType: UserTypes;
}

const WalletPageContainer: FC<IWalletPageContainer> = ({ userType }) => {
    const menuList = useMenuList(userType);
    return (
        <NavigationMenu
            absolute
            background="transparent"
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            {true ? <Activity userType={userType} /> : <NoActivity userType={userType} />}
        </NavigationMenu>
    );
};

export default WalletPageContainer;
