import React from 'react';
import { makeStyles } from '@material-ui/core';
import { colors } from '../../Styles/colors';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import TwoColGrid from '../../components/Dashobard/TwoColGrid';

const useStyles = makeStyles({
    parent: {
        padding: '4.062rem 3.437rem',
        backgroundColor: colors.white,
        height: '88vh',
    },
    title: {
        fontSize: '1.562rem',
        lineHeight: '1.875rem',
        fontWeight: 500,
        color: colors.black,
    },
});
const Index = () => {
    return (
        <TwoColGrid titleOne="New Form Group">
            <InputWithLabel fieldName="Year group title" mt="mt-0" />
            <InputWithLabel fieldName="Head of year" />
            <InputWithLabel fieldName="" placeholder="Add another member" />
        </TwoColGrid>
    );
};

export default Index;
