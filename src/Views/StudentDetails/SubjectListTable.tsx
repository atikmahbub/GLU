import React from 'react';
import { Typography } from '@material-ui/core';

const SubjectListTable: React.FunctionComponent = () => {
    return (
        <div className="data-container">
            <Typography className="heading">Subject Details</Typography>
            <div className="table-data">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Teach By</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Computer</td>
                            <td>Alex chen</td>
                        </tr>
                        <tr>
                            <td>Computer</td>
                            <td>Alex chen</td>
                        </tr>
                        <tr>
                            <td>Computer</td>
                            <td>Alex chen</td>
                        </tr>
                        <tr>
                            <td>Computer</td>
                            <td>Alex chen</td>
                        </tr>
                        <tr>
                            <td>Computer</td>
                            <td>Alex chen</td>
                        </tr>
                        <tr>
                            <td>Computer</td>
                            <td>Alex chen</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SubjectListTable;
