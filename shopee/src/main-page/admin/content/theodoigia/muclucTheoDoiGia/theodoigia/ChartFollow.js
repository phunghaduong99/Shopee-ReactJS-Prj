
import React from 'react';
import Chart from "react-apexcharts";
class ChartFollow extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    let  options= {
      chart: {
        events: {
          click: function (chart, w, e) {
            console.log(chart, w, e)
          }
        },
      },
      colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8', '#FF9966', '#FF3333'],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true
        }
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['', '', '', '', '', '', '', '', '', ''],
        labels: {
          style: {
            colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8', '#FF9966', '#FF3333'],
            fontSize: '15px'
          }
        }
      }
    }


    let series = [{
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }];
    if (this.props.arrayPriceForChart.length > 0) {
      options= {
        chart: {
          events: {
            click: function (chart, w, e) {
              console.log(chart, w, e)
            }
          },
        },
        colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8', '#FF9966', '#FF3333'],
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true
          }
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: this.props.arrayPriceForChart,
          labels: {
            style: {
              colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8', '#FF9966', '#FF3333'],
              fontSize: '15px'
            }
          }
        }
      }
      if (this.props.percentNumber.length > 0)
        series[0].data = this.props.percentNumber;
    }
    console.log(series)
    return (
      <div id="chart">
        <Chart options={options} series={series} type="bar" height="350" />
      </div>
    );
  }
}

export default ChartFollow;