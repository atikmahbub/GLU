import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import commonImg from '../../Assets/images';
import { Typography } from '@material-ui/core';
import PaymentDetailsTable from './PaymentDetailsTable';
import StudentFeeTable from './StudentFeeTable';
import ChildDetailsContainer from './ChildDetailsContainer';

const ParentDetails: React.FunctionComponent = () => {
    return (
        <div className="details-wrapper">
            <CardContainer>
                <div className="details-container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="profile-pic">
                                <img src={commonImg.photo} />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="information-container">
                                <Typography className="heading">John Lee</Typography>
                                <Typography className="title">+91 7785844718</Typography>
                                <Typography className="title">johnlee@gmail.com</Typography>
                                <Typography className="title">2666 Junior Avenue, Atlanta, GA, 30303</Typography>
                            </div>
                            <div className="divider"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-10">
                           <ChildDetailsContainer/>
                            <div className="divider"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-5">
                            <div className="data-container">
                                <StudentFeeTable />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <PaymentDetailsTable />
                        </div>
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default ParentDetails;
