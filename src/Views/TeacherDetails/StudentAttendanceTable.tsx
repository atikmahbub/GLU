import React from 'react';
import CardTable from '../../components/Table/CardTable';
import AttendanceTile from '../../components/Dashobard/AttendanceTile';
import { StudentAttendanceTableTypes } from '../../Interfaces/teacherDetailsProps';

const StudentAttendanceTable: React.FunctionComponent = () => {
    return (
        <div className="">
            <CardTable
                showToolbar={true}
                showPagination={true}
                columns={[
                    {
                        width: '20%',
                        title: 'Student',
                        field: 'student',
                    },
                    {
                        width: '10%',
                        title: 'YearGroup',
                        field: 'yearGroup',
                    },
                    {
                        width: '10%',
                        title: 'FormGroup',
                        field: 'formGroup',
                    },

                    {
                        width: '60%',
                        title: 'Attendance',
                        field: 'attendance',
                        render: (rowData: StudentAttendanceTableTypes)=>(<AttendanceTile value={rowData.attendance}/>)
                    },
                ]}
                rowData={[
                    {
                        student: 'Ashish Gupta',
                        yearGroup: 'First',
                        formGroup: 'A',
                        attendance: 40,
                    },
                    {
                        student: 'Ashish Gupta',
                        yearGroup: 'First',
                        formGroup: 'A',
                        attendance: 80,
                    },
                    {
                        student: 'Ashish Gupta',
                        yearGroup: 'First',
                        formGroup: 'A',
                        attendance: 50,
                    },
                    {
                        student: 'Ashish Gupta',
                        yearGroup: 'First',
                        formGroup: 'A',
                        attendance: 80,
                    },
                    {
                        student: 'Ashish Gupta',
                        yearGroup: 'First',
                        formGroup: 'A',
                        attendance: 80,
                    },
                ]}
            />
        </div>
    );
};

export default StudentAttendanceTable;
