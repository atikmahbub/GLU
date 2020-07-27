import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import EducationInfoContainer from './EducationInfoContainer';

interface props{
    handler: ()=> void
}
const Education: React.FunctionComponent<props> = ({handler}) => {
    const [rows, setRows] = useState([0]);
   
    return (
        <div className="info__container">
                <EducationInfoContainer />
            <Button className="outline-rec my-5" onClick={handler}>
                Add
            </Button>
        </div>
    );
};

export default Education;
