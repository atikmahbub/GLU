import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import NavigationMenu from '../../components/NavigationMenu';
import WelcomeText from '../../components/WelcomeText';

const ShowWelcome = () => {
    const routes = useLocation();
    const [name, setName] = useState('');
    useEffect(() => {
        if (routes.hasOwnProperty('state')) {
            if ((routes as any).state.hasOwnProperty('userName')) {
                setName((routes as any).state.userName);
            }
        }
    }, []);
    return (
        <NavigationMenu background="transparent" colorWhite absolute>
            <div className="signup__setup welcome__page">
                <WelcomeText title={`Thank You ${name}`} />
            </div>
        </NavigationMenu>
    );
};

export default ShowWelcome;
