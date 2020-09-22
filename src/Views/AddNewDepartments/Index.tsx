import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import OutlineButton from '../../components/Button/OutlineButton';
import TwoColGrid from '../../components/Dashobard/TwoColGrid';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import { addNewDepartmentAPIcall, updateDepartmentAPIcall } from '../../Redux/Actions/schoolAction';

const Index = () => {
    const [state, setState] = useState<any>({ title: '', hod: [''], anotherHod: '' });
    const [editMode, setEditMode] = useState(false);
    const [id, setId] = useState(0);
    const handleDepartment = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, title: e.target.value });
    };
    const handleHod = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
        const data = { ...state };
        data.hod[i] = e.target.value;
        setState(data);
    };
    const handleAnotherHod = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, anotherHod: e.target.value });
    };
    const dispatch = useDispatch();
    const routes = useHistory();
    const findRoutes: any = useLocation();
    useEffect(() => {
        if (findRoutes.hasOwnProperty('state')) {
            if (findRoutes?.state?.hasOwnProperty('data')) {
                const values = findRoutes.state.data;
                let hod = [''];
                if (values.hod) {
                    hod = values.hod;
                }
                const data = {
                    title: values.department,
                    hod: hod,
                    anotherHod: '',
                };
                setId(values.id);
                setEditMode(true);
                setState(data);
            }
        }
    }, []);
    const handleSubmit = () => {
        const totalHod = [...state.hod];
        if (state.anotherHod !== '') {
            totalHod.push(state.anotherHod);
        }
        const data = {
            departmentName: state.title,
            hod: totalHod,
        };
        if (editMode) {
            dispatch(updateDepartmentAPIcall(id, data, routes));
        } else {
            dispatch(addNewDepartmentAPIcall(data, routes));
        }
    };
    return (
        <TwoColGrid titleOne="New Department">
            <InputWithLabel fieldName="Title" mt="mt-0" value={state.title} onChange={handleDepartment} />
            {state.hod.map((item: string, i: number) => (
                <InputWithLabel fieldName="Head of department" value={item} onChange={(e) => handleHod(e, i)} />
            ))}
            <InputWithLabel placeholder="Add another member" value={state.anotherHod} onChange={handleAnotherHod} />
            <div className="mt-4">
                <OutlineButton text="Submit" btnClick={handleSubmit} />
            </div>
        </TwoColGrid>
    );
};

export default Index;
