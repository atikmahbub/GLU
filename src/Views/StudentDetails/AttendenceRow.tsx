import React from 'react';
import PercentCard from './PercentCard';

const AttendenceRow = () => {
    return (
        <div>
            <div className="row row__margin">
                <div className="col-lg-8 col-md-12 colum__spacing">
                    <div className="bg-white p-5"></div>
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
