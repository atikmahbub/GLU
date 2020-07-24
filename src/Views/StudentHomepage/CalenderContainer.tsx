import React from 'react';
import HorizontalLine from '../../components/HorizontalLine';
import { Typography } from '@material-ui/core';
import TitleSubtitle from '../../components/TitleSubtitle';

const CalenderContainer: React.FunctionComponent = () => {
    return (
        <div className="calender__container">
            <HorizontalLine />
            <div className="row">
                <div className="col-lg-6">
                    <Typography>Calender</Typography>
                </div>
                <div className="col-lg-6 border-left">
                    <div className="row">
                        <div className="col-lg-6">
                            <TitleSubtitle
                                title={
                                    <>
                                        24/07/20 <br /> 3pm- 4.30pm
                                    </>
                                }
                                subtitle="45mins"
                            />
                        </div>
                        <div className="col-lg-6">
                            <TitleSubtitle
                                title={
                                    <>
                                        24/07/20 <br /> 3pm- 4.30pm
                                    </>
                                }
                                subtitle="45mins"
                            />
                        </div>
                    </div>
                    <div className="mt-5"></div>
                    <HorizontalLine/>
                    <div className="mb-5"></div>
                    <div className="row">
                        <div className="col-lg-6">
                            <TitleSubtitle
                                title={
                                    <>
                                        24/07/20 <br /> 3pm- 4.30pm
                                    </>
                                }
                                subtitle="45mins"
                            />
                        </div>
                        <div className="col-lg-6">
                            <TitleSubtitle
                                title={
                                    <>
                                        24/07/20 <br /> 3pm- 4.30pm
                                    </>
                                }
                                subtitle="45mins"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalenderContainer;
