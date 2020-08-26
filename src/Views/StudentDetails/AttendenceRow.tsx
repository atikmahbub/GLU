import React, { useState } from 'react';
import PercentCard from './PercentCard';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { addDays } from 'date-fns';
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
                    <div className="bg-white">
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-12">
                                <DateRangePicker
                                    onChange={(item:any) => setState([item.selection])}
                                    showSelectionPreview={true}
                                    moveRangeOnFirstSelection={false}
                                    months={2}
                                    ranges={state}
                                    direction="horizontal"
                                />
                            </div>
                        </div>
                    </div>
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
