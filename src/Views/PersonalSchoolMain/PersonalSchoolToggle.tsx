import React ,{useState} from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography } from '@material-ui/core';
import PersonalDashboard from '../PersonalSchool/PersonalDashboard';
import SchoolDashboard from '../PersonalSchool2/PersonalDashboard2'

const PersonalSchoolToggle: React.FunctionComponent = () => {
    const menu = [
        { link: '/tutor/', name: 'Dashboard' },
        { link: '/tutor/set-class', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    const [toggle,setToggle]=useState("isPersonal");
    return (
        <div className="personal_school">
            <NavigationMenu menuList={menu} />
            <div className="personal-school-main">
            <Typography  onClick={()=>setToggle("isPersonal")} style={{color:toggle=="isPersonal"?'black':'#8b8b8b'}} className="mainHeading1">
                Personal
            </Typography>
            <Typography onClick={()=>setToggle("isSchool")} style={{color:toggle=="isSchool"?'black':'#8b8b8b'}} className="mainHeading2">
                School
            </Typography>
            </div>
            {toggle==="isPersonal"?<PersonalDashboard/>:<SchoolDashboard/>}
            
        </div>
    );
};
export default PersonalSchoolToggle;
