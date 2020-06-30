import React from 'react';
import { Typography } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

const SubjectListTable: React.FunctionComponent = () => {
    const data = [
        { subject: 'Physics', class: 'Year 1', group: 'A', student: 60 },
        { subject: 'Physics', class: 'Year 2', group: 'B', student: 40 },
        { subject: 'Physics', class: 'Year 3', group: 'A', student: 40 },
        { subject: 'Physics', class: 'Year 3', group: 'B', student: 66 },
        { subject: 'Physics', class: 'Year 4', group: 'A', student: 40 },
        { subject: 'Physics', class: 'Year 4', group: 'B', student: 50 },
        { subject: 'Physics', class: 'Year 5', group: 'A', student: 20 },
        { subject: 'Physics', class: 'Year 5', group: 'B', student: 40 },
        { subject: 'Physics', class: 'Year 6', group: 'A', student: 55 },
        { subject: 'Physics', class: 'Year 6', group: 'A', student: 69 },
        { subject: 'Physics', class: 'Year 7', group: 'B', student: 34 },
        { subject: 'Physics', class: 'Year 7', group: 'A', student: 64 },
        { subject: 'Physics', class: 'Year 8', group: 'B', student: 23 },
        { subject: 'Physics', class: 'Year 9', group: 'A', student: 74 },
        { subject: 'Physics', class: 'Year 10', group: 'A', student: 34 },
        { subject: 'Physics', class: 'Year 11', group: 'A', student: 60 },
    ];
    return (
        <div className="data-container">
            <Typography className="heading">Subject Details</Typography>
            <div className="table-data">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Year Group</th>
                            <th>Form Group</th>
                            <th>Total Students</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={uuidv4()}>
                                <td>{item.subject}</td>
                                <td>{item.class}</td>
                                <td>{item.group}</td>
                                <td>{item.student}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SubjectListTable;
