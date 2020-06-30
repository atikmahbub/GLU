import React from 'react';
import { Typography } from '@material-ui/core';

const StudentListTable: React.FunctionComponent = () => {
    return (
        <div className="data-container">
            <Typography className="heading">Form Class Details</Typography>
            <div className="table-data">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Year Group</th>
                            <th>Form Group</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Year 1</td>
                            <td>A, B, C</td>
                        </tr>
                        <tr>
                            <td>Year 2</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>Year 3</td>
                            <td>A, B</td>
                        </tr>
                        <tr>
                            <td>Year 4</td>
                            <td>A,B</td>
                        </tr>
                        <tr>
                            <td>Year 5</td>
                            <td>A, B, C</td>
                        </tr>
                        <tr>
                            <td>Year 6</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>Year 7</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>Year 8</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>Year 9</td>
                            <td>A</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentListTable;
