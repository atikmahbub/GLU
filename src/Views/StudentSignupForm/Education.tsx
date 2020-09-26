import React, { useContext, useState } from 'react';
import EducationInfoContainer from './EducationInfoContainer';
import OutlineButton from '../../components/Button/OutlineButton';
import { registerContext } from './Index';

interface props {
    handler: () => void;
    skip?: () => void;
}
const Education: React.FunctionComponent<props> = ({ handler, skip }) => {
    const context = useContext(registerContext);
    return (
        <div className="info__container">
            <EducationInfoContainer />
            <div className="mt-4">
                <OutlineButton text="Add" width="10rem"  btnClick={handler} />
            </div>
            <OutlineButton text="Next" width="10rem" mt="5rem" btnClick={skip} />
        </div>
    );
};

export default Education;
