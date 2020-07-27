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
import StudentStepper from './StudentStepper';
import ParentStepper from './ParentStepper';
import TeacherStepper from './TeacherStepper';

const Index: React.FunctionComponent = () => {
    const [active, setActive] = useState(0);
    const [whoIam, setWhoIam] = useState('');
    const [activeLength, setActiveLength] = useState(0);
    const [hideButtons, setHideButtons] = useState({ farword: false, backward: false });
    const routes = useHistory();
    const initial = { title: 'Who are you?', comp: <WhoIam whoAmIHandler={(value: string) => setWhoIam(value)} /> };
    const [renderComponent, setRenderComponent] = useState<any>([initial]);
    const handleNext = () => {
        if (whoIam !== '') {
            if (active === activeLength - 1) {
                setHideButtons({ ...hideButtons, farword: true });
            } else {
                setActive((prevState) => prevState + 1);
            }
        }
    };
    const handleBack = () => {
        if (whoIam !== '') {
            if (hideButtons.farword) {
                setHideButtons({ ...hideButtons, farword: false });
            }
            if (active === 0) {
            } else {
                setActive((prevState) => prevState - 1);
            }
        }
    };
    const goBack = () => {
        setActive((prevState) => prevState - 1);
    }
    const renderStepper:any = {
        student: <StudentStepper active={active} />,
        parent: <ParentStepper active={active} />,
        teacher: <TeacherStepper active={active} />,
    };
    const student = [
        { title: 'Your details', comp: <InfoContainer /> },
        { title: 'Your Education', comp: <Education handler={handleNext} /> },
        {
            title: 'Your Education',
            comp: (
                <PreviewCard
                    title="Education 1"
                    heading1="Don joe"
                    heading2="A-Level"
                    heading3="Maths, Enlgish, ICT"
                    handler={goBack}
                />
            ),
        },
        { title: 'Verify Account', comp: <VerifyAccount /> },
        { title: 'Verify Account', comp: <VerificationCode /> },
    ];
    const parent = [
        { title: 'Your details', comp: <InfoContainer /> },
        { title: 'Your Children', comp: <ParentChildren handler={handleNext} /> },
        {
            title: 'Your Children',
            comp: (
                <PreviewCard
                    title="Child 1"
                    heading1="John Smith"
                    heading2="john@school.com"
                    heading3="+44 7711 805 667"
                    handler={goBack}
                />
            ),
        },
        { title: 'Verify Account', comp: <VerifyAccount /> },
        { title: 'Verify Account', comp: <VerificationCode /> },
    ];
    const teacher = [
        { title: 'Your details', comp: <InfoContainer /> },
        { title: 'About You', comp: <TeacherBio /> },
        { title: 'Your Education', comp: <Education handler={handleNext} /> },
        {
            title: 'Your Education',
            comp: (
                <PreviewCard
                    title="Education 1"
                    heading1="University of Essex "
                    heading2="Primary Education"
                    heading3="First Class"
                    handler={goBack}
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
                    handler={goBack}
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
                const studentPages = [initial, ...student];
                setRenderComponent(studentPages);
                setActiveLength(studentPages.length);
                break;
            case 'parent':
                const parentPages = [initial, ...parent];
                setRenderComponent(parentPages);
                setActiveLength(parentPages.length);
                break;
            case 'teacher':
                const teacherPages = [initial, ...teacher];
                setRenderComponent(teacherPages);
                setActiveLength(teacherPages.length);
                break;
            default:
                break;
        }
    };
    useEffect(() => {
        getComponent();
    }, [whoIam]);

    return (
        <div className="signup__setup">
            <NavigationMenu />
            <div className="wrapper">
                <div className="row">
                    <div className="col-md-6 mb-2">
                        <Typography className="stepper__title">
                            Step {active + 1}/{activeLength}
                        </Typography>
                        <div className="stepper_marker">{renderStepper[whoIam]}</div>
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
            {!hideButtons.farword && (
                <IconButton className="controller-button" onClick={handleNext}>
                    <ArrowForward className="icon" />
                </IconButton>
            )}
        </div>
    );
};

export default Index;
