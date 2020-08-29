import React from 'react';
import { Typography,TextField } from '@material-ui/core';
interface props {
    skillArray?: any;
}
const NewSkillContainer: React.FunctionComponent<props> = ({ skillArray }) => {
    return (
        <>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-12 p-0">
                        <Typography className="sub_heading">Add New</Typography>
                    </div>
                    <div className="col-md-12 p-0">
                        <TextField className="line-input" style={{ width: '85%' }} />
                    </div>
                    <div className="col-md-12">
                        <div className="skill_container">
                            <div className="row choose_weeks">
                                {skillArray.map((val:string, index:number) => (
                                    <Typography key={index} className="boxes">
                                        {val}
                                    </Typography>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewSkillContainer;
