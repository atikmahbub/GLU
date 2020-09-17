import React, { useState ,useEffect} from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography } from '@material-ui/core';
import PersonalDashboard from '../PersonalSchool/PersonalDashboard';
import SchoolDashboard from '../PersonalSchool2/PersonalDashboard2';

const PersonalSchoolToggle: React.FunctionComponent = () => {
    const menu = [
        { link: '/tutor/', name: 'Dashboard' },
        { link: '/tutor/set-class', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    // useEffect(() => {
    //     const currentState=localStorage.getItem('toggleState')!=null?localStorage.getItem('toggleState'):'';
    //     setToggle(currentState?currentState:'isPersonal')
    // }, [])
    const clickHandler=(clickState)=>{
        localStorage.setItem('toggleState',clickState);
        setToggle(clickState);
    }
    const [toggle, setToggle] = useState(localStorage.getItem('toggleState')==null?"isPersonal":localStorage.getItem('toggleState'));
    return (
        <NavigationMenu menuList={menu} showBurgerNav={'hide'} tutorOptions={"show"} reverseButtons={'yes'} background="secondary">
            <div className="personal_school">
                <div className="personal-school-main">
                    <Typography
                        onClick={()=>clickHandler("isPersonal")}
                        style={{ color: toggle == 'isPersonal' ? 'black' : '#8b8b8b' }}
                        className="mainHeading1"
                    >
                        Personal
                    </Typography>
                    <Typography
                        onClick={()=>clickHandler("isSchool")}
                        style={{ color: toggle == 'isSchool' ? 'black' : '#8b8b8b' }}
                        className="mainHeading2"
                    >
                        School
                    </Typography>
                </div>
                {toggle === 'isPersonal' ? <PersonalDashboard /> : <SchoolDashboard />}
            </div>
        </NavigationMenu>
    );
};
export default PersonalSchoolToggle;
