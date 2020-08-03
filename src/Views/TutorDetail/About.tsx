import React from 'react';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';
import DateSelector from '../../components/DateTimeSelector/DateSelector';

import { Button } from '@material-ui/core';
const About: React.FunctionComponent = () => {
    return (
        <div className="about__container">
            <h1 className="heading">About</h1>
            <div className="description__box">
                <p>
                    I am an American author, life coach, and philanthropist. Known for my infomercials, seminars, and
                    self-help books including the books Unlimited Power and...
                </p>
            </div>
        </div>
    );
};

export default About;
