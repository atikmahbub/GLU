import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import WelcomeText from '../../components/WelcomeText';

const ShowWelcome = () => {
    return (
        <NavigationMenu background="transparent" colorWhite>
            <div className="signup__setup welcome__page">
                <WelcomeText title="Thank You Harrison!" />
            </div>
        </NavigationMenu>
    );
};

export default ShowWelcome;
