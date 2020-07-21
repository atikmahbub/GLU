import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography } from '@material-ui/core';
import NextClass from './NextClass';

const Index: React.FunctionComponent = () => {
    const menu = [
        { link: '', name: 'Home' },
        { link: '', name: 'Dashboard' },
        { link: '', name: 'Subjects' },
        { link: '', name: 'Messages' },
    ];
    return (
        <div className="homepage__wrapper">
            <div className="banner">
                <NavigationMenu menuList={menu} />
                <Typography className="large__text">Charlie Ray</Typography>
                <div className="overy-heading">
                    <Typography className="small__heading">AED200 / 45mins</Typography>
                    <Typography className="large__heading">
                        Maths. <br /> An introduction to <br /> trigonometry
                    </Typography>
                </div>
            </div>
            <NextClass/>
        </div>
    );
};

export default Index;
