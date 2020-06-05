import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { Face, Person } from '@material-ui/icons';
import CardContainer from '../../Containers/Cards/CardContainer';
import CardStatus from './CardStatus';

const Dashboard: React.FunctionComponent = () => {
    const userList = [
        { username: 'Student', total: 20 },
        { username: 'Teachers', total: 10 },
        { username: 'Parents', total: 5 },
        { username: 'Admission', total: 10 },
        { username: 'Staff', total: 5 },
        { username: 'Accountant', total: 3 },
    ];
    return (
        <div className="row">
            <div className="col-md-9">
                <div className="row">
                    {userList.map((item) => (
                        <div className="col-md-4">
                            <CardContainer>
                                <CardStatus
                                    icon={<Person className="status-icon" />}
                                    heading={item.username}
                                    total={item.total}
                                />
                            </CardContainer>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-md-3">
                <div className="card-container">
                    <div className="card-status">
                        <div className="status-header primary">
                            <Face className="status-icon" />
                            <Typography className="status-heading">Todays Attendence</Typography>
                        </div>
                        <Typography className="total-no">10</Typography>
                        <Button className="gradient-button px-3">Go To Attendence Sheet</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
