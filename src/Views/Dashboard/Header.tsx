import React, { useEffect, useState } from 'react';
import { Typography, IconButton, Badge, Avatar, makeStyles } from '@material-ui/core';
import { Notifications } from '@material-ui/icons';
import OutlineBtn from '../../components/Button/OutlineBtn';
import { colors } from '../../Styles/colors';
import DateSelector from '../../components/DateTimeSelector/DateSelector';
import {  useLocation } from 'react-router-dom';

interface headerProps {
    title: string;
    icon: any;
}
interface locationProps {
    icon: string,
    breadcrumb: string
}
const useStyles = makeStyles({
    colorPrimary: {
        color: '#fff',
        backgroundColor: '#026fc2',
    },
    datePickerStyle: {
        color: '#000',
        margin:0,
        backgroundColor: '#fff',
        border: '1px solid #EAEDEF',
        borderRadius: '25px',
        width: '100%',
        height: '35px',
        boxShadow: '0px 2px 20px #CFD9DF66',
    },
});
const Header: React.FunctionComponent<headerProps> = ({ icon }) => {
    const [navArray, setNavArray] = useState<String[]>([]);
    const classes = useStyles();
    const routes = useLocation();
    const navigation = routes.state;
    const setNavigation = () => {
        if(routes.state){
            setNavArray((navigation as locationProps).breadcrumb.replace("/", "").split("/"));
        }else {
            const navigation = routes.pathname.replace("/", "").split("/");
            setNavArray(navigation);
        }
    }
    useEffect(()=>{
        setNavigation();
    }, []);

    useEffect(()=>{
        setNavigation();
    }, [routes])
    
    return (
        <div className="dashboard-header">
            <div className="header-top">
                <div className="school-name-container">
                    <Typography className="school-name">St. Xavier's Collegiate School</Typography>
                    <OutlineBtn title="Visit Website" color={colors.primary} />
                </div>
                <div className="bages-avatar">
                    <IconButton className="notification-btn">
                        <Badge badgeContent="2" className="notification-badge">
                            <Notifications />
                        </Badge>
                    </IconButton>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg"
                    />
                </div>
            </div>
            <div className="header">
                {icon}
                <Typography variant="h4" className="heading">
                    {navArray.map((item, i)=>(
                        <>
                        <span>{item}</span>
                        <span className="splitter">  { i!== navArray.length-1  ? ">" : null} </span> 
                        </>
                    ))}
                </Typography>
                <div className="date-container">
                <DateSelector style={classes.datePickerStyle}/>
                </div>
            </div>
        </div>
    );
};

export default Header;
