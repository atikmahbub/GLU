import React from 'react';
import Filter from './Filter';
import MeritsFeedback from '../../components/Dashobard/Merits/Index';

const Index = () => {
    return (
        <MeritsFeedback
            pageName="Merits/Sanctions"
            heading1="Lunch Time"
            heading2="Chemistry"
            heading3="Mathematics"
            title1="Sanction"
            title2="Merit"
            title3="Sanction"
            date1=" 06/02/2020"
            date2=" 06/02/2020"
            date3=" 06/02/2020"
            textArea="Details"
            filter={<Filter />}
        />
    );
};

export default Index;
