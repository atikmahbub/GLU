import React, { useEffect, useState } from 'react';
import CircleGraph from '../CircleGraph';
import TwoColTable from '../TwoColTable';
import { useHistory } from 'react-router';

interface props {
    color?: string;
    data?: Array<{ col1: string; col2: string | React.ReactNode }>;
    colHead1?: string;
    colHead2?: string;
    tableName?: string;
    colWidth1?: string;
    colWidth2?: string;
    height?: string;
    children?: React.ReactNode;
    examDetails?:any
}
const SubjectHomeworkRow: React.FunctionComponent<props> = ({
    color,
    data,
    colHead1,
    colHead2,
    tableName,
    colWidth1,
    colWidth2,
    height,
    children,
    examDetails
}) => {
    const route = useHistory();
    const gotoPage = () => {
        route.push('/dashboard/student-details/homework');
    };
    const [examData, setExamData] = useState([0, 0, 0]);
    useEffect(()=>{
        if(examDetails){
            const data = examDetails.map((item:any)=>{
                return item.total;
            })
            setExamData(data);

        }
    },[examDetails])
    return (
        <div className="row row__margin">
            <div className="col-lg-5 d-flex col-md-12 colum__spacing">
                <TwoColTable
                    color={color}
                    colWidth1={colWidth1}
                    colWidth2={colWidth2}
                    height={height}
                    children={children}
                    data={data}
                    tableName={tableName}
                    colHead1={colHead1}
                    colHead2={colHead2}
                />
            </div>
            <div className="col-lg-7 d-flex col-md-12 colum__spacing">
                <CircleGraph
                    goto={gotoPage}
                    marker1="Completed"
                    marker2="Not completed"
                    chartName="Homework"
                    available={50}
                    notavailalbe={30}
                    // data={examData}
                />
            </div>
        </div>
    );
};

export default SubjectHomeworkRow;
