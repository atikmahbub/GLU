import React from 'react';
import FixedNavigation from '../../../Containers/FixedNavigation';
import NavigationMenu from '../../../components/NavigationMenu';
import { menus } from '../../../Helper/menus';
import MadeBy from '../../Footer/MadeBy';
import DashboardWrapper from '../../../Containers/DashboardWrapper';
import Heading from '../StudentDetail/Heading';
import commonImg from '../../../Assets/images';

const Index: React.FunctionComponent = () => {
    return (
        <div className="dashboard">
            <FixedNavigation>
                <NavigationMenu menuList={menus} />
            </FixedNavigation>
            <DashboardWrapper>
                <img src={commonImg.boyCropped} className="dashboard__wrapper__image" alt="boy" />
                <Heading
                    name="Frank Howard"
                    about=" I’m Frank, a secondary Student at GEMS school in Dubai. Currently studying Maths, Business Studies
                    and History."
                    country=" Dubai, UAE"
                    contact="(+971) 4 554 0350 frankhwrd@gmail.com"
                />
            </DashboardWrapper>
            <div className="footer">
                <MadeBy />
            </div>
        </div>
    );
};
export default Index;
