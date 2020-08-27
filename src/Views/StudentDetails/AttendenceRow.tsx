import React, { useState } from 'react';
import PercentCard from './PercentCard';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { addDays } from 'date-fns';
import { Typography } from '@material-ui/core';
import CardContainer from '../../Containers/Cards/CardContainer';
const AttendenceRow = () => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection',
        },
    ]);

    return (
        <div>
            <div className="row row__margin">
                <div className="col-lg-8 col-md-12 colum__spacing">
                    <CardContainer>
                        <div className="attendace_container_row bg-white">
                            <div className="row">
                                <div className="col-md-4">
                                    <Typography className="calender_title">Calendar</Typography>
                                    <Typography className="calender_from">
                                        <span>From</span> 15th July To 8th August
                                    </Typography>
                                </div>
                                <div className="col-md-8">
                                    <DateRangePicker
                                        onChange={(item: any) => setState([item.selection])}
                                        showSelectionPreview={true}
                                        moveRangeOnFirstSelection={false}
                                        months={2}
                                        ranges={state}
                                        direction="horizontal"
                                    />
                                </div>
                            </div>
                        </div>
                    </CardContainer>
                </div>
                <div className="col-lg-4 col-md-12 colum__spacing">
                    <PercentCard heading="Attendance" percent={'24%'} title="Year to date" />
                    <PercentCard heading="Punctuality" percent={'45%'} title="Year to date (On time)" />
                </div>
            </div>
        </div>
    );
};

export default AttendenceRow;
