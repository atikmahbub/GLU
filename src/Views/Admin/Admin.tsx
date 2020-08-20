import React, { useEffect, useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { TextField, Typography, Button } from '@material-ui/core';
import LinkContainer from './LinkContainer';
import { Facebook, LinkedIn, Twitter, YouTube, ArrowForward } from '@material-ui/icons';
import UploadImgFile from '../../components/Button/UploadImgFile';
import { useSelector, useDispatch } from 'react-redux';
import { getSchoolAPIcall, updateSchoolAPIcall } from '../../Redux/Actions/schoolAction';
import Loader from '../../components/Loader';
import { Link } from 'react-router-dom';
import SchoolBasicInfo from './SchoolBasicInfo';
import SchoolContactInfo from './SchoolContactInfo';

const Admin: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const schoolInfo = useSelector((state: any) => state.schoolReducer.schoolData);
    const loader = useSelector((state: any) => state.uiReducer.loader);
    const [activeCom, setActiveComp] = useState<number>(0);
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

    const renderComponent = [<SchoolBasicInfo />, <SchoolContactInfo/>];
    const handleComp = (active: number) => {
        setActiveComp(active);
    };
    return (
        <div className="admin-page-container">
            <CardContainer>
                <div className="admin-page">
                    <div className="row">
                        <div className="col-lg-5 mb-4">
                            <div className="information__name__container">
                                <Typography
                                    className={`title ${activeCom === 0 ? 'active' : ''}`}
                                    onClick={() => handleComp(0)}>
                                    Basic Information
                                </Typography>
                                <Typography
                                    className={`title ${activeCom === 1 ? 'active' : ''}`}
                                    onClick={() => handleComp(1)}>
                                    Contact Details
                                </Typography>
                                <Typography
                                    className={`title ${activeCom === 2 ? 'active' : ''}`}
                                    onClick={() => handleComp(2)}>
                                    Social Media
                                </Typography>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            {renderComponent[activeCom]}
                            {/* <div className="row">
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
                        */}
                        </div>
                    </div>
                    <div className="controller__bottom">
                        <div className="row">
                            <div className="col-6">
                                <Typography className="help-support">
                                    Read our <Link to=""> Help Guide </Link> for support
                                </Typography>
                            </div>
                            <div className="col-6">
                                <div className="arrow__container">
                                    <Typography className="text">Save</Typography>
                                    <ArrowForward className="icon" />
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
