import React, { useContext } from 'react';
import UnderLineAddornment from '../../components/Inputs/UnderLineAddornment';
import { FormControl, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';
import UserDetailsForm from './UserDetailsForm';
import { registerContext } from './Index';

const InfoContainer: React.FunctionComponent = () => {
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
        context.setState({ ...context.state, student: { ...context.state.student, phoneCode: value } });
    };

    const handleSPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        context.setState({ ...context.state, student: { ...context.state.student, phoneNum: e.target.value } });
    };

    const handleSlocation = (e: React.ChangeEvent<HTMLInputElement>) => {
        context.setState({ ...context.state, student: { ...context.state.student, location: e.target.value } });
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
                mobilePre={context.student.phoneCode}
                handleMobilePre={(value: string) => handleSphoneCode(value)}
                mobile={context.student.mobile}
                handleMobile={handleSPhoneNumber}
                location={context.student.location}
                handleLocation={handleSlocation}
            />
            <div className="row">
                <div className="col-lg-12">
                    <UnderLineAddornment label="Password" className="custom-adornment-input" />
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
                        className="title"
                        control={<Radio className="radio-button" />}
                        label="I accept the Terms and Conditions"
                    />
                    <FormControlLabel
                        value="po"
                        className="title"
                        control={<Radio className="radio-button" />}
                        label="Send me promotional offers and surverys via email or SMS"
                    />
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default InfoContainer;
