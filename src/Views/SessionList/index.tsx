import React, { useState } from 'react';
import ModalBox from '../../components/Modal/ModalBox';
import SessionList from './SessionList';
import { TextField, Button } from '@material-ui/core';
import TimeSelector from '../../components/DateTimeSelector/TimeSelector';
import SelectField from '../../components/Inputs/SelectField';
import { classes } from '../../Helper/classArray';

const index: React.FunctionComponent = () => {
    const [toggler, setToggler] = useState(false);
    const handleToggler = () => {
        setToggler(!toggler)
    }
    return (
        <div>
            {toggler ? (
                <ModalBox title="Create Session" modalHandler={handleToggler}>
                    <div className="modal-form">
                        <TimeSelector  label="Start Time"/>
                        <TimeSelector label="End Time"/>
                        <TextField variant="outlined" className="custom-input" fullWidth label="Topic Name" />
                        <SelectField className="custom-input" label="Select Class" options={classes} getValue={()=>{}} />
                        <SelectField className="custom-input" label="Faculty Name" options={["john", "lea", "Deven", "Jinwie"]} getValue={()=>{}} />
                        <Button className="session-button">Create Session</Button>
                    </div>
                </ModalBox>
            ) : null}
            <SessionList triggerModal={handleToggler} />
        </div>
    );
};

export default index;
