import React, { useState } from 'react';
import ExperienceContainer from './ExperienceContainer';
import OutlineButton from '../../components/Button/OutlineButton';

interface props{
    nextHandler?:() => void
}
const TeacherExperience: React.FunctionComponent<props> = ({nextHandler}) => {
    return (
        <div className="info__container">
                <ExperienceContainer />
            <div className="mb-5"></div>
            <OutlineButton text="Add" btnClick={nextHandler} />
        </div>
    );
};

export default TeacherExperience;
