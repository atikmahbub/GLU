import React, { useEffect, useState } from 'react';
import ProfileTitle from '../../../components/Dashobard/ProfileTitle';
import TwoColTable from '../../../components/Dashobard/TwoColTable';
import PercentageProgress from '../../../components/Dashobard/PercentageProgress';
import CompNcomp from '../../../components/Dashobard/CompNcomp';
import AssignmentDetails from '../../../components/Dashobard/UserDetails/AssignmentDetails';
import { useDispatch } from 'react-redux';
import { studentTermResultAPIcall } from '../../../Redux/Actions/studentAction';
import { useLocation } from 'react-router';

const Index = () => {
    const [showMoreDetail, setShowMoreDetails] = useState(false);
    const [studentId, setStudentId] = useState(0);
    const [term, setTerm] = useState('1');
    const handleTerm = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTerm(e.target.value);
    };
    const dispatch = useDispatch();
    const routes = useLocation();
    useEffect(() => {
        if (routes.hasOwnProperty('state')) {
            if ((routes as any).state.hasOwnProperty('id')) {
                setStudentId((routes as any).state.id);
            }
        }
    }, []);
    useEffect(() => {
        dispatch(studentTermResultAPIcall(studentId, term));
    }, [term]);
    const data = [
        { col1: 'Mathematics', col2: <PercentageProgress percent="69%" /> },
        { col1: 'Biology', col2: <PercentageProgress percent="34%" /> },
        { col1: 'Physics', col2: <PercentageProgress percent="34%" /> },
        { col1: 'Business Studies', col2: <PercentageProgress percent="55%" /> },
        { col1: 'Mathematics', col2: <PercentageProgress percent="69%" /> },
        { col1: 'Biology', col2: <PercentageProgress percent="34%" /> },
        { col1: 'Physics', col2: <PercentageProgress percent="34%" /> },
        { col1: 'Business Studies', col2: <PercentageProgress percent="55%" /> },
        { col1: 'Mathematics', col2: <PercentageProgress percent="69%" /> },
        { col1: 'Biology', col2: <PercentageProgress percent="34%" /> },
        { col1: 'Physics', col2: <PercentageProgress percent="34%" /> },
        { col1: 'Business Studies', col2: <PercentageProgress percent="55%" /> },
        { col1: 'Mathematics', col2: <PercentageProgress percent="69%" /> },
        { col1: 'Biology', col2: <PercentageProgress percent="34%" /> },
        { col1: 'Physics', col2: <PercentageProgress percent="34%" /> },
        { col1: 'Business Studies', col2: <PercentageProgress percent="55%" /> },
        { col1: 'Mathematics', col2: <PercentageProgress percent="69%" /> },
        { col1: 'Biology', col2: <PercentageProgress percent="34%" /> },
        { col1: 'Physics', col2: <PercentageProgress percent="34%" /> },
        { col1: 'Mathematics', col2: <PercentageProgress percent="69%" /> },
        { col1: 'Biology', col2: <PercentageProgress percent="34%" /> },
        { col1: 'Physics', col2: <PercentageProgress percent="34%" /> },
        { col1: 'Business Studies', col2: <PercentageProgress percent="55%" /> },
    ];
    const moreDetails = [
        { name: 'Accounting', date: '20.06.2020', status: 'Completed', color: '#7fcb4b' },
        { name: 'Human Resources', date: '20.06.2020', status: 'Incompleted', color: '#ffafaf' },
        { name: 'International', date: '20.06.2020', status: 'Completed', color: '#7fcb4b' },
        { name: 'International', date: '20.06.2020', status: 'Incompleted', color: '#ffafaf' },
        { name: 'Human Resources', date: '20.06.2020', status: 'Completed', color: '#7fcb4b' },
        { name: 'Accounting', date: '20.06.2020', status: 'Completed', color: '#7fcb4b' },
        { name: 'International', date: '20.06.2020', status: 'Completed', color: '#7fcb4b' },
        { name: 'Accounting', date: '20.06.2020', status: 'Completed', color: '#7fcb4b' },
        { name: 'Human Resources', date: '20.06.2020', status: 'Incompleted', color: '#ffafaf' },
        { name: 'Accounting', date: '20.06.2020', status: 'Completed', color: '#7fcb4b' },
        { name: 'Human Resources', date: '20.06.2020', status: 'Completed', color: '#7fcb4b' },
        { name: 'Accounting', date: '20.06.2020', status: 'Completed', color: '#7fcb4b' },
        { name: 'Accounting', date: '20.06.2020', status: 'Incompleted', color: '#ffafaf' },
        { name: 'International', date: '20.06.2020', status: 'Completed', color: '#7fcb4b' },
        { name: 'Accounting', date: '20.06.2020', status: 'Completed', color: '#7fcb4b' },
    ];
    const handleRowClick = () => {
        setShowMoreDetails(true);
    };
    return (
        <div className="details-wrapper change_card_pd">
            <ProfileTitle
                hideBtns={true}
                // value={term}
                // onChange={handleTerm}
                // showDropDown={true}
                detailName="Homework"
            />
            <div className="row row__margin">
                <div className={`col-md-${showMoreDetail ? '8' : '12'} colum__spacing`}>
                    <TwoColTable
                        rowClick={handleRowClick}
                        color="#5FB475"
                        data={data}
                        colWidth1="75%"
                        colWidth2="20%"
                        tableName=""
                        colHead1="Subjects"
                        colHead2="Completed"
                        height="unset"
                        linkTo=""
                    >
                        <CompNcomp completed="completed" notCompleted="Incompleted" />
                    </TwoColTable>
                </div>
                {showMoreDetail && (
                    <div className={`col-md-4 colum__spacing`}>
                        <AssignmentDetails data={moreDetails} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Index;
