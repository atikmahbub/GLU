import React from 'react';
import CircleGraph from '../../components/Dashobard/CircleGraph';
import TwoColTable from '../../components/Dashobard/TwoColTable';

const SubjectHomeworkRow = () => {
    const data = [
        { col1: 'Computer', col2: 'James Arthur' },
        { col1: 'Biology', col2: 'Morgan Freeman' },
        { col1: 'Chemistry', col2: 'Jhonny Depp' },
        { col1: 'Physics', col2: 'Chris Hemsworth' },
    ];
    return (
        <div className="row row__margin">
            <div className="col-lg-5 d-flex col-md-12 colum__spacing">
                <TwoColTable data={data} tableName="Subjects Details" colHead1="Class" colHead2="Teacher" />
            </div>
            <div className="col-lg-7 d-flex col-md-12 colum__spacing">
                <CircleGraph
                    marker1="Completed"
                    marker2="Not completed"
                    chartName="Homework"
                    available={50}
                    notavailalbe={30}
                />
            </div>
        </div>
    );
};

export default SubjectHomeworkRow;
