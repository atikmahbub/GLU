import React from 'react';
import FixedNavigation from '../../../Containers/FixedNavigation';
import NavigationMenu from '../../../components/NavigationMenu';
import { menus } from '../../../Helper/menus';
import MadeBy from '../../Footer/MadeBy';
import DashboardWrapper from '../../../Containers/DashboardWrapper';
import Header from './Header';
import Detail from './Detail';
// import Heading from '../StudentDetail/Heading';
// import commonImg from '../../../Assets/images';

const Index: React.FunctionComponent = () => {
    return (
        <div className="dashboard__edit">
            <FixedNavigation>
                <NavigationMenu menuList={menus} />
            </FixedNavigation>
            <DashboardWrapper>
                <Header name="Edit Profile" />
                <Detail />
            </DashboardWrapper>
            <div className="footer">
                <MadeBy />
            </div>
        </div>
    );
};
export default Index;
