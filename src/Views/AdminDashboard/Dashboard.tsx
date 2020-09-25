import React from 'react';
import { Typography } from '@material-ui/core';
import CardContainer from '../../Containers/Cards/CardContainer';
import CardStatus from './CardStatus';
import GraphContainer from './GraphContainer';
import { v4 as uuidv4 } from 'uuid';

const Dashboard: React.FunctionComponent = () => {
    const userList = [
        { email: 'School', total: 12 },
        { email: 'Student', total: 200 },
        { email: 'Teachers', total: 10 },
        { email: 'Parents', total: 5 },
    ];
    return (
        <div className="row row__margin">
            <div className="col-md-8 colum__spacing">
                <div className="row row__margin">
                    <div className="col-md-12 pt-0 pb-0 colum__spacing">
                        <CardContainer mb="mb-2">
                            <GraphContainer />
                        </CardContainer>
                    </div>
                </div>
                <div className="row row__margin">
                    {userList.map((item) => (
                        <div key={uuidv4()} className="col-md-6 colum__spacing">
                            <div className="bg-white">
                                <CardStatus heading={item.email} total={item.total} />
                            </div>
                        </div>
                    ))}
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
                </div>
            </div>
        </div>
    );
};

export default Dashboard;