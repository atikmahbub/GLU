import React, { useEffect, useState } from 'react';
import { Typography, IconButton, Badge, Avatar, makeStyles } from '@material-ui/core';
import { Notifications, PowerSettingsNew } from '@material-ui/icons';
import OutlineBtn from '../../components/Button/OutlineBtn';
import { colors } from '../../Styles/colors';
import DateSelector from '../../components/DateTimeSelector/DateSelector';
import { useLocation, useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { resetTokenAndLocalStorage } from '../../Utility/API';
import commonImg from '../../Assets/images';

interface headerProps {
    title: string;
    icon: any;
}
interface locationProps {
    icon: string;
    breadcrumb: string;
}
const useStyles = makeStyles({
    colorPrimary: {
        color: '#fff',
        backgroundColor: '#026fc2',
    },
    datePickerStyle: {
        color: '#000',
        margin: 0,
        backgroundColor: '#fff',
        border: '1px solid #EAEDEF',
        borderRadius: '25px',
        width: '100%',
        height: '35px',
        boxShadow: '0px 2px 20px #CFD9DF66',
    },
});
const Header: React.FunctionComponent<headerProps> = ({ icon }) => {
    const history = useHistory();
    const [navArray, setNavArray] = useState<String[]>([]);
    const classes = useStyles();
    const routes = useLocation();
    const navigation = routes.state;
    const setNavigation = () => {
        if (routes.state) {
            setNavArray((navigation as locationProps).breadcrumb.replace('/', '').split('/'));
        } else {
            const navigation = routes.pathname.replace('/', '').split('/');
            setNavArray(navigation);
        }
    };

    const resetAuth = () => {
        resetTokenAndLocalStorage();
        history.push('/');
    };

    useEffect(() => {
        setNavigation();
    }, []);

    useEffect(() => {
        setNavigation();
    }, [routes]);

    return (
        <div className="dashboard-header">
            <div className="header-top">
                <div className="school-name-container">
                    <div className="name__logo__container">
                        <div className="logo__container">
                            <img src={commonImg.schoolLogo} alt=""/>
                        </div>
                        <div>
                        <Typography className="school-name">St. Xavier's Collegiate School</Typography>
                        <Typography className="title">Visit website</Typography>
                        </div>
                    </div>
                </div>
                <div className="bages-avatar">
                    <IconButton className="notification-btn">
                        <Badge badgeContent="2" className="notification-badge">
                            <Notifications />
                        </Badge>
                    </IconButton>
                    {/* <div className="user-avatar-sectio"> */}
                    <Avatar
                        alt="Remy Sharp"
                        src="https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg"
                    />

                    {/* </div> */}
                    <IconButton onClick={resetAuth} className="notification-btn mr-0 ml-4">
                        <PowerSettingsNew />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default Header;
