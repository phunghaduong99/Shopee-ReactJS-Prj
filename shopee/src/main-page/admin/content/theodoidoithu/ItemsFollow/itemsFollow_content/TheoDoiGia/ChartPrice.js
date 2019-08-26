import React, { Component } from 'react';
import Chart from "react-apexcharts";
class ChartPrice extends Component {

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
				return c;
			})

		}
		if (this.props.listHistoryMyItem.length > 0) {
			let length = this.props.listHistoryMyItem.length;
			let lengthRival = this.props.listHistoryRivalItem.length;
			let listHistoryMyItem;
			let listHistoryMyItemFinal;
			if (length > lengthRival && lengthRival <= 8)
				listHistoryMyItem = this.props.listHistoryMyItem.filter((c, index) => index >= (length - lengthRival))
			else listHistoryMyItem = this.props.listHistoryMyItem;
			if (lengthRival <= 8)
				listHistoryMyItemFinal = listHistoryMyItem;
			else {
				listHistoryMyItemFinal = listHistoryMyItem.filter((c, index) => index >= (length - 8))
			}
			listHistoryMyItemFinal.map((c) => {
				MyPrice.push(c.price);
				return c;
			})

		}
		console.log(MyPrice);
		console.log(RivalPrice);
		console.log(categories);


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