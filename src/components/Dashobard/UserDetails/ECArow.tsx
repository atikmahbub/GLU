import React from 'react';
import TwoColTable from '../TwoColTable';

const ECArow: React.FunctionComponent = () => {
    const eca = [
        { col1: 'Basketball', col2: 'James Arthur' },
        { col1: 'Football', col2: 'Morgan Freeman' },
        { col1: 'Drama Club', col2: 'Jhonny Depp' },
        { col1: 'Robotics', col2: 'Chris Hemsworth' },
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
                <TwoColTable
                    color="#5FB475"
                    data={eca}
                    tableName="Extra Curricular Activities"
                    colHead1="Activity"
                    colHead2="Teacher"
                />
            </div>
            <div className="col-lg-7 col-md-12 colum__spacing">
                <div className="row row__margin">
                    <div className="col-lg-6 col-md-12 pt-0 colum__spacing">
                        <TwoColTable
                            data={merit}
                            tableName="Merits/Sanctions"
                            colHead1="Date"
                            colHead2=""
                        />
                    </div>
                    <div className="col-lg-6 col-md-12 pt-0 colum__spacing">
                        <TwoColTable
                            data={feedback}
                            tableName="Feedback"
                            colHead1="Date"
                            colHead2="Subject"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ECArow;
