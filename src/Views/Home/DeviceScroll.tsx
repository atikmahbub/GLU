import React, { createRef } from 'react';
import commonImg from '../../Assets/images';
import VisibilitySensor from 'react-visibility-sensor';

interface props {
    image?: string;
}
const DeviceScroll: React.FunctionComponent<props> = ({ image }) => {
    const device = createRef<HTMLImageElement>();
    const handleDeviceScroll = (isVisible: boolean) => {
        console.log(isVisible);
        let isFirstView = true;
        if (isVisible) {
            let scrollTo = 0;
            let tempScroll = 0;
            let tempVal = 0;
            window.addEventListener('scroll', () => {
                if (tempScroll < (document as any).scrollingElement.scrollTop) {
                    tempVal = tempScroll - (document as any).scrollingElement.scrollTop;
                    scrollTo -= 5 - tempVal;
                } else {
                    tempVal = tempScroll - (document as any).scrollingElement.scrollTop;
                    console.log(tempVal);
                    scrollTo += 5 + tempVal;
                }
                if (scrollTo <= -5) {
                    if (scrollTo <= -3000) {
                        if (isFirstView) {
                            scrollTo = 0;
                            isFirstView = false;
                        } else {
                            scrollTo = -3000;
                        }
                        (device as any).current.style.transform = `translateY(${scrollTo}px)`;
                    } else {
                        (device as any).current.style.transform = `translateY(${scrollTo}px)`;
                    }
                } else {
                    scrollTo = 0;
                    (device as any).current.style.transform = `translateY(${scrollTo}px)`;
                }
                tempScroll = (document as any).scrollingElement.scrollTop;
            });
        } else {
            window.removeEventListener('scroll', () => {});
        }
    };
    return (
        <VisibilitySensor partialVisibility={true} onChange={handleDeviceScroll}>
            <div className="device__animation">
                <div className="device__mask__container">
                    <img src={commonImg.deviceMask} alt="" />
                    <div className="taskbar__container">
                        <img className="taskbar" src={commonImg.deviceTaskbar} alt="" />
                    </div>
                </div>
                <div className="device__container">
                    <img id={`device__content`} ref={device} src={image} alt="" />
                </div>
            </div>
        </VisibilitySensor>
    );
};

export default DeviceScroll;
