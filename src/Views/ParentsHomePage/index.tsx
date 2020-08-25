import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import NavBarReusable from '../../components/NavBarReusable';
import SectionTwoReusable from '../../components/Home/SectionTwoReusable';
import NextClass from '../../components/NextClass';
import FeaturedSubjects from '../../components/FeaturedSubjects';


import commonImg from '../../Assets/images';
// import { parentsRoutes } from '../../Routes/Parents/routes';
// import {v4 as uuidv4} from "uuid";

const index: React.FunctionComponent = () => {
    // useEffect(()=>{
    //     const element = document.getElementsByTagName('html');
    //     console.log(element);
    //     element[0].style.fontSize="16px";
    // },[])
    const menu = [
        { link: '', name: 'Home' },
        { link: '', name: 'Dashboard' },
        { link: '', name: 'Subjects' },
        { link: '', name: 'Messages' },
    ];
    return (
        <div className="homepage__wrapper">
            <NavBarReusable menuList={menu} />
            <SectionTwoReusable
                image={commonImg.smilegirl}
                mobileImg={commonImg.curlygirlcroped}
                leftTitle="Charlie Ray"
                desktopTitle="AED200 / 45mins"
                title="Tutors"
                msg={<>Maths.<br />An Introduction to trignometry</>}
            />
            <NextClass/>
            <FeaturedSubjects/>
        </div>
    );
};

export default index;
