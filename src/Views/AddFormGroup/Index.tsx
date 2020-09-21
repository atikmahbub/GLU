import React, { useEffect, useState } from 'react';
import InputWithLabel from '../../components/Inputs/InputWithLabel';
import commonImg from '../../Assets/images';
import ProfileTileContainer from '../../components/Dashobard/FormGroup/ProfileTileContainer';
import TwoColGrid from '../../components/Dashobard/TwoColGrid';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSectionByFromAndClassIdAPIcall } from '../../Redux/Actions/classAction';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import SearchProfilePreview from '../../components/Dashobard/SearchProfilePreview';
import { checkValue } from '../../Helper/checkValue';

const Index = () => {
    const [search, setSearch] = useState('');
    const [studentList, setStudentList] = useState([]);
    const [teacherList, setTeacherList] = useState([]);
    const [section, setSection] = useState('');
    const findState = useLocation();
    const dispatch = useDispatch();
    const classes = useSelector((state: rootReducerType) => state.classReducer.sectionList);
    useEffect(() => {
        if (findState?.state) {
            dispatch(
                getAllSectionByFromAndClassIdAPIcall(
                    (findState as any).state.sectionId,
                    (findState as any).state.classId
                )
            );
        }
    }, []);
    useEffect(() => {
        console.log(classes);
        if (classes) {
            const teachers = classes?.SectionTeachers.map((item: any) => {
                return checkValue(item?.Teacher?.firstName) + ' ' + checkValue(item?.Teacher?.lastName);
            });
            setTeacherList(teachers);
            const students = classes?.SectionStudents.map((item: any) => {
                return {
                    name: checkValue(item?.Student?.firstName) + ' ' + checkValue(item?.Student?.lastName),
                    photo: commonImg.photo,
                };
            });
            setSection(checkValue(classes?.Section?.sectionName));
            setStudentList(students);
        }
    }, [classes]);
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    return (
        <TwoColGrid titleOne="New Form Group">
            <InputWithLabel fieldName="Group name" mt="mt-0" value={section} />
            {teacherList.map((item: any, i: number) => {
                if (i === 0) {
                    return <InputWithLabel key={i} fieldName="Tutor" value={item} />;
                } else {
                    return <InputWithLabel key={i} mt="mt-2" value={item} />;
                }
            })}
            <InputWithLabel placeholder="Add another member" mt="mt-2" />

            <SearchProfilePreview palceholder="Add new student" value={search} onChange={handleSearch} />
            <ProfileTileContainer data={studentList} />
        </TwoColGrid>
    );
};

export default Index;
