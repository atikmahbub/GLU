import React, { FC, memo, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Grid from '@material-ui/core/Grid';
import { ChartDataElement } from '../types';

const initOptions = ({ chartWidth, chartHeight, column, data, xAxisLabels, xAxisCategories }: IBarChart) => {
    return {
        chart: {
            backgroundColor: 'transparent',
            type: column ? 'column' : 'bar',
            width: chartWidth,
            height: chartHeight,
        },
        title: {
            text: '',
        },
        credits: {
            enabled: false,
        },
        xAxis: {
            title: {
                text: '',
            },
            labels: {
                enabled: xAxisLabels,
                style: {
                    color: '#000 !important'
                },
            },
            categories: xAxisCategories
        },
        yAxis: {
            title: {
                text: '',
            },
            labels: {
                enabled: false,
            },
        },
        plotOptions: {
            series: {
                pointWidth: 20,
                pointPadding: 1
            },
        },
        legend: {
            enabled: false,
        },
        series: data,
    };
};

export interface IBarChart {
    chartWidth?: number;
    chartHeight?: number;
    column?: boolean;
    data: ChartDataElement[];
    xAxisLabels?: boolean;
    xAxisCategories?: number[] | string[];
}

const BarChart: FC<IBarChart> = ({ chartWidth, chartHeight, column, data, xAxisLabels, xAxisCategories }) => {
    const [options] = useState(initOptions({ chartWidth, chartHeight, column, data, xAxisLabels, xAxisCategories }));
    return (
        <Grid container>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </Grid>
    );
};

export default memo(BarChart);
