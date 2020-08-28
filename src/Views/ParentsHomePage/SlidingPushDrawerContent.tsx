import React from 'react';
import { Typography } from '@material-ui/core';


const SlidingPushDrawerContent: React.FunctionComponent = () => {
    return (
        <div className="push__drawer__content">
                <Typography className="heading">Today</Typography>
                <div className="title__description">
                    <div className="first__row__title">
                        <Typography className="title">GEMS School</Typography>
                    </div>
                    <div className="second__row__description">
                        <Typography className="subtitle">
                            Child 1 has been given after school detention between 3.30 and 4pm.
                        </Typography>
                    </div>
                </div>

                <div className="title__description">
                    <div className="first__row__title">
                        <Typography className="title">Message Request </Typography>
                    </div>
                    <div className="second__row__description">
                        <Typography className="subtitle">
                            Jen Holden is trying to send you a message.
                        </Typography>
                    </div>
                </div>

                <div className="title__description">
                    <div className="first__row__title">
                        <Typography className="title">Topped Up </Typography>
                    </div>
                    <div className="second__row__description">
                        <Typography className="subtitle">
                            Your wallet has been topped up with AED250
                        </Typography>
                    </div>
                </div>

                <div className="title__description">
                    <div className="first__row__title">
                        <Typography className="title">Booking confirmed </Typography>
                    </div>
                    <div className="second__row__description">
                        <Typography className="subtitle">
                            Maths class with Ray Smith has been added to your calendar
                        </Typography>
                    </div>
                </div>
        </div>
    );
};

export default React.memo(SlidingPushDrawerContent);
