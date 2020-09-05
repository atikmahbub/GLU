import React from 'react';
import Filter from './Filter';
import MeritsFeedback from '../../components/Dashobard/Merits/Index';

const Index = () => {
    return (
        <MeritsFeedback
            pageName="Feedback"
            heading1="Lunch Time"
            heading2="Chemistry"
            heading3="Mathematics"
            title1=""
            title2=""
            title3=""
            date1=" 06/02/2020"
            date2=" 06/02/2020"
            date3=" 06/02/2020"
            textArea="Feedback"
            filter={<Filter />}
        />
    );
};

export default Index;
