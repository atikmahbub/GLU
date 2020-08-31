import React from 'react';
import { Typography } from '@material-ui/core';
import {v4 as uuidv4} from "uuid";

interface props {
    color?: string;
    data?: Array<{col1:string, col2:string}>;
    colHead1?:string;
    colHead2?:string;
    tableName?: string;
}
const TwoColTable: React.FunctionComponent<props> = ({ color, data, colHead1, colHead2, tableName }) => {
    return (
        <div className="data-container bg-white">
            <Typography className="heading">{tableName}</Typography>
            <div className="table-data">
                <table className="table">
                    <thead>
                        <tr>
                            <th>{colHead1}</th>
                            <th>{colHead2}</th>
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
