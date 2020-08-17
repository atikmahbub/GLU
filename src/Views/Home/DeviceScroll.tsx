import React, { createRef } from 'react';
import commonImg from '../../Assets/images';
import VisibilitySensor from 'react-visibility-sensor';

interface props{
    image?: string
}
const DeviceScroll: React.FunctionComponent<props> = ({image}) => {
    const device = createRef<HTMLImageElement>();
    const handleDeviceScroll = (isVisible: boolean) => {
        if (isVisible) {
            let scrollTo = 0;
            let tempScroll = 0;
            window.addEventListener('scroll', () => {
                console.log(tempScroll, (document as any).scrollingElement.scrollTop);
                if (tempScroll < (document as any).scrollingElement.scrollTop) {
                    scrollTo -= 5;
                } else {
                    scrollTo += 5;
                }
                if (scrollTo <= -5) {
                    if (scrollTo <= -76) {
                        (device as any).current.style.transform = `translateY(${-76}%)`;
                    } else {
                        (device as any).current.style.transform = `translateY(${scrollTo}%)`;
                    }
                } else {
                    (device as any).current.style.transform = `translateY(0px)`;
                }
                tempScroll = (document as any).scrollingElement.scrollTop;
            });
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
