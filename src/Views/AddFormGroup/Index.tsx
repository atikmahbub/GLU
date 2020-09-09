import React from 'react';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import ThreeText from '../../components/Dashobard/FormGroup/ThreeText';
import commonImg from '../../Assets/images';
import ProfileTileContainer from '../../components/Dashobard/FormGroup/ProfileTileContainer';
import TwoColGrid from '../../components/Dashobard/TwoColGrid';

const Index = () => {
    const profileData = [
        { name: 'Shehan Abeysinghe', photo: commonImg.photo },
        { name: 'Jenny Smith', photo: commonImg.photo },
        { name: 'Gemma Abigail Holmes', photo: commonImg.photo },
        { name: 'Gwanda Betty Cooper', photo: commonImg.photo },
        { name: 'Shehan Abeysinghe', photo: commonImg.photo },
        { name: 'Jenny Smith', photo: commonImg.photo },
        { name: 'Shehan Abeysinghe', photo: commonImg.photo },
        { name: 'Jenny Smith', photo: commonImg.photo },
    ];
    return (
        <TwoColGrid titleOne="New Form Group">
            <InputWithLabel fieldName="Group name" mt="mt-0" />
            <ThreeText headTitle="Tutor" title="John Wick" another="Add another member" />
            <InputWithLabel fieldName="Students" placeholder="Add student" />
            <ProfileTileContainer data={profileData} />
        </TwoColGrid>
    );
};

export default Index;
