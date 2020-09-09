import React from 'react';
import TwoColTable from '../TwoColTable';

const SessionRow: React.FunctionComponent = () => {
    const eca = [
        { col1: 'Basketball', col2: '21/05/2020' },
        { col1: 'Football', col2: '16/02/2020' },
        { col1: 'Drama Club', col2: '20/04/2020' },
        { col1: 'Robotics', col2: '16/02/2020' },
    ];
    const merit = [
        { col1: '21/05/2020', col2: 'Merit' },
        { col1: '16/02/2020', col2: 'Sanction' },
        { col1: '20/04/2020', col2: 'Sanction' },
        { col1: '16/02/2020', col2: 'Merit' },
    ];
    const feedback = [
        { col1: '21/05/2020', col2: 'Mathamatics' },
        { col1: '16/02/2020', col2: 'Physics' },
        { col1: '20/04/2020', col2: 'Chemistry' },
        { col1: '16/02/2020', col2: 'Biology' },
    ];
    return (
        <div className="row row__margin">
            <div className="col-lg-5 col-md-12 colum__spacing">
                <TwoColTable data={eca} tableName="Sessions" colHead1="Title" colHead2="" showLink={true} linkTo="" />
            </div>
            <div className="col-lg-7 col-md-12 colum__spacing">
                <div className="row row__margin">
                    <div className="col-lg-6 col-md-12 pt-0 colum__spacing">
                        <TwoColTable
                            data={merit}
                            tableName="Merits/Sanctions"
                            colHead1="Date"
                            colHead2=""
                            showLink={true}
                            linkTo=""
                        />
                    </div>
                    <div className="col-lg-6 col-md-12 pt-0 colum__spacing">
                        <TwoColTable
                            data={feedback}
                            tableName="Feedback"
                            colHead1="Date"
                            colHead2="Subject"
                            showLink={true}
                            linkTo=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SessionRow;
