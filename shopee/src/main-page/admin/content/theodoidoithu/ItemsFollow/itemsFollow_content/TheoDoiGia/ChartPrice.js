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
					categories: ['1/8/2019', '2/8/2019', '3/8/2019', '4/8/2019', '5/8/2019', '6/8/2019', '7/8/2019', '8/8/2019']
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
	componentDidMount() {
		let length = this.props.listHistoryMyItem.length;
		let listHistoryMyItem = this.props.listHistoryMyItem;

		let categories = [];

		listHistoryMyItem.map((c) => {
			categories.push(c.Date);

		})
		console.log('a');
		console.log(this.props.listHistoryMyItem);
		console.log(this.props.listHistoryRivalItem);
	}
	render() {
		let categories = [];
		let MyPrice = [];
		if (this.props.listHistoryRivalItem.length > 0) {
			let length = this.props.listHistoryRivalItem.length;
			let listHistoryRivalItem;
			if (length <= 8)
				listHistoryRivalItem = this.props.listHistoryRivalItem;
			else {
				listHistoryRivalItem = this.props.listHistoryRivalItem.filter((c, index) => index >= (length - 8))
			}

			listHistoryRivalItem.map((c) => {
				categories.push(c.Date);
				MyPrice.push(c.price);
			})

		}
		let options = {
			chart: {
				id: "basic-bar"
			},
			xaxis: {
				categories: categories
			}
		}
		let series= [
			{
				name: "shop-cua-ban",
				data: [50000, 52000, 54000, 51000, 53000, 53000, 54000, 52000]
			},
			{
				name: "biboshoptv",
				data: MyPrice
			}
		]
		return (

			<div className="mixed-chart">
				<Chart
					options={options}
					series={series}
					type="line"
					width="600"
				/>
			</div>
		);
	}
}

export default ChartPrice;