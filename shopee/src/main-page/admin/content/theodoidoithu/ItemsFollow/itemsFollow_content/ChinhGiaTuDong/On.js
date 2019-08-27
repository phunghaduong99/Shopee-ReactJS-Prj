import React, { Component } from 'react';
import Tooltip from "react-simple-tooltip"
import { connect } from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert';
import * as actions from '../../../../../../../redux/actions/index';
class On extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            minprice: ' ',
            maxprice: ' ',
            ratingChange: ' ',
            dataRival: [],
            tableAutoPrice: [],
            index: 0,
            error:null,
        });
    }
    onChange = (event) => {
        event.preventDefault();
        var target = event.target;
        var name = target.name;
        var value = target.value;

        let price = event.target.value;
        if (price < 0 || price % 100 !== 0) 
            { this.setState({ error: "Cần nhập giá tiền dương và chẵn đến trăm đồng " }); }
        else {
            this.setState({ error: null });
        };
        this.setState({
            [name]: value
        });
    }
    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://172.104.173.222:8081/rivals/' + this.props.shopIdSelected + '/' + this.props.followingItemSelected,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${this.props.token}`
            },
        })
            .then((response) => {
                console.log(response);
                if (response.data.length > 0) {
                    let dataRival = response.data;
                    dataRival.map((c, index) => {
                        let rivalItemid = c.rival.rivalItemid;
                        let rivalName = "";
                        this.props.listRivalsShopFollowing.map((c, index) => {
                            if (c.itemid === rivalItemid) rivalName = c.nameRival;
                            return c;
                        })
                        c.rivalName = rivalName;
                        return c;
                    })
                    //Đảo auto
                    let AutoTrue = dataRival.filter((c, index) => c.rival.auto === true);
                    let AutoFalse = dataRival.filter((c, index) => c.rival.auto === false);
                    if (AutoFalse.length !== dataRival.length) {
                        AutoFalse.unshift(AutoTrue[0]);
                        dataRival = AutoFalse;
                    }
                    this.setState({
                        dataRival: dataRival
                    })
                    if (dataRival[0].rival.min !== 0) {
                        this.setState({
                            minprice: dataRival[0].rival.min,
                            maxprice: dataRival[0].rival.max,
                            ratingChange: dataRival[0].rival.price,
                        })
                    }
                    else {
                        this.setState({
                            minprice: '',
                            maxprice: '',
                            ratingChange: '',
                        })
                    }

                }

            })
            .catch((error) => {
                console.log(error);
            });

        axios({
            method: 'get',
            url: 'http://172.104.173.222:8081/autoUpdate/' + this.props.followingItemSelected,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${this.props.token}`
            },
        })
            .then((response) => {
                console.log('response');
                console.log(response);
                let tableAutoPrice = response.data;
                if (tableAutoPrice.length > 0) {
                    tableAutoPrice = tableAutoPrice.map((c) => {
                        let indexDate = c.time.search("_");
                        let Datee = c.time.slice(0, indexDate);
                        let hour = c.time.slice(indexDate + 1, c.time.length)
                        Datee = hour + 'h: ' + Datee;
                        c.Date = Datee;
                        return c;
                    })
                    this.setState({ tableAutoPrice: tableAutoPrice })

                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
    onChangeRival = (e) => {
        let index = e.target.value;

        this.setState({ index: index });

        if (this.state.dataRival[index].rival.min !== 0) {
            this.setState({
                minprice: this.state.dataRival[index].rival.min,
                maxprice: this.state.dataRival[index].rival.max,
                ratingChange: this.state.dataRival[index].rival.price,
            })
        }
        else {
            this.setState({
                minprice: '',
                maxprice: '',
                ratingChange: '',
            })
        }

    }
    offSubmit=(event)=>{
        event.preventDefault();
    }
    onSubmit = (event) => {
        event.preventDefault();
        axios({
            method: 'post',
            url: 'http://172.104.173.222:8081/rival',
            data: {
                "itemid": `${this.props.followingItemSelected}`,
                "shopid": `${this.props.shopIdSelected}`,
                "rivalShopid": `${this.state.dataRival[this.state.index].rival.rivalShopid}`,
                "rivalItemid": `${this.state.dataRival[this.state.index].rival.rivalItemid}`,
                "auto": 'true',
                "price": `${this.state.ratingChange}`,
                "max": `${this.state.maxprice}`,
                "min": `${this.state.minprice}`,
                "error":null

            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${this.props.token}`
            },
        })
            .then((response) => {
                console.log(response);
                swal("Đã theo dõi tự động", "", "success")
                this.props.changeStatusAutoPrice("true", this.props.followingItemSelected)

            })
            .catch((error) => {
                console.log(error);
                swal("Theo dõi tự động thất bại", "", "warning")
            })
    }
    number_format = ( number, decimals, dec_point, thousands_sep ) => {
        var n = number, c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
        var d = dec_point === undefined ? "," : dec_point;
        var t = thousands_sep === undefined ? "." : thousands_sep, s = n < 0 ? "-" : "";
        var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "";
        var j = i.length;
        j = ( j) > 3 ? j % 3 : 0;
        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    }
    render() {
        let optionRivals;
        let tableAutoPrice;


        if (this.state.dataRival.length > 0) {
            optionRivals = this.state.dataRival.map((c, index) => {
                return <option key={index} value={index}>{c.rivalName}</option>
            })
        }
        if (this.state.tableAutoPrice.length > 0) {
            let newTableAuto;
            if (this.state.tableAutoPrice.length >= 8)
                newTableAuto = this.state.tableAutoPrice.filter((c, index) => index <= 7);
            else newTableAuto = this.state.tableAutoPrice;
            tableAutoPrice = newTableAuto.map((c, index) => {
                let chenhgia = c.oldPrice > c.price ? c.oldPrice - c.price : c.price - c.oldPrice;
                return (
                    <tr key={index}>
                        <td> {c.Date} </td>
                        <td> {this.number_format(parseFloat(c.oldPrice), 0, '.', ',') }  </td>
                        <td> {this.number_format(parseFloat(c.price), 0, '.', ',') }  </td>
                        <td>{c.shopRival}</td>
                        <td style={{ color: c.price > c.oldPrice ? "#81e675" : "red" }}>
                            <i className={c.price > c.oldPrice ? "fa fa-arrow-up": "fa fa-arrow-down"}></i>
                            {this.number_format(parseFloat(chenhgia), 0, '.', ',') } 
                        </td>
                    </tr>
                )
            })
        }
        return (
            <div>
                <form className="form-horizontal" onSubmit={( this.state.error===null)?this.onSubmit:this.offSubmit}>
                    <div className="row">
                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                            <div className=" row ">
                                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                    <label className="col-form-label"><h6>Đối thủ điều chỉnh</h6> </label>
                                </div>
                                <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                    <select className="form-control m-r-0" onChange={this.onChangeRival}>
                                        {optionRivals}
                                    </select>
                                </div>
                            </div>
                            <div className=" row ">
                                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                    <label className="col-form-label">
                                        <h6 >Khoảng giá
                                        <Tooltip content="Giới hạn mức giá cao nhất và thấp nhất cho sản phẩm" fontSize="11px"  >
                                                <span className="fa fa-info-circle red text-left m-l-5" ></span>
                                            </Tooltip>
                                        </h6>

                                    </label>
                                </div>
                                <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                    <div className=" row doithu">
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                            <div className=" row ">
                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <label className="col-form-label"> Từ</label>
                                                </div>
                                                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                                    <input
                                                        className="form-control"
                                                        name="minprice"
                                                        placeholder=".....VNĐ"
                                                        type="text"
                                                        onChange={this.onChange}
                                                        value={this.state.minprice}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                            <div className=" row ">
                                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                                    <label className="col-form-label">Đến</label>
                                                </div>
                                                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                                    <input
                                                        className="form-control"
                                                        name="maxprice"
                                                        placeholder=".....VNĐ"
                                                        type="text"
                                                        value={this.state.maxprice}
                                                        onChange={this.onChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <span className="errorMessage txt4">{this.state.error}</span>
                                    </div>
                                </div>
                            </div>
                            <div className=" row ">
                                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                    <label className="col-form-label"><h6>Mức điều chỉnh thấp hơn</h6> </label>
                                </div>
                                <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                    <input
                                        className="form-control"
                                        name="ratingChange"
                                        placeholder="Nhập ...VNĐ"
                                        type="text"
                                        value={this.state.ratingChange}
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 offset-md-9 col-sm-9 ml-auto text-right" >
                        <button type="submit" className="btn btn-primary "> Xác nhận </button>
                    </div>
                </form>
                <div className="card m-t-30 ">
                    <div className="card-body">
                        <div>
                            <h3>Lịch sử chỉnh sửa giá tự động</h3>
                        </div>
                        <table className="table">
                            <thead>
                                <tr >
                                    <th scope="col " >Thời gian</th>
                                    <th > Giá cũ</th>
                                    <th > Giá mới</th>
                                    <th > Đối thủ </th>
                                    <th > Chênh lệch</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableAutoPrice}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        token: state.token,
        listRivalsItem: state.listRivalsItem,
        listRivalsShop: state.listRivalsShop,
        listRivalsShopFollowing: state.listRivalsShopFollowing,
        followingItemSelected: state.followingItemSelected,
        shopIdSelected: state.shopIdSelected,

    }
}
const mapDispatchtoProps = (dispatch, props) => {
    return {
        changeStatusAutoPrice: (status, itemid) => {
            dispatch(actions.changeStatusAutoPrice(status, itemid));
        },
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(On);

