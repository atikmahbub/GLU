import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const TeacherSkills = () => {
    const [skills, setSkills] = useState<string[]>([]);
    const [value, setValue] = useState('');
    const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
  const handleSkills =  (e: React.KeyboardEvent) => {
            if (e.key === 'Enter') {
                const data = skills;
                data.push(value);
                setValue('');
                setSkills([...data]);
            }
        }
 const handleDeleteSkill = (i:number) => {
     const data = skills;
     data.splice(i, 1);
     setSkills([...data])
 }
    return (
        <div className="info__container">
            <div className="row">
                <div className="col-lg-12">
                    <TextField
                        className="line-input mb-2"
                        value={value}
                        onChange={handleValue}
                        onKeyDown={handleSkills}
                        label="Add Skill"
                        fullWidth
                    />
                </div>
                <div className="chip-container">
                    {skills.map((name: string, i:number) => (
                        <div className="chip">{name}
                            <Close className="close-icon" onClick={()=>handleDeleteSkill(i)}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeacherSkills;
