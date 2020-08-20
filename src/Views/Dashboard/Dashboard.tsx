import React from 'react';
import { Typography, IconButton, Button } from '@material-ui/core';
import { ControlPoint, ArrowForwardIos } from '@material-ui/icons';
import CardContainer from '../../Containers/Cards/CardContainer';
import CardStatus from './CardStatus';
import CardTable from '../../components/Table/CardTable';
import GraphContainer from './GraphContainer';
import { v4 as uuidv4 } from 'uuid';

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
        <div className="row">
            <div className="col-md-8 ">
                <CardContainer>
                    <GraphContainer />
                </CardContainer>
                <div className="row">
                    {userList.map((item) => (
                        <div key={uuidv4()} className="col-md-6 ">
                            <CardContainer>
                                <CardStatus heading={item.username} total={item.total} />
                            </CardContainer>
                        </div>
                    ))}
                </div>
                <div className="table_margin">
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
                                            <Typography style={{ fontSize: '1.25rem' }}>{rowData.status}</Typography>
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
            <div className="col-md-4  position-relative">
                <div style={{ top: 0 }} className="attendance_column">
                    <CardContainer>
                        <div className="card-status attandece-card">
                            <div className="status-header primary">
                                <Typography className="status-heading">Today's Attendence</Typography>
                            </div>
                            <Typography className="total-no">189</Typography>
                            <Typography className="total-status mb-3">STUDENTS ARE ATTENDING TODAY</Typography>
                            <Typography className="primary__text">Go To Attendance</Typography>
                        </div>
                    </CardContainer>
                    <CardContainer>
                        <div className="upcomming-event-container">
                            <div className="event-header">
                                <Typography className="heading">Upcoming Events</Typography>
                                <IconButton>
                                    <ControlPoint className="icon" />
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
