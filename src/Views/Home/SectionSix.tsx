import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { emailSubscriber } from '../../Redux/Actions/loginAction';

const style = {
    valid_green: '',
};

const SectionSix: React.FunctionComponent = () => {
    const [placeholer, setPlaceholer] = useState<string>('');
    const [buttonText, setButtonText] = useState<string>('Subscribe');
    useEffect(() => {
        if (window.screen.width <= 425) {
            setPlaceholer('harrison@six.com');
        } else {
            setPlaceholer('harrison@madebysix.com');
        }
    }, []);
    const [email, setEmail] = useState('');
    const [isVerified, setEmailVerify] = useState(false);
    const disptach = useDispatch();

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (buttonText === 'Thank You') {
            setButtonText('Subscribe');
            setPlaceholer('harrison@madebysix.com');
        }
        setEmail(e.target.value);
        let emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailReg.test(e.target.value)) {
            setEmail(e.target.value);
            setEmailVerify(true);
        } else {
            setEmailVerify(false);
        }
    };
    const resetEmail = () => {
        setEmail('');
        setButtonText('Thank You');
        setPlaceholer("You've successfully subscribed");
    };
    const submitEmail = () => {
        if (isVerified) {
            disptach(emailSubscriber({ email }, resetEmail));
        }
    };
    console.log(email, placeholer, buttonText);
    return (
        <div className="section-six">
            <div className="row">
                <div className="col-md-6 col-lg-6">
                    <Typography className="title">Waiting List</Typography>
                    <Typography className="msg">Sign up and join the movement</Typography>
                </div>
                <div style={{ paddingLeft: '1.5rem' }} className="col-md-6 col-lg-6">
                    <Typography className="email-address">Email Address</Typography>
                    <div className="email-container">
                        <input value={email} className="email" placeholder={placeholer} onChange={handleEmail} />
                        <Typography className="subscribe" onClick={submitEmail}>
                            {buttonText}
                        </Typography>
                    </div>
                    <hr
                        className="email-line"
                        style={!isVerified ? {} : isVerified ? { borderColor: '#007AFF' } : { borderColor: '#cfcfcf' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default SectionSix;
