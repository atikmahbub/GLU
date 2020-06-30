import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { colors } from '../../Styles/colors';

const options = {
    chart: {
        type: 'column',
        height: 300,
        scrollablePlotArea: {
            minWidth: 300,
            scrollPositionX: 1,
        },
    },
    title: {
        text: '',
    },
    xAxis: {
        categories: ['First Term exam', 'Second Term Exam', 'Third Term Exam'],
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
            data: [800, 900, 990],
            color: colors.primary,
            lineWidth: 3.5,
            pointWidth: 20,
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
    ],
    navigation: {
        menuItemStyle: {
            fontSize: '10px',
        },
    },
};

export const ExamReportChart = () => {
    return (
        <div className="exam-container">
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default ExamReportChart;
