import React from 'react';
import TwoColTable from '../../components/Dashobard/TwoColTable';
import ExamReportChart from './ExamReportChart';
import { Typography } from '@material-ui/core';

const FeeExamResultRow = () => {
    const data = [
        { col1: 'Computer', col2: 'James Arthur' },
        { col1: 'Biology', col2: 'Morgan Freeman' },
        { col1: 'Chemistry', col2: 'Jhonny Depp' },
        { col1: 'Physics', col2: 'Chris Hemsworth' },
    ];
    return (
        <div className="row row__margin">
        <div className="col-lg-5 d-flex col-md-12 colum__spacing">
            <TwoColTable color="#5FB475" data={data} />
        </div>
        <div className="col-lg-7 d-flex col-md-12 colum__spacing">
            <div className="bg-white exm-pdng">
            <div className="row">
                <div className="col-md-9 bdr_right">
                <Typography className="exam_heading">Exam Results</Typography>
                <ExamReportChart/>

                </div>
                <div className="col-md-3 d-flex align-content-center justify-content-center">
                    <div className="align-self-center">
                    <Typography className="percent">68%</Typography>
                    <Typography className="title">Year Average</Typography>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    );
}

export default FeeExamResultRow;
