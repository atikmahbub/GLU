import React from 'react';

import MadeBy from '../Footer/MadeBy';
import FixedNavigation from '../../Containers/FixedNavigation';
import NavigationMenu from '../../components/NavigationMenu';
import { menus } from '../../Helper/menus';

import DashboardWrapper from '../../Containers/DashboardWrapper';

interface props {
    topic: string;
    detail: string;
}

const NoFound: React.FunctionComponent<props> = ({ topic, detail }) => {
    return (
        <div className="school__nofav">
            <FixedNavigation>
                <NavigationMenu menuList={menus} />
            </FixedNavigation>
            <DashboardWrapper>
                <p className="heading">{topic}</p>
                <p className="detail">{detail}</p>
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
export default NoFound;
