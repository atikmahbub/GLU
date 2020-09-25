import React, { useEffect, useState } from 'react';
import TeacherList from '../../TeacherList';
import { useDispatch, useSelector } from 'react-redux';
import { getallSchoolAPIcall } from '../../../Redux/Actions/superAdminActions';
import { checkValue } from '../../../Helper/checkValue';
import commonImg from '../../../Assets/images';
import SchoolList from './VideoList';

const Index = () => {
    const dispatch = useDispatch();
    const school = useSelector((state: any) => state.superAdminReducer.schoolList);
    const [schoolList, setSchoolList] = useState([]);

    useEffect(() => {
        dispatch(getallSchoolAPIcall());
    }, []);
    useEffect(() => {
        console.log("====== THe School Info ======= school", school)

        if (school) {
            const data = school.map((element: any) => {
                return {
                    schoolName: element.schoolName,
                    website: element.website,
                    phoneNumber: element.phoneNumber,
                    id: element.id,
                    userId: element.userId,
                    createdAt: element.createdAt,
                };
            });
            console.log("====== THe School Info =======", data)

            setSchoolList(data);
        }
    }, [school]);

    // return <TeacherList teacherList={teacherList} />;
    return <SchoolList schoolList={schoolList}/>
};

export default Index;
