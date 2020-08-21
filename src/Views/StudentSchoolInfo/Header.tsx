import React from 'react';
import FixedNavigation from '../../Containers/FixedNavigation';
import NavigationMenu from '../../components/NavigationMenu';
import { menus } from '../../Helper/menus';

import DashboardWrapper from '../../Containers/DashboardWrapper';

import commonImg from '../../Assets/images';

interface props {
    name?: string;
    address?: string;
    phone?: string;
    email?: string;
}
const Header: React.FunctionComponent<props> = ({
    name = 'GEMS School',
    address = ' Dubai, UAE',
    phone = '(+971) 4 123 6987',
    email = 'gemsschool.ae',
}) => {
    return (
        <div className="school__info__header">
            <FixedNavigation>
                <NavigationMenu menuList={menus} />
            </FixedNavigation>
            <DashboardWrapper>
                <img src={commonImg.boy} className="pic" />
                <p className="schoolName">{name}</p>
                <p className="address">
                    {address}
                    <br /> {phone}
                </p>
                <p className="email">{email}</p>
            </DashboardWrapper>
        </div>
    );
};
export default Header;
//
