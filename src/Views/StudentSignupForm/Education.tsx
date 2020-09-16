import React, { useState } from 'react';
import EducationInfoContainer from './EducationInfoContainer';
import OutlineButton from '../../components/Button/OutlineButton';

interface props {
    handler: () => void;
}
const Education: React.FunctionComponent<props> = ({ handler }) => {
    const [rows, setRows] = useState([0]);

    return (
        <div className="info__container">
            <EducationInfoContainer />
            <div className="mt-4">
                <OutlineButton text="Add" btnClick={handler} />
            </div>
        </div>
    );
};

export default Education;
