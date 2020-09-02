import React, { FC, memo, useState } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
import Grid from '@material-ui/core/Grid';
import { colors } from '../../../Styles/colors';

const initOptions = ({ chartWidth, chartHeight }: any) => {
    return {
        chart: {
            backgroundColor: 'transparent',
            type: 'bar',
            width: chartWidth,
            height: chartHeight
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        xAxis: {
            title: {
                text: '',
            },
            labels: {
                enabled: false,
            },
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
                pointWidth: 20
            }
        },
        legend: {
            enabled: false
        },
        series: [
            {
                data: [85],
                color: colors.primary
            },
            {
                data: [64],
                color: colors.lightPrimary
            }
        ]
    }
}

type BarChartProps = {
    chartWidth?: number;
    chartHeight?: number;
}

const BarChart: FC<BarChartProps> = ({ chartWidth, chartHeight }) => {
    const [options] = useState(initOptions({ chartWidth, chartHeight }))
    return (
        <Grid container>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </Grid>
    )
}

export default memo(BarChart)
