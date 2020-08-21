import React from 'react';

import MadeBy from '../Footer/MadeBy';
import DashboardWrapper from '../../Containers/DashboardWrapper';
import Header from './Header';
import Section from './Section';
import commonImg from '../../Assets/images';

const Index: React.FunctionComponent = () => {
    return (
        <div className="school__info">
            <Header />
            <Section />
            <div className="footer">
                <MadeBy />
            </div>
        </div>
    );
};
export default Index;
