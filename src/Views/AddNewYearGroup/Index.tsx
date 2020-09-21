import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { colors } from '../../Styles/colors';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import TwoColGrid from '../../components/Dashobard/TwoColGrid';
import OutlineButton from '../../components/Button/OutlineButton';
import { useDispatch } from 'react-redux';
import { addNewClassAPIcall } from '../../Redux/Actions/classAction';
import { useHistory } from 'react-router';

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
    const [state, setState] = useState({ yearGroup: '', hod: '', anotherHod: '' });
    const handleYearGroup = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, yearGroup: e.target.value });
    };
    const handleHod = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, hod: e.target.value });
    };
    const handleAnotherHod = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, anotherHod: e.target.value });
    };
    const dispatch = useDispatch();
    const routes = useHistory();
    const handleSubmit = () => {
        const data = {
            title: state.yearGroup,
            head: state.hod,
        };
        dispatch(addNewClassAPIcall(data, routes));
    };
    return (
        <TwoColGrid titleOne="New Form Group">
            <InputWithLabel fieldName="Year group title" mt="mt-0" value={state.yearGroup} onChange={handleYearGroup} />
            <InputWithLabel fieldName="Head of year" value={state.hod} onChange={handleHod} />
            <InputWithLabel
                fieldName=""
                placeholder="Add another member"
                value={state.anotherHod}
                onChange={handleAnotherHod}
            />
            <div className="mt-5">
                <OutlineButton text="Submit" btnClick={handleSubmit} />
            </div>
        </TwoColGrid>
    );
};

export default Index;
