import React from 'react';
import HeadingRowContainer from './HeadingRowContainer';
import { Typography } from '@material-ui/core';

interface props {
    imageFirstURL: string;
    imageFirstTitle: string;
    imageSecondURL: string;
    imageSecondTitle: string;
}

const FeaturedSubjects: React.FunctionComponent<props>  = ({
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
                    <div className="col-lg-6 image__large__container">
                        <div className="image__large" >
                            <img src={imageFirstURL} />
                        </div>
                        <div >
                            <Typography className="title">
                                {imageFirstTitle}
                            </Typography>
                        </div>

                    </div>
                    <div className="col-lg-6 image__small__container">
                        <div className="image__small" >
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

export default FeaturedSubjects;
