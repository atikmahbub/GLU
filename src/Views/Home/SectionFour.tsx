import React from 'react';
import { Typography } from '@material-ui/core';
import commonImg from '../../Assets/images';

interface props {
    imageOne: string;
    imageTwo: string;
    msg: string;
    show: boolean;
}
const SectionFour: React.FunctionComponent<props> = ({ imageOne, imageTwo, msg, show }) => {
    return (
        <div className="section-four">
            <div className="row">
                <div className="col-lg-6">
                    <div className="short-hair-girl-container">
                        <img className="short-hair-girl" src={imageOne} alt="" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="section-four-right-part-container">
                        <Typography className="title">{msg}</Typography>
                        {show && (
                            <>
                                <Typography className="real-time-intraction">interactive whiteboard</Typography>
                                <img className="board-icon" src={commonImg.whiteBoardSvg} />
                            </>
                        )}

                        <img className="lappy-girl" src={imageTwo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionFour;
