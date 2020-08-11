import React from 'react';
import { Typography } from '@material-ui/core';
import commonImg from '../../Assets/images';
import DeviceScroll from './DeviceScroll';

interface props{
    image: string;
    msg:string;
}
const SectionThree: React.FunctionComponent<props> = ({image, msg}) => {
    return (
        <div className="section-three">
            <div className="row make__col__reverse">
                <div className="col-md-6 col-lg-6">
                    <div className="left-part">
                        <img src={image} alt="" />
                        {/* <DeviceScroll/> */}
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 d-flex">
                    <div className="right-part">
                        <Typography className="title">
                            {msg}
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionThree;
