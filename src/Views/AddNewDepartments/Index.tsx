import React from 'react';
import TwoColGrid from '../../components/Dashobard/TwoColGrid';
import InputWithLabel from '../../components/Inputs/InputWithLabel';

const Index = () => {
    return (
        <TwoColGrid titleOne="New Department">
            <InputWithLabel fieldName="Title" mt="mt-0" />
            <InputWithLabel fieldName="Head of department" />
            <InputWithLabel placeholder="Add another member" />
        </TwoColGrid>
    );
};

export default Index;
