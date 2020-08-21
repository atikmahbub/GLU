import React from 'react';

import MadeBy from '../Footer/MadeBy';
import FixedNavigation from '../../Containers/FixedNavigation';
import NavigationMenu from '../../components/NavigationMenu';
import { menus } from '../../Helper/menus';

import DashboardWrapper from '../../Containers/DashboardWrapper';
import CardHolder from './CardHolder';

import commonImg from '../../Assets/images';

const Index: React.FunctionComponent = () => {
    return (
        <div className="school__fav">
            <FixedNavigation>
                <NavigationMenu menuList={menus} />
            </FixedNavigation>
            <DashboardWrapper>
                <p className="heading">Favourites</p>
                <p className="detail">
                    Save your favourite Upcoming Classes, Previous Classes and Tutors. Browse and acess them quickly,
                    all in one place.
                </p>
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
