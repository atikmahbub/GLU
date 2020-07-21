import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import WelcomeText from '../../components/WelcomeText';

const ShowWelcome = () => {
    return (
        <div className="signup__setup welcome__page">
            <NavigationMenu />
            <WelcomeText title="Thank You Harrison!"/>
        </div>
    );
}

export default ShowWelcome;
