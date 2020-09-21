import React, { useState, useEffect } from 'react';
import ClassList from './ClassList';
import { useDispatch, useSelector } from 'react-redux';
import { getallclassAPIcall } from '../../Redux/Actions/classAction';
import { isArray } from 'lodash';

const index: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const classes = useSelector((state: any) => state.classReducer.classList);
    const [classList, setclassList] = useState([]);

    useEffect(() => {
        dispatch(getallclassAPIcall());
    }, []);
    useEffect(() => {
        if (isArray(classes)) {
            const data: any = [];
            classes?.forEach((item: any) => {
                if (item?.ClassSections.length > 0) {
                    item?.ClassSections.forEach((subItem: any) => {
                        const result = {
                            id: item?.id,
                            group: item?.title,
                            children: subItem?.SectionStudents.length,
                            formGroup: subItem?.Section?.sectionName,
                            hoy: item?.head ? item?.head : 'N/A',
                        };
                        data.push(result);
                    });
                } else {
                    data.push({
                        id: item?.id,
                        group: item?.title,
                        children: 'N/A',
                        formGroup: 'N/A',
                        hoy: item?.head ? item?.head : 'N/A',
                    });
                }
            });
            console.log(data);
            setclassList(data);
        }
    }, [classes]);
    return (
        <div>
            <ClassList classList={classList} />
        </div>
    );
};

export default index;
