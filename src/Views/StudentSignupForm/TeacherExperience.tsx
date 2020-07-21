import React, { useState } from 'react';
import ExperienceContainer from './ExperienceContainer';
import OutlineButton from '../../components/Button/OutlineButton';

const TeacherExperience: React.FunctionComponent = () => {
    const [experience, setExperience] = useState([1]);
    const AddNewExperience = () => {
        const data = experience;
        data.push(1);
        setExperience([...data]);
    }
    return (
        <div className="info__container">
            {experience.map(() => (
                <ExperienceContainer />
            ))}
            <div className="mb-5"></div>
            <OutlineButton text="Add" btnClick={AddNewExperience} />
        </div>
    );
};

export default TeacherExperience;
