import React from 'react';
import Banner from './Banner';
import Section1 from './Section1';
import Section2 from './Section2';
import Upcoming from './Upcoming';

const index: React.FunctionComponent = () => {
    return (
        <div className="wrapper">
            <Banner />
            <Section1 />
            <Section2 />
            <Upcoming />
        </div>
    );
};

export default index;
