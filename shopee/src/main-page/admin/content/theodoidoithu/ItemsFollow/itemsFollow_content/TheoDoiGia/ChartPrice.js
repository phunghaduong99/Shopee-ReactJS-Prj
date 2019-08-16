import React, { Component } from 'react';
import Chart from "react-apexcharts";
class ChartPrice extends Component {	
	constructor(props) {
		super(props);
		this.state = {
			options: {
			  chart: {
				id: "basic-bar"
			  },
			  xaxis: {
				categories: ['1/8/2019', '2/8/2019','3/8/2019', '4/8/2019', '5/8/2019', '6/8/2019', '7/8/2019', '8/8/2019']
			  }
			},
			series: [
			  {
				name: "shop-cua-ban",
				data: [50000, 52000, 54000, 51000, 53000, 53000, 54000, 52000]
			  },
			  {
				name: "biboshoptv",
				data: [55000, 52000, 51000, 53000, 53000, 55000, 50000, 55000]
			  }
			]
		  };
		}
	render() {
		
		return (
		
			<div className="mixed-chart">
			<Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
			  width="600"
            />
		  </div>
		);
	}
}
 
export default ChartPrice;