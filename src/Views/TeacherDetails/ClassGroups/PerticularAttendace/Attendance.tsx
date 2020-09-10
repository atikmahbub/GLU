import React from 'react';
import PrticularAttendance from '../../../../components/Dashobard/PrticularAttendance';
import CardContainer from '../../../../Containers/Cards/CardContainer';

const Attendance: React.FunctionComponent = () => {
    const data = [
        { day: 'Monday', dateNum: '27', date: '27th October', status: 'present', color: '#5EC1A6' },
        { day: 'Tuesday', dateNum: '28', date: '28th October', status: 'Absent', color: '#E28989' },
        { day: 'Wednesday', dateNum: '29', date: ' 29th October', status: 'present', color: '#5EC1A6' },
        { day: 'Thursday', dateNum: '30', date: ' 30th October', status: 'Late', color: '#EDC27D' },
        { day: 'Monday', dateNum: '27', date: '27th October', status: 'present', color: '#5EC1A6' },
        { day: 'Monday', dateNum: '27', date: '27th October', status: 'present', color: '#5EC1A6' },
        { day: 'Monday', dateNum: '27', date: '27th October', status: 'present', color: '#5EC1A6' },
    ];
    return (
        <CardContainer>
            <div className="row row__margin">
                <div className="col-md-12 colum__spacing">
                    {data.map((item: any, i: number) => (
                        <PrticularAttendance
                            key={i}
                            day={item.day}
                            dateNum={item.dateNum}
                            date={item.date}
                            status={item.status}
                            color={item.color}
                        />
                    ))}
                </div>
            </div>
        </CardContainer>
    );
};

export default Attendance;
