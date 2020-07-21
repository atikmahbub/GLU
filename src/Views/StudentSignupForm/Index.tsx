import React, { useState, useEffect } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography, IconButton } from '@material-ui/core';
import { ArrowForward, ArrowBack } from '@material-ui/icons';
import WhoIam from './WhoIam';
import InfoContainer from './InfoContainer';
import Education from './Education';
import PreviewCard from './PreviewCard';
import VerifyAccount from './VerifyAccount';
import VerificationCode from './VerificationCode';
import { useHistory } from 'react-router';
import ParentChildren from './ParentChildren';
import TeacherBio from './TeacherBio';
import TeacherExperience from './TeacherExperience';
import TeacherSkills from './TeacherSkills';
import IdentyCard from './IdentyCard';

const Index: React.FunctionComponent = () => {
    const [active, setActive] = useState(0);
    const [whoIam, setWhoIam] = useState('');
    const routes = useHistory();
    const initial = { title: 'Who are you?', comp: <WhoIam whoAmIHandler={(value: string) => setWhoIam(value)} /> };
    const [renderComponent, setRenderComponent] = useState<any>([initial]);
    const student = [
        { title: 'Your details', comp: <InfoContainer /> },
        { title: 'Your Education', comp: <Education /> },
        {
            title: 'Your Education',
            comp: (
                <PreviewCard title="Education 1" heading1="Don joe" heading2="A-Level" heading3="Maths, Enlgish, ICT" />
            ),
        },
        { title: 'Verify Account', comp: <VerifyAccount /> },
        { title: 'Verify Account', comp: <VerificationCode /> },
    ];
    const parent = [
        { title: 'Your details', comp: <InfoContainer /> },
        { title: 'Your Children', comp: <ParentChildren /> },
        {
            title: 'Your Children',
            comp: (
                <PreviewCard
                    title="Child 1"
                    heading1="John Smith"
                    heading2="john@school.com"
                    heading3="+44 7711 805 667"
                />
            ),
        },
        { title: 'Verify Account', comp: <VerifyAccount /> },
        { title: 'Verify Account', comp: <VerificationCode /> },
    ];
    const teacher = [
        { title: 'Your details', comp: <InfoContainer /> },
        { title: 'About You', comp: <TeacherBio /> },
        { title: 'Your Education', comp: <Education /> },
        {
            title: 'Your Education',
            comp: (
                <PreviewCard
                    title="Education 1"
                    heading1="University of Essex "
                    heading2="Primary Education"
                    heading3="First Class"
                />
            ),
        },
        { title: 'Your Experience', comp: <TeacherExperience /> },
        {
            title: 'Your Experience',
            comp: (
                <PreviewCard
                    title="Education 1"
                    heading1="GEMS Intl School"
                    heading2="Head of Department"
                    heading3="ICT"
                />
            ),
        },
        { title: 'Your Skill', comp: <TeacherSkills /> },
        { title: 'Your Identity', comp: <IdentyCard /> },
        { title: 'Verify Account', comp: <VerifyAccount /> },
        { title: 'Verify Account', comp: <VerificationCode /> },
    ];
    const getComponent = () => {
        switch (whoIam) {
            case 'student':
                setRenderComponent([initial, ...student]);
                break;
            case 'parent':
                setRenderComponent([initial, ...parent]);
                break;
            case 'teacher':
                setRenderComponent([initial, ...teacher]);
                break;
            default:
                break;
        }
    };
    useEffect(() => {
        getComponent();
    }, [whoIam]);
    const handleNext = () => {
        setActive((prevState) => prevState + 1);
    };
    const handleBack = () => {
        setActive((prevState) => prevState - 1);
    };
    useEffect(() => {
        if (active === 5) {
            // routes.push('/signup-success');
        }
    }, [active]);
    console.log(renderComponent);
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
