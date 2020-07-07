import React, { useState } from 'react';
import ModalBox from '../../components/Modal/ModalBox';
import { Typography, TextField, Button } from '@material-ui/core';
import EditableAddBtn from '../../components/Dashobard/EditableAddBtn';
import EditableDeleteBtn from '../../components/Dashobard/EditableDeleteBtn';

interface props {
    onClick: () => void;
    show: boolean;
}
const AddSection: React.FunctionComponent<props> = ({ onClick, show }) => {
    const [state, setState] = useState(['']);
    const handleAdder = () => {
        const total = [...state];
        total.push('');
        setState(total);
    };
    const handlerDelete = (i:number) => {
        const total = [...state];
        total.splice(i, 1);
        setState(total);
    }
    return (
        <div>
            {show ? (
                <ModalBox title="Create Form Group" modalHandler={onClick}>
                    <div className="add-section-container">
                        {state.map((item, i) => (
                            <div className="line-container">
                                <div className="line">
                                    <TextField value={item} className="custom-input mb-0" variant="outlined" fullWidth />
                                </div>
                                <div className="line-btn">
                                    {
                                        i===0?
                                        <EditableAddBtn click={handleAdder} />
                                        :
                                        <EditableDeleteBtn click={()=>handlerDelete(i)} />
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="modal-form">
                        <Button className=" session-button" type="submit">
                            Create Form Group
                        </Button>
                    </div>
                </ModalBox>
            ) : null}
        </div>
    );
};

export default AddSection;
