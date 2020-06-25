import React from 'react';
import CardTable from '../../components/Table/CardTable';
import TitleCardContainer from './TitleCardContainer';
import { Typography } from '@material-ui/core';
import './routineTable.scss';

interface props{
    data: any,
    tableName: string
}
const StudentTimeTable: React.FunctionComponent<props> = ({data, tableName}) => {
    return (
        <div className="student-timetable">
            <Typography className="sub-heading">{tableName}</Typography>
             <CardTable
                        showToolbar={false}
                        showPagination={false}
                        columns={[
                            {
                                width: '15%',
                                title: 'Class',
                                field: 'class',
                            },
                            {
                                width: '75%',
                                title: 'Routine',
                                field: 'routine',
                                render: (rowData:any) => <TitleCardContainer data={rowData.routine}/>,
                            },

                        ]}
                        rowData={data}
                    />
        </div>
    );
}

export default StudentTimeTable;
