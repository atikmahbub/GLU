import React, { useState } from 'react';
import ProfileTitle from '../../../components/Dashobard/ProfileTitle';
import TwoColTable from '../../../components/Dashobard/TwoColTable';
import PercentageProgress from '../../../components/Dashobard/PercentageProgress';
import CompNcomp from '../../../components/Dashobard/CompNcomp';
import AssignmentDetails from '../../../components/Dashobard/UserDetails/AssignmentDetails';

const Index = () => {
    const [showMoreDetail, setShowMoreDetails] = useState(false);
    const handleRowClick = () => {
        setShowMoreDetails(true);
    };
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
        { name: 'Accounting', date: '20.06.2020', status: '69%' },
        { name: 'Human Resources', date: '20.06.2020', status: '69%' },
        { name: 'International', date: '20.06.2020', status: '69%' },
        { name: 'International', date: '20.06.2020', status: '69%' },
        { name: 'Human Resources', date: '20.06.2020', status: '69%' },
        { name: 'Accounting', date: '20.06.2020', status: '69%' },
        { name: 'International', date: '20.06.2020', status: '69%' },
        { name: 'Accounting', date: '20.06.2020', status: '69%' },
        { name: 'Human Resources', date: '20.06.2020', status: '69%' },
        { name: 'Accounting', date: '20.06.2020', status: '69%' },
        { name: 'Human Resources', date: '20.06.2020', status: '69%' },
        { name: 'Accounting', date: '20.06.2020', status: '69%' },
        { name: 'Accounting', date: '20.06.2020', status: '69%' },
        { name: 'International', date: '20.06.2020', status: '69%' },
        { name: 'Accounting', date: '20.06.2020', status: '69%' },
    ];
    return (
        <div className="details-wrapper change_card_pd">
            <ProfileTitle hideBtns={true} detailName="Exam Results" />
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
                        colHead2="Average"
                        height="unset"
                        linkTo=""
                    >
                        <CompNcomp completed="completed" notCompleted="Not completed" />
                    </TwoColTable>
                </div>
                {showMoreDetail && (
                    <div className={`col-md-4 colum__spacing`}>
                        <AssignmentDetails showTerm={true} showButton={false} data={moreDetails} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Index;
