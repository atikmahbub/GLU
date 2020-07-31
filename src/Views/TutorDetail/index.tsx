import React from 'react';
import Banner from './Banner';
import Section1 from './Section1';
import Section2 from './Section2';

const index: React.FunctionComponent = () => {
    return (
        <div className="wrapper">
            <Banner />
            <Section1 />
            <Section2 />
        </div>
    );
};

export default index;
