import React from 'react';
import UserDetailsWrapper from '../../../../Containers/Dashboard/UserDetailsWrapper';
import AttendenceRow from '../../../../components/Dashobard/UserDetails/AttendenceRow';
import PresentRow from '../../../../components/Dashobard/UserDetails/PresentRow';
import HeadingSubHeadingOneBtn from '../../../../components/Dashobard/UserDetails/HeadingSubHeadingOneBtn';
import Attendance from './Attendance';
import commonImg from '../../../../Assets/images';

const Index = () => {
    return (
        <UserDetailsWrapper>
            <HeadingSubHeadingOneBtn
                title="Attendace"
                subtitle=" Mr.John - Classes - Year 8 B"
                buttonText="Print"
                linkTo="/dashboard"
                personName="Olivia Preston"
                personTitle="2666 Junior Avenue, Atlanta, GA, 30303"
                image={commonImg.blueshirtman}
                showPerticular={true}
            />
            <AttendenceRow />
            <PresentRow />
            <Attendance/>
        </UserDetailsWrapper>
    );
};

export default Index;
