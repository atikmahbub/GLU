import React, { FC, useMemo } from 'react';
import NavigationMenu from '../../../components/NavigationMenu';
import LeftDrawerMenuContent from '../../Menus/LeftDrawerMenuContent';
import { createMenuList } from '../../../Helper/menus';
import { UserTypes } from '../../../Types/user';
import Activity from './Activity';
import NoActivity from './NoActivity';

interface IWalletPageContainer {
    userType: UserTypes;
}

const WalletPageContainer: FC<IWalletPageContainer> = ({ userType }) => {
    const menuList = useMemo(() => createMenuList(userType), [userType]);
    return (
        <NavigationMenu
            absolute
            background="transparent"
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            {false ? (
                <Activity userType={userType} />
            ) : (
                <NoActivity userType={userType} />
            )}
        </NavigationMenu>
    );
};

export default WalletPageContainer;
