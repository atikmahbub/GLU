import React, { useState } from 'react';
import HeadingSubHeadingOneBtn from '../../../../components/Dashobard/UserDetails/HeadingSubHeadingOneBtn';
import UserDetailsWrapper from '../../../../Containers/Dashboard/UserDetailsWrapper';
import CardContainer from '../../../../Containers/Cards/CardContainer';
import PercentageProgress from '../../../../components/Dashobard/PercentageProgress';
import TwoColTable from '../../../../components/Dashobard/TwoColTable';
import ProfileFeedbackCard from '../../../../components/Dashobard/ProfileFeedbackCard';
import commonImg from '../../../../Assets/images';

const Index = () => {
    const [showMore, setShowMore] = useState(false);
    const handleDetails = () => {
        setShowMore(true);
    };
    const data = [
        { col1: 'Exam 1 - Algebra Autumn Progress Report - Test 1', col2: <PercentageProgress percent="69%" /> },
        { col1: 'Exam 2 - Algebra Autumn Progress Report', col2: <PercentageProgress percent="34%" /> },
        { col1: 'Exam 3 - Algebra Autumn', col2: <PercentageProgress percent="34%" /> },
        { col1: 'Exam 4 - Report - Test 1', col2: <PercentageProgress percent="55%" /> },
        { col1: 'Exam 5 - Algebra Progress Report - Test 5', col2: <PercentageProgress percent="69%" /> },
        { col1: 'Exam 6 - Autumn', col2: <PercentageProgress percent="34%" /> },
        { col1: 'Exam 7 - Report - Test 1', col2: <PercentageProgress percent="84%" /> },
        { col1: 'Exam 1 - Algebra Autumn Progress Report - Test 1', col2: <PercentageProgress percent="34%" /> },
        { col1: 'Exam 3 - Algebra Autumn', col2: <PercentageProgress percent="68%" /> },
        { col1: 'Exam 4 - Report - Test 1', col2: <PercentageProgress percent="3%" /> },
    ];
    const examData = [
        { image: commonImg.photo, title: 'Jenny Smith', linkName: ' View feedback', linkTo: '', percent: '60%' },
        { image: commonImg.photo, title: 'Shehan Abeysinghe', linkName: ' ', linkTo: '', percent: '45%' },
        {
            image: commonImg.photo,
            title: 'Gemma Abigail Holmes',
            linkName: ' View feedback',
            linkTo: '',
            percent: '30%',
        },
        { image: commonImg.photo, title: 'Jenny Smith', linkName: ' View feedback', linkTo: '', percent: '60%' },
        { image: commonImg.photo, title: 'Shehan Abeysinghe', linkName: ' ', linkTo: '', percent: '45%' },
        {
            image: commonImg.photo,
            title: 'Gemma Abigail Holmes',
            linkName: ' View feedback',
            linkTo: '',
            percent: '30%',
        },
        { image: commonImg.photo, title: 'Jenny Smith', linkName: ' View feedback', linkTo: '', percent: '60%' },
        { image: commonImg.photo, title: 'Shehan Abeysinghe', linkName: ' ', linkTo: '', percent: '45%' },
        {
            image: commonImg.photo,
            title: 'Gemma Abigail Holmes',
            linkName: ' View feedback',
            linkTo: '',
            percent: '30%',
        },
        { image: commonImg.photo, title: 'Jenny Smith', linkName: ' View feedback', linkTo: '', percent: '60%' },
        { image: commonImg.photo, title: 'Shehan Abeysinghe', linkName: ' ', linkTo: '', percent: '45%' },
        {
            image: commonImg.photo,
            title: 'Gemma Abigail Holmes',
            linkName: ' View feedback',
            linkTo: '',
            percent: '30%',
        },
    ];
    return (
        <UserDetailsWrapper>
            <div className="row row__margin">
                <div className="col-md-12 pb-0 colum__spacing">
                    <CardContainer>
                        <HeadingSubHeadingOneBtn
                            title="Homework"
                            subtitle=" Mr.John - Classes - Year 8 B"
                            linkTo=""
                        />
                    </CardContainer>
                </div>
            </div>
            <div className="row row__margin">
                <div className={`col-md-${showMore ? '8' : '12'} colum__spacing`}>
                    <CardContainer>
                        <TwoColTable
                            rowClick={handleDetails}
                            color="#5FB475"
                            data={data}
                            colWidth1="75%"
                            colWidth2="20%"
                            tableName=""
                            colHead1="Exam"
                            colHead2="Completed"
                            height="unset"
                            linkTo=""
                        />
                    </CardContainer>
                </div>
                <div className="col-md-4 colum__spacing">
                    {showMore && (
                        <CardContainer>
                            <ProfileFeedbackCard
                                headingOne="Exam 1 - Algebra Autumn Progress"
                                headingTwo="Report - Test 1"
                                data={examData}
                            />
                        </CardContainer>
                    )}
                </div>
            </div>
        </UserDetailsWrapper>
    );
};

export default Index;
