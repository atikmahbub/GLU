import React from 'react';
import { Typography } from '@material-ui/core';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { colors } from '../../Styles/colors';
import { FiberManualRecord } from '@material-ui/icons';
import SelectField from '../../components/Inputs/SelectField';
import { months } from '../../Helper/months';

const options = {
    chart: {
        type: 'column',
        height: 204,
        scrollablePlotArea: {
            minWidth: 300,
            scrollPositionX: 1,
        },
    },
    title: {
        text: '',
    },
    xAxis: {
        categories: [
            'Year 1',
            'Year 2',
            'Year 3',
            'Year 4',
            'Year 5',
            'Year 6',
            'Year 7',
            'Year 8',
            'Year 9',
            'Year 10',
            'Year 11',
            'Year 12',
        ],
        tickInterval: 0,
        plotLines: [
            {
                color: 'red',
                width: 2,
                value: 100,
            },
        ],
        legend: {
            enabled: false,
        },
    },
    yAxis: {
        categories: [0, 1000],
        tickInterval: 500,
        title: {
            text: null,
        },
    },
    credits: {
        enabled: false,
    },
    tooltip: {
        headerFormat: '',
        backgroundColor: 'transparent',
        shadow: false,
        borderColor: 'none',
        borderWidth: 0,
        useHTML: true,
        formatter: function () {
            var content = '';
            content += `
            <div ><div class="arrow"></div><span class="tooltip-7785">
            <span style="font-weight:900; font-size:1rem;">
            <span style="color:black; margin-left:5px;"> ${this.y} </span></span></span></div>
            `;
            return content;
        },
    },
    series: [
        {
            data: [1000, 600, 200, 500, 800, 900, 1000, 500, 100, 300, 660, 980],
            color: colors.primary,
            lineWidth: 3.5,
            showInLegend: false,
            marker: {
                enabled: false,
                fillColor: '#fff',
                radius: 5,
                opacity: 1,
                lineWidth: 3,
                lineColor: '#707070',
                symbol: 'circle',
            },
        },
        {
            data: [0, 400, 800, 500, 200, 100, 0, 500, 900, 700, 340, 20],
            color: colors.grayPrimary,
            lineWidth: 1,
            showInLegend: false,
            marker: {
                enabled: false,
                fillColor: '#242E42',
                symbol: 'circle',
            },
        },
    ],
    navigation: {
        menuItemStyle: {
            fontSize: '10px',
        },
    },
};

interface props {
    chartName: string;
    marker1: string;
    marker2: string;
    selectType?: string;
}
export const StudentAttendaceChart: React.FunctionComponent<props> = ({ chartName, marker1, marker2, selectType }) => {
    const getSelectType = () => {
        switch (selectType) {
            case 'exam': {
                return (
                    <SelectField
                        className="custom-select-input w-25 ml-auto mb-4"
                        label="Select Term"
                        options={['First Term Exam', 'Second Term Exam', 'Third Term Exam', 'Fourth Term Exam']}
                        getValue={() => {}}
                    />
                );
            }
            default: {
                return (
                    <SelectField
                        label="Select Month"
                        className="custom-select-input w-25 ml-auto mb-4"
                        options={months}
                        getValue={() => {}}
                    />
                );
            }
        }
    };
    return (
        <div className="attendance-card">
            <Typography className="heading">{chartName} Record</Typography>
            <div className="marker-container">
                <div className="present">
                    <FiberManualRecord className="icon" />
                    <Typography className="title">{marker1}</Typography>
                </div>
                <div className="absent">
                    <FiberManualRecord className="icon" />
                    <Typography className="title">{marker2}</Typography>
                </div>
                {getSelectType()}
            </div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default StudentAttendaceChart;
