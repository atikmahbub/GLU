import React, { useState } from 'react';
import ColumnChart from './ColumnChart';
import StudentAttendanceTable from './StudentAttendanceTable';

const StudentAttendanceChart: React.FunctionComponent = () => {
    const [showTable, setShowTable] = useState<boolean>(false);
    const handleTable = () => {
        setShowTable(true);
    }
    return (
        <div>
            <ColumnChart marker1="Present" marker2="Absent" chartName="Attendance" clickHandler={handleTable} />
            {showTable && <StudentAttendanceTable/>}
        </div>
    );
};

export default StudentAttendanceChart;
