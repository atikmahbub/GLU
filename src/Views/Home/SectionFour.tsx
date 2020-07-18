import React from 'react';
import { Typography } from '@material-ui/core';
import commonImg from '../../Assets/images';

interface props {
    imageOne: string;
    imageTwo: string;
}
const SectionFour: React.FunctionComponent<props> = ({ imageOne, imageTwo }) => {
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
                        <Typography className="title">
                            Glu is an innovative web based app that bridges the gap between schools, teachers, parents
                            and students. Glu is a platform that allows for a more collaborative learning experience.
                        </Typography>
                        <Typography className="real-time-intraction">Real-time interactive whiteboard</Typography>
                        <img className="board-icon" src={commonImg.whiteBoardSvg} />
                        <img className="lappy-girl" src={imageTwo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionFour;
