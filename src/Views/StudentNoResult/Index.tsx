import React from 'react';

import MadeBy from '../Footer/MadeBy';
import FixedNavigation from '../../Containers/FixedNavigation';
import NavigationMenu from '../../components/NavigationMenu';
import { menus } from '../../Helper/menus';

import DashboardWrapper from '../../Containers/DashboardWrapper';

const Index: React.FunctionComponent = () => {
    return (
        <div className="school__no__result">
            <FixedNavigation>
                <NavigationMenu menuList={menus} />
            </FixedNavigation>
            <DashboardWrapper>
                <p className="heading">‘Monoclonal antibodies’</p>

                <p className="detail">Sorry, nothing has been found.</p>
            </DashboardWrapper>
            <div className="footer">
                <MadeBy />
            </div>
        </div>
    );
};
export default Index;
