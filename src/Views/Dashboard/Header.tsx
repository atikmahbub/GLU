import React from 'react';
import { Typography } from '@material-ui/core';

interface headerProps {
    title: string;
    icon: any;
}
const Header: React.FunctionComponent<headerProps> = ({ title, icon }) => {
    return (
        <div className="dashboard-header">
            <div className="header">
                {icon}
                <Typography variant="h4" className="heading">
                    {title}
                </Typography>
            </div>
        </div>
    );
};

export default Header;
