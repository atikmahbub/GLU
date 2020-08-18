import React from 'react';
import FixedNavigation from '../../../Containers/FixedNavigation';
import NavigationMenu from '../../../components/NavigationMenu';
import { menus } from '../../../Helper/menus';
import MadeBy from '../../Footer/MadeBy';
import DashboardWrapper from '../../../Containers/DashboardWrapper';
import Heading from './Heading';
import commonImg from '../../../Assets/images';
import Education from './Education';
const Index: React.FunctionComponent = () => {
    return (
        <div className="dashboard">
            <FixedNavigation>
                <NavigationMenu menuList={menus} />
            </FixedNavigation>
            <DashboardWrapper>
                <img src={commonImg.boyCropped} className="dashboard__wrapper__image" alt="girl" />
                <Heading />
                <Education />
            </DashboardWrapper>
            <div className="footer">
                <MadeBy />
            </div>
        </div>
    );
};
export default Index;
