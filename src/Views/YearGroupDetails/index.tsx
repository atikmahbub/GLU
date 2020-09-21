import React, { useState, useEffect } from 'react';
import YearGroupDetails from './YearGroupDetails';
import { useDispatch, useSelector } from 'react-redux';
import { getallclassByIdAPIcall } from '../../Redux/Actions/classAction';
import { useLocation } from 'react-router';
import { checkValue } from '../../Helper/checkValue';

const index: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const classes = useSelector((state: any) => state.classReducer.classList);
    const [id, setId] = useState(-1);
    const [classList, setclassList] = useState([]);
    const findState = useLocation();
    useEffect(() => {
        console.log(findState);
        if (findState?.state) {
            dispatch(getallclassByIdAPIcall((findState as any).state.id));
            setId((findState as any).state.id);
        }
    }, []);

    useEffect(() => {
        if (classes) {
            const data = classes?.ClassSections?.map((item: any) => {
                return {
                    children: item?.SectionStudents.length,
                    formGroup: item?.Section?.sectionName,
                    teacher:
                        checkValue(item?.SectionTeachers[0]?.Teacher?.firstName) +
                        ' ' +
                        checkValue(item?.SectionTeachers[0]?.Teacher?.lastName),
                };
            });
            setclassList(data);
        }
    }, [classes]);
    return (
        <div>
            <YearGroupDetails classList={classList} groupId={id} />
        </div>
    );
};

export default index;
