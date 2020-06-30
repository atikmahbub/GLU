import React, { useEffect, useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { TextField, Typography, Button } from '@material-ui/core';
import LinkContainer from './LinkContainer';
import { Facebook, LinkedIn, Twitter, YouTube } from '@material-ui/icons';
import EventCalender from './EventCalender';
import UploadImgFile from '../../components/Button/UploadImgFile';
import { useSelector, useDispatch } from 'react-redux';
import { getSchoolAPIcall, updateSchoolAPIcall } from '../../Redux/Actions/schoolAction';
import Loader from '../../components/Loader';

const Admin: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const schoolInfo = useSelector((state: any) => state.schoolReducer.schoolData);
    const loader = useSelector((state: any) => state.uiReducer.loader);

    const [state, setState] = useState({
        school_name: '',
        email: '',
        phone_number: '',
        address: '',
        website: '',
        fb_link: '',
        inst_link: '',
        twit_link: '',
        yout_link: '',
        ld_link: '',
    });
    const schoolNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, school_name: e.target.value });
    };
    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, email: e.target.value });
    };
    const phoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, phone_number: e.target.value });
    };
    const addressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, address: e.target.value });
    };
    const websiteHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, website: e.target.value });
    };
    const fbhandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, fb_link: e.target.value });
    };

    const linkdinHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, ld_link: e.target.value });
    };
    const twitterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, twit_link: e.target.value });
    };
    const youtubHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, yout_link: e.target.value });
    };

    const handleUpdate = () => {
        dispatch(updateSchoolAPIcall(state));
    };

    useEffect(() => {
        dispatch(getSchoolAPIcall());
    }, []);
    useEffect(() => {
        let data = { ...state };
        if (schoolInfo) {
            data = {
                school_name: schoolInfo.school_name,
                email: schoolInfo.email,
                phone_number: schoolInfo.phone_number,
                address: schoolInfo.address,
                website: schoolInfo.website,
                fb_link: schoolInfo.fb_link,
                inst_link: schoolInfo.inst_link,
                twit_link: schoolInfo.twit_link,
                yout_link: schoolInfo.twit_link,
                ld_link: schoolInfo.twit_link,
            };
        }

        setState(data);
    }, [schoolInfo]);

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
                                    <div className="col-md-12">
                                        <TextField
                                            value={state.school_name}
                                            onChange={schoolNameHandler}
                                            variant="outlined"
                                            className="custom-input"
                                            label="School Name"
                                            fullWidth
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <TextField
                                            value={state.email}
                                            onChange={emailHandler}
                                            variant="outlined"
                                            className="custom-input"
                                            label="School Email"
                                            fullWidth
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <TextField
                                            value={state.phone_number}
                                            onChange={phoneHandler}
                                            variant="outlined"
                                            type="number"
                                            className="custom-input"
                                            label="Telephone Number"
                                            fullWidth
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <TextField
                                            value={state.address}
                                            onChange={addressHandler}
                                            variant="outlined"
                                            className="custom-input"
                                            label="School Address"
                                            fullWidth
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <TextField
                                            value={state.website}
                                            onChange={websiteHandler}
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
                                                    value={state.fb_link}
                                                    valueHandler={fbhandler}
                                                    inputName="Facebook Link"
                                                    icon={<Facebook className="icon" />}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <LinkContainer
                                                    value={state.ld_link}
                                                    valueHandler={linkdinHandler}
                                                    inputName="Linkedin Link"
                                                    icon={<LinkedIn className="icon" />}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <LinkContainer
                                                    value={state.twit_link}
                                                    valueHandler={twitterHandler}
                                                    inputName="Twitter Link"
                                                    icon={<Twitter className="icon" />}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <LinkContainer
                                                    value={state.yout_link}
                                                    valueHandler={youtubHandler}
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
                                                <UploadImgFile
                                                    btnType="inputBtn"
                                                    text="Upload File"
                                                    getFile={() => {}}
                                                />
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
                                        <Button disabled={loader} onClick={handleUpdate} className="primary-btn">
                                            {loader ? <Loader /> : 'Update'}
                                        </Button>
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
