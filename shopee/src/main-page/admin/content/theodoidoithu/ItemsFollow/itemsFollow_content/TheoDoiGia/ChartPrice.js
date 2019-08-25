import React, { Component } from 'react';
import Chart from "react-apexcharts";
class ChartPrice extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let categories = [];
		let MyPrice = [];
		let RivalPrice = []
		if (this.props.listHistoryRivalItem.length > 0) {
			let length = this.props.listHistoryRivalItem.length;
			let listHistoryRivalItem;
			if (length <= 8) {
				listHistoryRivalItem = this.props.listHistoryRivalItem;
			}
			else {
				listHistoryRivalItem = this.props.listHistoryRivalItem.filter((c, index) => index >= (length - 8));

			}
			listHistoryRivalItem.map((c, index) => {
				RivalPrice.push(c.price);
				categories.push(c.Date);
			})

		}
		if (this.props.listHistoryMyItem.length > 0) {
			let length = this.props.listHistoryMyItem.length;
			let lengthRival = this.props.listHistoryRivalItem.length;
			let listHistoryMyItem;
			if (length > lengthRival)
				listHistoryMyItem = this.props.listHistoryMyItem.filter((c, index) => index >= (length - lengthRival))
			else listHistoryMyItem = this.props.listHistoryMyItem;
			if (lengthRival <= 8)
				listHistoryMyItem = listHistoryMyItem;
			else {
				listHistoryMyItem = listHistoryMyItem.filter((c, index) => index >= (length - 8))
			}
			listHistoryMyItem.map((c) => {
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
		let series = [
			{
				name: this.props.shopNameSelected,
				data: MyPrice
			},
			{
				name: this.props.rivalName,
				data: RivalPrice
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