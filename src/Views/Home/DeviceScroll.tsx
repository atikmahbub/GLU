import React from 'react';
import { Icons } from '../../Assets/Icons';
import commonImg from '../../Assets/images';

const DeviceScroll: React.FunctionComponent = () => {
    return (
        <div className="device__animation">
            <div className="device__mask__container">
                <img src={commonImg.deviceMask} alt="" />
                <div className="taskbar__container">
                <img  className="taskbar" src={commonImg.deviceTaskbar} alt="" />
                </div>
            </div>
            <div className="device__container">
                <img  id="device__content" src={commonImg.deviceA} alt="" />
            </div>
        </div>
    );
};

export default DeviceScroll;
