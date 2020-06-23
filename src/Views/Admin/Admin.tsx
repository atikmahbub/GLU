import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { TextField, Typography, Button } from '@material-ui/core';
import LinkContainer from './LinkContainer';
import { Facebook, LinkedIn, Twitter, YouTube } from '@material-ui/icons';
import EventCalender from './EventCalender';
import UploadImgFile from '../../components/Button/UploadImgFile';

const Admin: React.FunctionComponent = () => {
    return (
        <div className="admin-page-container">
            <CardContainer>
                <div className="admin-page">
                    <div className="row">
                        <div className="col-lg-5 mb-4">
                            <EventCalender />
                        </div>
                        <div className="col-lg-7">
                            <div className="school-information-container">
                                <Typography className="heading">School Information</Typography>
                                <div className="row">
                                    <div className="col-md-6">
                                        <TextField
                                            variant="outlined"
                                            className="custom-input"
                                            label="School Email"
                                            fullWidth
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <TextField
                                            variant="outlined"
                                            type="number"
                                            className="custom-input"
                                            label="Telephone Number"
                                            fullWidth
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <TextField
                                            variant="outlined"
                                            className="custom-input"
                                            label="School Address"
                                            fullWidth
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <TextField
                                            variant="outlined"
                                            className="custom-input"
                                            label="School Website"
                                            fullWidth
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="social-media-container">
                                        <Typography className="heading">Social Media Links</Typography>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <LinkContainer
                                                    inputName="Facebook Link"
                                                    icon={<Facebook className="icon" />}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <LinkContainer
                                                    inputName="Linkedin Link"
                                                    icon={<LinkedIn className="icon" />}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <LinkContainer
                                                    inputName="Twitter Link"
                                                    icon={<Twitter className="icon" />}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <LinkContainer
                                                    inputName="Youtube Link"
                                                    icon={<YouTube className="icon" />}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="notice-container">
                                        <Typography className="heading">Update Notices</Typography>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <UploadImgFile btnType="inputBtn"  text="Upload File" getFile={()=>{}}/>
                                            </div>
                                            <div className="col-md-6">
                                                <TextField
                                                    variant="outlined"
                                                    className="custom-input"
                                                    label="Message"
                                                    fullWidth
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button-container">
                                        <Button className="primary-btn">Update</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default Admin;
