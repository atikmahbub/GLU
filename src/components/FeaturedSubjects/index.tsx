import React from 'react';
import HeadingRowContainer from '../../components/HeadingRowContainer';
import { Typography } from '@material-ui/core';
import './style.scss';

interface props {
    imageFirstURL: string;
    imageFirstTitle: string;
    imageSecondURL: string;
    imageSecondTitle: string;
}

const FeatureTutor: React.FunctionComponent<props>  = ({
    imageFirstURL,
    imageFirstTitle,
    imageSecondURL,
    imageSecondTitle
}) => {
    return (
        <div className="feature__container">
            <div className="heading__image__container">
                <div className="heading" >
                    <HeadingRowContainer title="Featured Subjects" link="see all" />

                </div>

                <div className="row image__container">
                    <div className="col-lg-6 image__first__container">
                        <div className="image__first" >
                            <img src={imageFirstURL} />
                        </div>
                        <div >
                            <Typography className="title">
                                {imageFirstTitle}
                            </Typography>
                        </div>

                    </div>
                    <div className="col-lg-6 image__second__container">
                        <div className="image__second" >
                            <img src={imageSecondURL} />
                        </div>
                        <div >
                            <Typography className="title">
                                {imageSecondTitle} 
                             </Typography>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default FeatureTutor;
