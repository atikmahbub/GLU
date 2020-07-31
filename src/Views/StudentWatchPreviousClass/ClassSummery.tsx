import React from 'react';
import { Typography } from '@material-ui/core';

const ClassSummery = () => {
    return (
        <div className="class__summary__container">
                            <div className="row">
                                <div className="col-md-6 mb-2">
                                    <Typography className="title">
                                        Class <br /> Summary
                                    </Typography>
                                </div>
                                <div className="col-md-6 mb-2">
                                    <Typography className="summery__heading">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                    </Typography>
                                    <Typography className="summery__title">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                                        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                                        gubergren...
                                    </Typography>
                                    <Typography className="read__more">Read more</Typography>
                                </div>
                            </div>
                        </div>
    );
}

export default ClassSummery;
