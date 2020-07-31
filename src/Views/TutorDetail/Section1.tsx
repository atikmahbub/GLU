import React from 'react';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';

const Section1: React.FunctionComponent = () => {
    return (
        <div className="section">
            <h1 className="availbility">Limited Availablitiy</h1>
            <div className="description">
                <p className="description__text">
                    I am an American author, life coach, and philanthropist. Known for my infomercials, seminars, and
                    self-help books including the books Unlimited Power and Awaken the Giant Within. In 2015 and 2016 I
                    was listed on the Worth Magazine Power 100 list.
                </p>
            </div>
            <div className="availability__date">
                <div className="col-lg-8 ">
                    <h1 className="availability__date__subject__title">Subjects</h1>
                    <SelectFieldUnderline
                        className="custom-adornment-input mb-3"
                        label="Maths"
                        options={['Maths']}
                        getValue={() => {}}
                    />
                </div>
            </div>
        </div>
    );
};

export default Section1;
