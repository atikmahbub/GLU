import React from 'react';
import commonImg from '../../Assets/images';

const ImageRow = () => {
    return (
        <div className="image__row">
                <div className="row">
                    <div className="col-md-6 mb-5 ml-auto">
                        <img src={commonImg.boy} alt=""/>
                    </div>
                </div>
        </div>
    );
}

export default ImageRow;
