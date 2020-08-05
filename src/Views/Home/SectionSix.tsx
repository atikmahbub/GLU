import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { emailSubscriber } from '../../Redux/Actions/loginAction';

const SectionSix = () => {
    const [email, setEmail] = useState('');
    const disptach = useDispatch();
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const resetEmail = () => {
        setEmail('');
    }
    const submitEmail = () => {
        disptach(emailSubscriber({email}, resetEmail))
    }
    return (
        <div className="section-six">
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <Typography className="title">Waiting List</Typography>
                        <Typography className="msg">Sign up and join the movement</Typography>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <Typography className="email-address">Email Address</Typography>
                        <div className="email-container">
                            <input className="email" placeholder="harrison@madebysix.com" onChange={handleEmail} />
                            <Typography className="subscribe" onClick={submitEmail}>Subscribe</Typography>
                        </div>
                        <hr className="email-line" />
                    </div>
                </div>
            </div>
    );
}

export default SectionSix;
