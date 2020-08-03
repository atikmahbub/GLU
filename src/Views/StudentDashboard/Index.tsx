import React from 'react';
import FixedNavigation from '../../Containers/FixedNavigation';
import NavigationMenu from '../../components/NavigationMenu';
import { menus } from '../../Helper/menus';
import DashboardWrapper from '../../Containers/DashboardWrapper';
import ImageRow from './ImageRow';

const Index: React.FunctionComponent = () => {
    return (
        <div className="dashboard__wrapper">
            <FixedNavigation>
                <NavigationMenu menuList={menus} />
            </FixedNavigation>
            <DashboardWrapper>
                <ImageRow/>
            </DashboardWrapper>
        </div>
    );
};

export default Index;
