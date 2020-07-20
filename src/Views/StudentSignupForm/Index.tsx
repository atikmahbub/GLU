import React, { useState } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography, IconButton } from '@material-ui/core';
import { ArrowForward, ArrowBack } from '@material-ui/icons';
import WhoIam from './WhoIam';
import InfoContainer from './InfoContainer';
import Education from './Education';
import EducationPreview from './EducationPreview';
import VerifyAccount from './VerifyAccount';
import VerificationCode from './VerificationCode';

const Index: React.FunctionComponent = () => {
    const [active, setActive] = useState(0);

    const renderComponent = [
        { title: 'Who are you?', comp: <WhoIam /> },
        { title: 'Your details', comp: <InfoContainer /> },
        { title: 'Your Education', comp: <Education /> },
        { title: 'Your Education', comp: <EducationPreview /> },
        { title: 'Verify Account', comp: <VerifyAccount /> },
        { title: 'Verify Account', comp: <VerificationCode /> },
    ];
    const handleNext = () => {
        setActive((prevState) => prevState + 1);
    };
    const handleBack = () => {
        setActive((prevState) => prevState - 1);
    };
    return (
        <div className="signup__setup">
            <NavigationMenu />
            <div className="wrapper">
                <div className="row">
                    <div className="col-md-6 mb-2">
                        <Typography className="stepper__title">Step {active + 1}/6</Typography>
                        <div className="stepper_marker">
                            <ul>
                                <li className={`${active === 0 ? 'active' : ''}`}>Who are you </li>
                                <li className={`${active === 1 ? 'active' : ''}`}>Your details</li>
                                <li className={`${active === 2 || active === 3 ? 'active' : ''}`}>Education</li>
                                <li className={`${active === 4 || active === 5 ? 'active' : ''}`}>Verificication</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 mb-2">
                        <Typography className="stepper__title">Tell us a bit about yourself</Typography>
                        <Typography className="stepper__title">{renderComponent[active].title}</Typography>
                        <div className="choose__container">{renderComponent[active].comp}</div>
                    </div>
                </div>
            </div>
            <IconButton className="controller-button back" onClick={handleBack}>
                <ArrowBack className="icon" />
            </IconButton>
            <IconButton className="controller-button" onClick={handleNext}>
                <ArrowForward className="icon" />
            </IconButton>
        </div>
    );
};

export default Index;
