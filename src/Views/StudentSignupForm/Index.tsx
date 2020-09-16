import React, { useState, useEffect, createContext } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography, IconButton } from '@material-ui/core';
import { ArrowForward, ArrowBack } from '@material-ui/icons';
import WhoIam from './WhoIam';
import InfoContainer from './InfoContainer';
import Education from './Education';
import PreviewCard from './PreviewCard';
import VerifyAccount from './VerifyAccount';
import VerificationCode from './VerificationCode';
import ParentChildren from './ParentChildren';
import TeacherBio from './TeacherBio';
import TeacherExperience from './TeacherExperience';
import TeacherSkills from './TeacherSkills';
import IdentyCard from './IdentyCard';
import StudentStepper from './StudentStepper';
import ParentStepper from './ParentStepper';
import TeacherStepper from './TeacherStepper';
import ParentPreviewCard from './ParentPreviewCard';

export const registerContext = createContext<any>({});
const RegisterProvider = registerContext.Provider;

const Index: React.FunctionComponent = () => {
    const [active, setActive] = useState(0);
    const [whoIam, setWhoIam] = useState('');
    const [state, setState] = useState({
        parent: {
            childs: [{ firstName: '', lastName: '', email: '', phoneCode: '+91', phoneNum: '', location: '' }],
        },
        student: {
            firstName: '',
            lastName: '',
            email: '',
            phoneCode: '+91',
            phoneNum: '',
            location: '',
            password: '',
            tc: 'tc',
            veriCode: '+91',
            veriMobile: '',
            education: [{ schoolName: '', qualification: '', course: '', from: new Date(), to: new Date() }],
        },
    });
    const [activeLength, setActiveLength] = useState(0);
    const [hideButtons, setHideButtons] = useState({ farword: false, backward: false });
    const initial = { title: 'Who are you?', comp: <WhoIam whoAmIHandler={(value: string) => setWhoIam(value)} /> };
    const [renderComponent, setRenderComponent] = useState<any>([initial]);

    const handleSPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, student: { ...state.student, password: e.target.value } });
    };
    const handleTc = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, student: { ...state.student, tc: e.target.value } });
    };
    const handleSchool = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = { ...state };
        data.student.education[data.student.education.length - 1] = {
            ...state.student.education[data.student.education.length - 1],
            schoolName: e.target.value,
        };
        setState(data);
    };
    const handleQualification = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = { ...state };
        data.student.education[data.student.education.length - 1] = {
            ...state.student.education[data.student.education.length - 1],
            qualification: e.target.value,
        };
        setState(data);
    };
    const handleCourse = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = { ...state };
        data.student.education[data.student.education.length - 1] = {
            ...state.student.education[data.student.education.length - 1],
            course: e.target.value,
        };
        setState(data);
    };
    const handleFromDate = (date: Date) => {
        const data = { ...state };
        data.student.education[data.student.education.length - 1] = {
            ...state.student.education[data.student.education.length - 1],
            from: date,
        };
        setState(data);
    };
    const handleToDate = (date: Date) => {
        const data = { ...state };
        data.student.education[data.student.education.length - 1] = {
            ...state.student.education[data.student.education.length - 1],
            to: date,
        };
        setState(data);
    };
    const handleVeriCode = (value: string) => {
        setState({ ...state, student: { ...state.student, veriCode: value } });
    };
    const handleVeriMobile = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, student: { ...state.student, veriMobile: e.target.value } });
    };
    console.log(state);
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

    const parentGoBack = () => {
        const data = { ...state };
        data.parent.childs.push({
            firstName: '',
            lastName: '',
            email: '',
            phoneCode: '+91',
            phoneNum: '',
            location: '',
        });

        setState(data);
        setActive((prevState) => prevState - 1);
    };
    const goBack = () => {
        const data = { ...state };
        data.student.education.push({
            schoolName: '',
            qualification: '',
            course: '',
            from: new Date(),
            to: new Date(),
        });

        setState(data);
        setActive((prevState) => prevState - 1);
    };

    const renderStepper: any = {
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
                <>
                    <PreviewCard
                        data={state.student.education}
                        title="Education"
                        handleEdit={() => {}}
                        handleDelete={() => {}}
                        handler={goBack}
                    />
                </>
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
                <ParentPreviewCard
                    data={state.parent.childs}
                    title="Child"
                    handleEdit={() => {}}
                    handleDelete={() => {}}
                    handler={parentGoBack}
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
                    data={state.student.education}
                    title="Education 1"
                    handleEdit={() => {}}
                    handleDelete={() => {}}
                    handler={goBack}
                />
            ),
        },
        { title: 'Your Experience', comp: <TeacherExperience /> },
        {
            title: 'Your Experience',
            comp: (
                <PreviewCard
                    data={state.student.education}
                    title="Education 1"
                    handleEdit={() => {}}
                    handleDelete={() => {}}
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
        <NavigationMenu showMenuOptions={false}>
            <div className="signup__setup">
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
                            <RegisterProvider
                                value={{
                                    setState: setState,
                                    state: state,
                                    student: state.student,
                                    studentHandler: {
                                        password: handleSPassword,
                                        tc: handleTc,
                                        schoolName: handleSchool,
                                        qualification: handleQualification,
                                        course: handleCourse,
                                        from: handleFromDate,
                                        to: handleToDate,
                                        veriCode: handleVeriCode,
                                        veriMobile: handleVeriMobile,
                                    },
                                    parentHandler: {},
                                }}
                            >
                                <div className="choose__container">{renderComponent[active].comp}</div>
                            </RegisterProvider>
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
        </NavigationMenu>
    );
};

export default Index;
