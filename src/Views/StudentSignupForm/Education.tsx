import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import EducationInfoContainer from './EducationInfoContainer';

const Education: React.FunctionComponent = () => {
    const [rows, setRows] = useState([0]);
    const handleRows = () => {
        const data = [...rows];
        data.push(0);
        setRows(data);
    };
    return (
        <div className="info__container">
            {rows.map(() => (
                <EducationInfoContainer />
            ))}
            <Button className="outline-rec my-5" onClick={handleRows}>
                Add
            </Button>
        </div>
    );
};

export default Education;
