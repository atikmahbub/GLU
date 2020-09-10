import React from 'react';
import { Typography, IconButton, Button } from '@material-ui/core';
import { ControlPoint } from '@material-ui/icons';
import CardContainer from '../../Containers/Cards/CardContainer';
import CardStatus from './CardStatus';
import CardTable from '../../components/Table/CardTable';
import GraphContainer from './GraphContainer';
import { v4 as uuidv4 } from 'uuid';
import { Icons } from '../../Assets/Icons';

interface tableProps {
    student: string;
    class: string;
    invoice: string;
    amount: string;
    status: string;
}
const Dashboard: React.FunctionComponent = () => {
    const userList = [
        { username: 'Student', total: 200 },
        { username: 'Teachers', total: 10 },
        { username: 'Parents', total: 5 },
        { username: 'Staff', total: 5 },
    ];
    const eventList = [
        { eventTime: '10:00-11:00', eventName: 'What was life in Bennin', eventDate: '07/06', eventOrg: 'jamie lee' },
        { eventTime: '10:00-11:00', eventName: 'What was life in Bennin', eventDate: '07/06', eventOrg: 'jamie lee' },
        { eventTime: '10:00-11:00', eventName: 'What was life in Bennin', eventDate: '07/06', eventOrg: 'jamie lee' },
    ];
    return (
        <div className="row row__margin">
            <div className="col-md-8 colum__spacing">
                <CardContainer mb="mb-2">
                    <GraphContainer />
                </CardContainer>
                <div className="row drow_mr">
                    {userList.map((item) => (
                        <div key={uuidv4()} className="col-md-6 colum__spacing">
                            <div className="bg-white">
                                <CardStatus heading={item.username} total={item.total} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row drow_mr">
                    <div className="col-md-12 colum__spacing">
                        <CardContainer>
                            <div className="dashboard-table-container">
                                <div className="table-header">
                                    <Typography className="heading">Accounts</Typography>
                                </div>
                                <CardTable
                                    showToolbar={true}
                                    showPagination={true}
                                    columns={[
                                        {
                                            width: '23%',
                                            title: 'Student',
                                            field: 'student',
                                        },
                                        {
                                            width: '23%',
                                            title: 'Class',
                                            field: 'class',
                                        },
                                        {
                                            width: '23%',
                                            title: 'Invoice',
                                            field: 'invoice',
                                        },
                                        {
                                            width: '23%',
                                            title: 'Amount',
                                            field: 'amount',
                                        },
                                        {
                                            width: '23%',
                                            title: 'Status',
                                            field: 'status',
                                            render: (rowData: tableProps) => (
                                                <Typography style={{ fontSize: '1.25rem' }}>
                                                    {rowData.status}
                                                </Typography>
                                            ),
                                        },
                                        {
                                            width: '23%',
                                            title: 'Action',
                                            field: 'action',
                                            render: () => <Button className="download-btn">Download</Button>,
                                        },
                                    ]}
                                    rowData={[
                                        {
                                            student: 'Ashish Gupta',
                                            class: 'IV',
                                            invoice: 'BXHD42H78G',
                                            amount: 'AED 1200',
                                            status: 'Sucess',
                                        },
                                        {
                                            student: 'Ashish Gupta',
                                            class: 'IV',
                                            invoice: 'BXHD42H78G',
                                            amount: 'AED 1200',
                                            status: 'Sucess',
                                        },
                                        {
                                            student: 'Ashish Gupta',
                                            class: 'IV',
                                            invoice: 'BXHD42H78G',
                                            amount: 'AED 1200',
                                            status: 'Sucess',
                                        },
                                        {
                                            student: 'Ashish Gupta',
                                            class: 'IV',
                                            invoice: 'BXHD42H78G',
                                            amount: 'AED 1200',
                                            status: 'Sucess',
                                        },
                                        {
                                            student: 'Ashish Gupta',
                                            class: 'IV',
                                            invoice: 'BXHD42H78G',
                                            amount: 'AED 1200',
                                            status: 'Sucess',
                                        },
                                        {
                                            student: 'Ashish Gupta',
                                            class: 'IV',
                                            invoice: 'BXHD42H78G',
                                            amount: 'AED 1200',
                                            status: 'Sucess',
                                        },
                                    ]}
                                />
                            </div>
                        </CardContainer>
                    </div>
                </div>
            </div>
            <div className="col-md-4 colum__spacing  position-relative">
                <div style={{ top: 0 }} className="attendance_column">
                    <CardContainer>
                        <div className="card-status attandece-card">
                            <div className="status-header primary">
                                <Typography className="status-heading">Today's Attendence</Typography>
                            </div>
                            <Typography className="total-no">189</Typography>
                            <Typography className="total-status mb-3">Students are attending today</Typography>
                            <Typography className="primary__text">Go to attendance</Typography>
                        </div>
                    </CardContainer>
                    <CardContainer>
                        <div className="upcomming-event-container">
                            <div className="event-header">
                                <Typography className="heading">Upcoming Events</Typography>
                                <IconButton>
                                    <img src={Icons.calendar} width={22} height={18} />
                                </IconButton>
                            </div>
                            <div className="event-body">
                                {eventList.map((item) => (
                                    <div key={uuidv4()} className="event-chip-card">
                                        <div className="left">
                                            <div className="circle">{item.eventDate}</div>
                                        </div>
                                        <div className="middle">
                                            <Typography className="heading">{item.eventTime}</Typography>
                                            <Typography className="heading">{item.eventName}</Typography>
                                            <Typography className="heading org">{item.eventOrg}</Typography>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContainer>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
