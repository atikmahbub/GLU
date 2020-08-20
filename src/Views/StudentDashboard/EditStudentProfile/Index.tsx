import React from 'react';
import FixedNavigation from '../../../Containers/FixedNavigation';
import NavigationMenu from '../../../components/NavigationMenu';
import { menus } from '../../../Helper/menus';
import MadeBy from '../../Footer/MadeBy';
import DashboardWrapper from '../../../Containers/DashboardWrapper';
import Header from './Header';
import Detail from './Detail';
import SemiBox from './SemiBox';
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
                <h2 className="education">Education</h2>
                <SemiBox
                    heading="Current Education"
                    sub1="Dane Court Grammar "
                    sub2=" A-Level"
                    sub3=" Maths, English, ICT"
                />
            </DashboardWrapper>
            <div className="footer">
                <MadeBy />
            </div>
        </div>
    );
};
export default Index;
