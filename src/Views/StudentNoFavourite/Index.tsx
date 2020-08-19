import React from 'react';

import MadeBy from '../Footer/MadeBy';
import FixedNavigation from '../../Containers/FixedNavigation';
import NavigationMenu from '../../components/NavigationMenu';
import { menus } from '../../Helper/menus';

import DashboardWrapper from '../../Containers/DashboardWrapper';

import commonImg from '../../Assets/images';

const Index: React.FunctionComponent = () => {
    return (
        <div className="school__nofav">
            <FixedNavigation>
                <NavigationMenu menuList={menus} />
            </FixedNavigation>
            <DashboardWrapper>
                <p className="heading">Favourites</p>
                <p className="detail">Looks like you need to add some favourites.</p>
                <p className="previous">
                    See <span className="previousBtn">Previous classes</span>
                </p>
            </DashboardWrapper>
            <div className="footer">
                <MadeBy />
            </div>
        </div>
    );
};
export default Index;
