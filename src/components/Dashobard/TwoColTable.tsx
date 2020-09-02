import React from 'react';
import { Typography } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

interface props {
    color?: string;
    data?: Array<{ col1: string; col2: string | React.ReactNode }>;
    colHead1?: string;
    colHead2?: string;
    tableName?: string;
    colWidth1?: string;
    colWidth2?: string;
    height?: string;
    children?: React.ReactNode
}
const TwoColTable: React.FunctionComponent<props> = ({
    color,
    data,
    colHead1,
    colHead2,
    tableName,
    colWidth1,
    colWidth2,
    height,
    children
}) => {
    return (
        <div className="data-container bg-white">
            <Typography className="heading">{tableName}</Typography>
            <div style={{ maxHeight: height }} className="table-data">
                <table className="table">
                    <thead>
                        <tr>
                            <th style={{ width: colWidth1 }}>{colHead1}</th>
                            <th>{colHead2}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item: any) => (
                            <tr key={uuidv4()}>
                                <td style={{ width: colWidth2 }}>{item.col1}</td>
                                <td style={{ color }}>{item.col2}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {children}
        </div>
    );
};

export default TwoColTable;
