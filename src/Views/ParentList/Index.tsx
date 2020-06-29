import React, { useState, useEffect } from 'react';
import ParentList from './ParentList';
import { useDispatch, useSelector } from 'react-redux';
import commonImg from '../../Assets/images';
import { getallparentAPIcall } from '../../Redux/Actions/parentAction';

const Index = () => {
    const dispatch = useDispatch();
    const parents = useSelector((state: any) => state.studentReducer.studentData);
    const [parentList, setParentList] = useState([]);
   
    useEffect(() => {
        if (parents) {
            const data = parents.map((element: any) => {
                return {
                    profile: element.profile ? element.profile : commonImg.photo,
                    parentId: element.first_name + ' ' + element.last_name,
                    name: element.SchoolClassDetail.Class.name,
                    email: element.SchoolClassDetail.Section.name,
                    action: '',
                };
            });
            setParentList(data);
        }
    }, [parents]);
    useEffect(() => {
        dispatch(getallparentAPIcall());
    }, []);
    return (
        <ParentList/>
    );
}

export default Index;
