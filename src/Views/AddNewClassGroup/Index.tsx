import React from 'react';
import TwoColGrid from '../../components/Dashobard/TwoColGrid';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import { Grid } from '@material-ui/core';
import SelectWithLabel from '../../components/Inputs/SelectWithLabel';
import ProfileTileContainer from '../../components/Dashobard/FormGroup/ProfileTileContainer';
import commonImg from '../../Assets/images';

const Index = () => {
    const data = [
        { name: 'Shehan Abeysinghe', photo: commonImg.photo },
        { name: 'Jenny Smith', photo: commonImg.photo },
        { name: 'Gemma Abigail Holmes', photo: commonImg.photo },
        { name: 'Gwanda Betty Cooper', photo: commonImg.photo },
        { name: 'Jenny Smith', photo: commonImg.photo },
        { name: 'Shehan Abeysinghe', photo: commonImg.photo },
        { name: 'Jenny Smith', photo: commonImg.photo },
        { name: 'Gemma Abigail Holmes', photo: commonImg.photo },
        { name: 'Shehan Abeysinghe', photo: commonImg.photo },
        { name: 'Jenny Smith', photo: commonImg.photo },
        { name: 'Gemma Abigail Holmes', photo: commonImg.photo },
        { name: 'Shehan Abeysinghe', photo: commonImg.photo },
        { name: 'Jenny Smith', photo: commonImg.photo },
        { name: 'Gemma Abigail Holmes', photo: commonImg.photo },
    ];
    return (
        <TwoColGrid titleOne="New Class Group">
            <InputWithLabel fieldName="Class name" mt="mt-0" />
            <InputWithLabel fieldName="Teacher" />
            <InputWithLabel fieldName="" placeholder="Add another member" />
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <SelectWithLabel options={[]} fieldName="Year group" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <SelectWithLabel options={[]} fieldName="Department" />
                </Grid>
            </Grid>
            <ProfileTileContainer data={data} />
        </TwoColGrid>
    );
};

export default Index;
