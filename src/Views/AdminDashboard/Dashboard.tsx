import React, { useState, useEffect, } from 'react';
import { Typography } from '@material-ui/core';
import CardContainer from '../../Containers/Cards/CardContainer';
import CardStatus from './CardStatus';
import GraphContainer from './GraphContainer';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { getallUsersCountAPIcall } from '../../Redux/Actions/superAdminActions';

const Dashboard: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const all_users_count = useSelector((state: any) => state.superAdminReducer.allUsersCount);
    const [usersCountArray, setAllUsersCountArray] = useState();

    useEffect(() => {
        dispatch(getallUsersCountAPIcall());
    }, []);

    useEffect(() => {
        if (all_users_count) {
            const userListArray = []
            for(let [key, value] of Object.entries(all_users_count)){
                userListArray.push({
                    email: key, total: value 
                })
            }
            setAllUsersCountArray(userListArray);
        }
    }, [all_users_count]);

    // alert(JSON.stringify(usersCountArray))
    return (
        <div className="row row__margin">
            <div className="col-md-12 colum__spacing">
                <div className="row row__margin">
                    <div className="col-md-12 pt-0 pb-0 colum__spacing">
                        <CardContainer mb="mb-2">
                            <GraphContainer />
                        </CardContainer>
                    </div>
                </div>
                <div className="row row__margin">
                    {usersCountArray && usersCountArray.map((item: any) => (
                        <div key={uuidv4()} className="col-md-6 colum__spacing">
                            <div className="bg-white">
                                <CardStatus heading={item.email} total={item.total} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="col-md-4 colum__spacing  position-relative">
                <div style={{ top: 0 }} className="attendance_column">
                    <CardContainer>
                        <div className="card-status attandece-card">
                            <div className="status-header primary">
                                <Typography className="status-heading">Today's Attendence</Typography>
                            </div>
                            <Typography className="total-no">189</Typography>
                            <Typography className="total-status mb-3">Students are attending today</Typography>
                        </div>
                    </CardContainer>
                </div>
            </div> */}
        </div>
    );
};

export default Dashboard;
