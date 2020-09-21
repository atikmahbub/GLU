import React,{useState,useRef} from 'react';
import { Typography, TextField } from '@material-ui/core';
interface props {
    skillArray?: any;
}
const NewSkillContainer: React.FunctionComponent<props> = ({ skillArray }) => {
    const [query,setQuery]=useState('');
    const [todo,setTodo]=useState(['Ryan Williams','Mat Henry','Dave Richardson','Josh Hughe']);
    const inputRef=useRef(null);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(query=='')
            return;
        setTodo([...todo,query]);
        inputRef.current.value='';
    }
  
    return (
        <>
            <div className="addSkill">
                <div className="col-md-12">
                    <form action="" onSubmit={(e)=>handleSubmit(e)}>
                    <div className="row" >
                        {/* <div className="col-md-12 p-0">
                        <Typography className="sub_heading">Add New</Typography>
                    </div> */}
                        <div className="col-md-12 p-0">
                            <TextField
                                inputRef={inputRef}
                                className="line-input-large"
                                label="Add New"
                                style={{ width: '90%' }}
                                fullWidth
                                onChange={(e)=>setQuery(e.target.value)}
                            />
                        </div>
                        <div className="col-md-12">
                            <div className="skill_container">
                                <div className="row choose_weeks">
                                    {todo.map((val: string, index: number) => (
                                        <Typography key={index} className="boxes">
                                            {val}
                                        </Typography>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NewSkillContainer;
