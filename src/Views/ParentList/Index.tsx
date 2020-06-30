import React, { useState, useEffect } from 'react';
import ParentList from './ParentList';
import { useDispatch, useSelector } from 'react-redux';
import commonImg from '../../Assets/images';
import { getallparentAPIcall } from '../../Redux/Actions/parentAction';
import { checkValue } from '../../Helper/checkValue';

const Index = () => {
    const dispatch = useDispatch();
    const parents = useSelector((state: any) => state.parentReducer.parentData);
    const [parentList, setParentList] = useState([]);

    useEffect(() => {
        if (parents) {
            const data = parents.map((element: any) => {
                return {
                    profile: element.profile ? element.profile : commonImg.photo,
                    parentId: element.id,
                    first_name: checkValue(element.first_name),
                    last_name: checkValue(element.last_name),
                    name: checkValue(element.first_name) + ' ' + checkValue(element.last_name),
                    email: checkValue(element.User.email),
                    gender: checkValue(element.User.gender),
                    phoneNumber: checkValue(element.User.phoneNumber),
                    action: '',
                };
            });
            setParentList(data);
        }
    }, [parents]);
    useEffect(() => {
        dispatch(getallparentAPIcall());
    }, []);
    return <ParentList parentList={parentList}/>;
};

export default Index;
