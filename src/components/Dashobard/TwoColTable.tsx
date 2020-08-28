import React from 'react';
import { Typography } from '@material-ui/core';
import {v4 as uuidv4} from "uuid";

interface props {
    color?: string;
    data?: Array<{col1:string, col2:string}>;
}
const TwoColTable: React.FunctionComponent<props> = ({ color, data }) => {
    return (
        <div className="data-container bg-white">
            <Typography className="heading">Subject Details</Typography>
            <div className="table-data">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>James Arthur</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item: any) => (
                            <tr key={uuidv4()} >
                                <td>{item.col1}</td>
                                <td style={{color}}>{item.col2}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TwoColTable;
