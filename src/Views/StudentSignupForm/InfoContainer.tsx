import React, { useContext } from 'react';
import { FormControl, FormControlLabel, RadioGroup, Radio, makeStyles } from '@material-ui/core';
import UserDetailsForm from './UserDetailsForm';
import { registerContext } from './Index';
import PasswordOnChange from '../../components/Inputs/PasswordOnChange';
import { colors } from '../../Styles/colors';
import OutlineButton from '../../components/Button/OutlineButton';

const useStyles = makeStyles({
    icon: {
        color: colors.black,
        fontSize: '1rem',
    },
    formControl: {
        '& .MuiRadio-root': {
            padding: '0!important',
        },
    },
});

interface props{
    goNext?: ()=> void
}

const InfoContainer: React.FunctionComponent<props> = ({goNext}) => {
    const classes = useStyles();
    const context = useContext(registerContext);
    const handleSfirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        context.setState({ ...context.state, student: { ...context.state.student, firstName: e.target.value } });
    };
    const handleSlastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        context.setState({ ...context.state, student: { ...context.state.student, lastName: e.target.value } });
    };
    const handleSemailName = (e: React.ChangeEvent<HTMLInputElement>) => {
        context.setState({ ...context.state, student: { ...context.state.student, email: e.target.value } });
    };
    const handleSphoneCode = (value: string) => {
        context.setState({ ...context.state, student: { ...context.state.student, gender: value } });
    };

    const handleSPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        context.setState({ ...context.state, student: { ...context.state.student, phoneNum: e.target.value } });
    };

    const handleSlocation = (e: React.ChangeEvent<HTMLInputElement>) => {
        context.setState({ ...context.state, student: { ...context.state.student, location: e.target.value } });
    };
    const handlePassword = (value: string) => {
        context.setState({ ...context.state, student: { ...context.state.student, password: value } });
    };
    return (
        <div className="info__container">
            <UserDetailsForm
                firstName={context.student.firstName}
                handleFirstName={handleSfirstName}
                lastName={context.student.lastName}
                handleLastName={handleSlastName}
                email={context.student.email}
                handleEmail={handleSemailName}
                mobilePre={context.student.gender}
                handleMobilePre={(value: string) => handleSphoneCode(value)}
                mobile={context.student.mobile}
                handleMobile={handleSPhoneNumber}
                location={context.student.location}
                handleLocation={handleSlocation}
                disable={context.disable}
            />
            <div className="row">
                <div className="col-lg-12">
                    <PasswordOnChange
                        label="Password"
                        className="custom-adornment-input"
                        value={context.student.password}
                        onChange={handlePassword}
                    />
                </div>
            </div>
            <FormControl component="fieldset">
                <RadioGroup
                    aria-label="whoareu"
                    name="whoareu"
                    value={context.student.tc}
                    onChange={context.studentHandler.tc}
                >
                    <FormControlLabel
                        value="tc"
                        className={`title ${classes.formControl}`}
                        control={
                            <Radio
                                color="default"
                                checkedIcon={<i className={`icon-Stop_Recording ${classes.icon}`} />}
                                icon={<i className={`icon-Circle ${classes.icon}`} />}
                            />
                        }
                        label="I accept the Terms and Conditions"
                    />
                    <FormControlLabel
                        value="po"
                        className={`title ${classes.formControl}`}
                        control={
                            <Radio
                                color="default"
                                checkedIcon={<i className={`icon-Stop_Recording ${classes.icon}`} />}
                                icon={<i className={`icon-Circle ${classes.icon}`} />}
                            />
                        }
                        label="Send me promotional offers and surverys via email or SMS"
                    />
                </RadioGroup>
            </FormControl>
            <OutlineButton text="Next" width="10rem" btnClick={context.goNext} />
        </div>
    );
};

export default InfoContainer;
