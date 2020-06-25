import React from 'react';
import { Typography } from '@material-ui/core';

const TeacherList: React.FunctionComponent = () => {
    return (
        <div className="data-container">
            <Typography className="heading">Subject Details</Typography>
            <div className="table-data">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Teacher</th>
                            <th>Teach</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Alex chen</td>
                            <td>Computer</td>
                        </tr>
                        <tr>
                            <td>Alex chen</td>
                            <td>Computer</td>
                        </tr>
                        <tr>
                            <td>Alex chen</td>
                            <td>Computer</td>
                        </tr>
                        <tr>
                            <td>Alex chen</td>
                            <td>Computer</td>
                        </tr>
                        <tr>
                            <td>Alex chen</td>
                            <td>Computer</td>
                        </tr>
                        <tr>
                            <td>Alex chen</td>
                            <td>Computer</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TeacherList;
