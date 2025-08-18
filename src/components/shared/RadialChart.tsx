import { useMemo } from 'react'
import type { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

interface RadialChartProps {
  series: number[]
  labels: string[]
  colors?: string[]
  onItemClick?: (index: number, label: string) => void
}

const RadialChart = ({ series, labels, colors = ['#00FF7F', '#05A7A6'], onItemClick }: RadialChartProps) => {
  const options: ApexOptions = useMemo(
    () => ({
      chart: {
        height: 500,
        type: 'polarArea' as const,
        events: {
          dataPointSelection: function (_event, _chartContext, config) {
            if (onItemClick) {
              const index = config.dataPointIndex
              const label = labels[index]
              onItemClick(index, label)
            }
          },
        },
      },

      legend: {
        fontSize: '16px',
        position: 'right',
        horizontalAlign: 'center',
        labels: {
          useSeriesColors: true,
        },
        formatter(legendName, opts) {
          return legendName + ':  ' + opts.w.globals.series[opts.seriesIndex] + '%'
        },
        markers: {
          offsetX: -10,
        },
      },

      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 1,
            strokeColor: '#e8e8e889',
          },
          spokes: {
            strokeWidth: 1,
            connectorColors: '#e8e8e889',
          },
        },
      },
      yaxis: {
        show: false,
      },
      colors: colors,
      labels: labels,
      responsive: [
        {
          breakpoint: 480,
          chart: {
            width: 300,
            height: '100%',
          },
          options: {
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    }),
    [colors, labels]
  )

  return (
    <div className='md:w-[500px] md:h-[350px] w-[300px] h-[450px]'>
      <ReactApexChart options={options} series={series} type='polarArea' height={'100%'} />
    </div>
  )
}

export default RadialChart
