import React, { useContext } from 'react';
import Identity from './Identity';
import UploadMaxSize from '../../components/Button/UploadMaxSize';
import { registerContext } from './Index';

const IdentyCard = () => {
    const context = useContext(registerContext);
    const handleUpload = (file: File) => {
        const data = {...context.state};
        data.teacher.file = file;
        context.setState(data);
    }
    return (
        <div >
            <Identity/>
            <UploadMaxSize onClick={handleUpload} />
        </div>
    );
}

export default IdentyCard;
