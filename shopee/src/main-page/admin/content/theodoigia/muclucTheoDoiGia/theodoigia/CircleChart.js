import React from 'react';
import Chart from "react-apexcharts";
class CircleChart extends React.Component {
  
  render() {
    
    let options = {
      colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8', '#FF9966', '#FF3333'],
      labels: ['    ', '    ', '    ', '    ', '    ', '    ', '    ', '    ', '    ', '    '],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    
    }
    let series = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    if (this.props.arrayPrice.length > 0) {
      options = {
        colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8', '#FF9966', '#FF3333'],
        labels: this.props.arrayPrice,
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      };
      if (this.props.percentNumber.length > 0)
        series = this.props.percentNumber;
    }


    return (
      <div id="chart">
        <Chart options={options} series={series} type="pie" height="350" />
      </div>
    );
  }
}

export default CircleChart;