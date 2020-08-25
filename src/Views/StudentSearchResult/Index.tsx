import React from 'react';

import MadeBy from '../Footer/MadeBy';
import FixedNavigation from '../../Containers/FixedNavigation';
import NavigationMenu from '../../components/NavigationMenu';
import { menus } from '../../Helper/menus';

import DashboardWrapper from '../../Containers/DashboardWrapper';
import CardHolder from '../StudentFavourite/CardHolder';

const Index: React.FunctionComponent = () => {
    return (
        <div className="school__search">
            <FixedNavigation>
                <NavigationMenu menuList={menus} />
            </FixedNavigation>
            <DashboardWrapper>
                <p className="heading">‘Photosynthesis’</p>

                <CardHolder heading="Upcoming Classes" />
                <CardHolder heading="Previous Classes" />
                <CardHolder heading="Tutors" />
            </DashboardWrapper>
            <div className="footer">
                <MadeBy />
            </div>
        </div>
    );
};
export default Index;
