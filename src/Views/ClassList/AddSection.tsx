import React, { useState, useEffect } from 'react';
import ModalBox from '../../components/Modal/ModalBox';
import { TextField, Button } from '@material-ui/core';
import EditableAddBtn from '../../components/Dashobard/EditableAddBtn';
import EditableDeleteBtn from '../../components/Dashobard/EditableDeleteBtn';
import { addNewSectionAPIcall } from '../../Redux/Actions/classAction';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

interface props {
    onClick: () => void;
    show: boolean;
    sections: any;
}
const AddSection: React.FunctionComponent<props> = ({ onClick, show, sections }) => {
    const [state, setState] = useState(['']);
    const dispatch = useDispatch();
    const handleAdder = () => {
        const total = [...state];
        total.push('');
        setState(total);
    };
    const handlerDelete = (i: number) => {
        const total = [...state];
        total.splice(i, 1);
        setState(total);
    };
    const handleSection = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
        const section = [...state];
        section[i] = e.target.value;
        setState(section);
    };
    useEffect(() => {
        if (sections) {
            setState(sections.editSection);
        }
    }, [sections]);
    const submitData = () => {
        const data = state.map((item: string) => {
            return {
                name: item,
            };
        });
        console.log(data);
        dispatch(addNewSectionAPIcall({ sections: data }, sections.id, onClick));
    };
    return (
        <div>
            {show ? (
                <ModalBox title="Create Form Group" modalHandler={onClick}>
                    <div className="add-section-container">
                        {state.map((item, i) => (
                            <div key={uuidv4()} className="line-container">
                                <div className="line">
                                    <TextField
                                        value={item}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSection(e, i)}
                                        className="custom-input mb-0"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </div>
                                <div className="line-btn">
                                    {i === 0 ? (
                                        <EditableAddBtn click={handleAdder} />
                                    ) : (
                                        <EditableDeleteBtn click={() => handlerDelete(i)} />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="modal-form">
                        <Button onClick={submitData} className="session-button" type="submit">
                            Create Form Group
                        </Button>
                    </div>
                </ModalBox>
            ) : null}
        </div>
    );
};

export default AddSection;
