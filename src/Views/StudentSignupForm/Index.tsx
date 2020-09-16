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
import ExperiencePreviewCard from './ExperiencePreviewCard';
import { useDispatch, useSelector } from 'react-redux';
import {
    registerAPIcall,
    registerPhoneNumberAPIcall,
    studentEduAPIcall,
    verifyOTPAPIcall,
} from '../../Redux/Actions/registerAction';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import { useHistory } from 'react-router';

export const registerContext = createContext<any>({});
const RegisterProvider = registerContext.Provider;

const Index: React.FunctionComponent = () => {
    const [active, setActive] = useState(0);
    const [whoIam, setWhoIam] = useState('');
    const [state, setState] = useState({
        otp: '',
        parent: {
            childs: [{ firstName: '', lastName: '', email: '', phoneCode: '+91', phoneNum: '', location: '' }],
        },
        teacher: {
            skills: [],
            file: null,
            identity: 'dl',
            experience: [{ workplace: '', position: '', designation: '', from: new Date(), to: new Date() }],
        },
        student: {
            firstName: '',
            lastName: '',
            email: '',
            phoneCode: '+91',
            phoneNum: '',
            location: 'Up',
            password: '@Gyan123@',
            tc: 'tc',
            veriCode: '+91',
            veriMobile: '',
            gender: 'male',
            education: [{ schoolName: '', qualification: '', course: '', from: new Date(), to: new Date() }],
        },
    });
    const [editMode, setEditMode] = useState(false);
    const [curActive, setCurActive] = useState(0);
    const [activeLength, setActiveLength] = useState(0);
    const [hideButtons, setHideButtons] = useState({ farword: false, backward: false });
    const initial = { title: 'Who are you?', comp: <WhoIam whoAmIHandler={(value: string) => setWhoIam(value)} /> };
    const [renderComponent, setRenderComponent] = useState<any>([initial]);
    const token = useSelector((state: rootReducerType) => state.authReducer.userData);
    const handleSPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, student: { ...state.student, password: e.target.value } });
    };
    const handleTc = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, student: { ...state.student, tc: e.target.value } });
    };
    const handleSchool = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = { ...state };
        let active = data.student.education.length - 1;
        if (editMode) {
            active = curActive;
        }
        data.student.education[active] = {
            ...state.student.education[active],
            schoolName: e.target.value,
        };
        setState(data);
    };
    const handleQualification = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = { ...state };
        let active = data.student.education.length - 1;
        if (editMode) {
            active = curActive;
        }
        data.student.education[active] = {
            ...state.student.education[active],
            qualification: e.target.value,
        };
        setState(data);
    };
    const handleCourse = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = { ...state };
        let active = data.student.education.length - 1;
        if (editMode) {
            active = curActive;
        }
        data.student.education[active] = {
            ...state.student.education[active],
            course: e.target.value,
        };
        setState(data);
    };
    const handleFromDate = (date: Date) => {
        const data = { ...state };
        let active = data.student.education.length - 1;
        if (editMode) {
            active = curActive;
        }
        data.student.education[active] = {
            ...state.student.education[active],
            from: date,
        };
        setState(data);
    };
    const handleToDate = (date: Date) => {
        const data = { ...state };
        let active = data.student.education.length - 1;
        if (editMode) {
            active = curActive;
        }
        data.student.education[active] = {
            ...state.student.education[active],
            to: date,
        };
        setState(data);
    };
    const handleVeriCode = (value: string) => {
        setState({ ...state, student: { ...state.student, veriCode: value } });
    };
    const handleVeriMobile = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setState({ ...state, student: { ...state.student, veriMobile: e.target.value } });
    };
    const handleNext = () => {
        setEditMode(false);
        userRegistration();
        if (active === 0) {
            goToNextPage();
        }
        if (active === 5) {
            otpVerifyCall();
        }
    };
    console.log(state);
    const goToNextPage = () => {
        if (whoIam !== '') {
            if (active === activeLength - 1) {
                setHideButtons({ ...hideButtons, farword: true });
            } else {
                setActive((prevState) => prevState + 1);
            }
        }
    };

    const dispatch = useDispatch();
    const userRegistration = () => {
        let role = '';
        if (whoIam === 'student') {
            role = 'Student';
        } else if (whoIam === 'parent') {
            role = 'Guardian';
        } else if (whoIam === 'teacher') {
            role = 'Teacher';
        }
        const registerData = {
            email: state.student.email,
            password: state.student.password,
            firstName: state.student.firstName,
            lastName: state.student.lastName,
            role: role,
            location: state.student.location,
            firebaseToken: '123',
        };
        const educationData = state.student.education.map((item: any) => {
            return {
                school: item.schoolName,
                qualification: item.qualification,
                fieldOfStudy: item.course,
                startDate: item.from.toISOString(),
                endDate: item.to.toISOString(),
            };
        });
        if (active === 1) {
            dispatch(registerAPIcall(registerData, goToNextPage));
        } else if (active === 3 && whoIam === 'student') {
            educationData.forEach((item, i: number) => {
                if (i === educationData.length - 1) {
                    dispatch(studentEduAPIcall(item, goToNextPage));
                } else {
                    dispatch(studentEduAPIcall(item));
                }
            });
            console.log(active);
        }
    };
    const routes = useHistory();
    const gotoWelcome = () => {
        routes.push({
            pathname: '/signup-success',
            state: {
                userName: `${state.student.firstName} ${state.student.lastName}`,
            },
        });
    };
    const otpVerifyCall = () => {
        const data = {
            phoneNumber: `${state.student.veriCode}${state.student.veriMobile}`,
            code: state.otp,
        };
        dispatch(verifyOTPAPIcall(data, gotoWelcome));
    };
    const handleCodeSend = (value: string) => {
        console.log(value);
        const contact = { phoneNumber: `${state.student.veriCode}${value}` };
        dispatch(registerPhoneNumberAPIcall(contact, goToNextPage));
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

    const experienceBack = () => {
        const data = { ...state };
        data.teacher.experience.push({
            workplace: '',
            position: '',
            designation: '',
            from: new Date(),
            to: new Date(),
        });
        setState(data);
        setActive((prevState) => prevState - 1);
    };

    const editHandler = (i: number) => {
        setEditMode(true);
        setCurActive(i);
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
                        handleEdit={editHandler}
                        handler={goBack}
                    />
                </>
            ),
        },
        { title: 'Verify Account', comp: <VerifyAccount onClick={handleCodeSend} /> },
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
                    handleEdit={editHandler}
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
                    title="Education"
                    handleEdit={editHandler}
                    handler={goBack}
                />
            ),
        },
        { title: 'Your Experience', comp: <TeacherExperience nextHandler={handleNext} /> },
        {
            title: 'Your Experience',
            comp: (
                <ExperiencePreviewCard
                    data={state.teacher.experience}
                    title="Education"
                    handleEdit={editHandler}
                    handler={experienceBack}
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
                                    editMode: editMode,
                                    currentActive: curActive,
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
