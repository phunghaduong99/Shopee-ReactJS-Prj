import React, { Component } from 'react';
import './items.css';
import StarRatings from 'react-star-ratings';
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import axios from 'axios';
import { connect } from 'react-redux';
import swal from 'sweetalert'
import * as actions from '../../../../../redux/actions/index';

import Skeleton from 'react-loading-skeleton';
class TabItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            newPrice: "",
            shop_id: '',
            textError: null
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ open: true });
    }
    closeModal() {
        this.setState({ open: false });
    }
    onChange = (event) => {
        event.preventDefault();
        let newPrice = event.target.value;
        newPrice = this.chuyengia(newPrice);

        if (newPrice < 0 || newPrice % 100 !== 0) {
             this.setState({ textError: "Cần nhập giá tiền dương và chẵn đến trăm đồng " }); }
        else {
        this.setState({ textError: null });
        };
        newPrice = this.number_format(parseFloat(newPrice), 0, '.', ',');
        this.setState({ newPrice: newPrice });

    }
    offSubmit = (event) => {
        event.preventDefault();

    }
    onSubmit = (event) => {
        axios({
            method: 'put',
            url: "http://172.104.173.222:8081/updatePrice/" + this.props.shopid + "/" + this.props.itemid + "/" + this.chuyengia(this.state.newPrice) ,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${this.props.token}`
            },
        })
            .then((response) => {
                console.log(response);
                if (response.data !== null && response.data !== "") {
                    this.props.changePriceItem(this.props.itemid, this.chuyengia(this.state.newPrice));
                }
                else swal("Chỉnh sửa giá thất bại. Xin vui lòng thử lại.", "", "error")

            })
            .catch((error) => {
                console.log(error);

            });
        this.closeModal();
    }

    onSlectedItem = () => {
        this.props.saveItemIdSelected(this.props.itemid);
    }
    number_format = (number, decimals, dec_point, thousands_sep) => {
        var n = number, c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
        var d = dec_point === undefined ? "," : dec_point;
        var t = thousands_sep === undefined ? "." : thousands_sep, s = n < 0 ? "-" : "";
        var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "";
        var j = i.length;
        j = (j) > 3 ? j % 3 : 0;
        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    }

    chuyengia = (a) => {
        var gia = a.split(',');
        for (var i = 1; i < a.length; i++) {
            gia[0] = gia[0] + gia[i];
        }
        gia[0] = parseFloat(gia[0]);
        return gia[0];

    }



    render() {
        let price = this.number_format(parseFloat(this.props.price), 0, '.', ',');

        return (
            <tr>
                <td >
                    <div className="row ">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            {this.props.dulieu ? <img className="img-toy m-r-7" src={this.props.images} alt="" /> : <Skeleton width={40} height={40} />}
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            {this.props.dulieu ? <Link onClick={this.onSlectedItem} to={`${this.props.match.url}/itemsDetail/${this.props.itemid}`}>{this.props.name} </Link> : <Skeleton count={2} />}

                        </div>
                    </div>
                </td>
                <td className="cot2"> {this.props.dulieu ? this.props.itemid : <Skeleton count={2} />}</td>
                <td className="cot3"> {this.props.dulieu ? price : <Skeleton count={2} />}</td>
                {this.props.dulieu ?
                    <td className="cot4">
                        <StarRatings
                            starRatedColor="#FFD203"
                            rating={this.props.rating_star}
                            starDimension="20px"
                            starSpacing="2px"
                        />
                    </td>
                    : ""}

                <td className="cot5">
                    {this.props.dulieu ?
                        <div>
                            <button className="btn btn-primary " onClick={this.openModal} > Sửa giá</button>
                            <Popup
                                open={this.state.open}
                                closeOnDocumentClick
                                onClose={this.closeModal}
                            >
                                <div className="card changePiece">
                                    <form onSubmit={(this.state.textError === null) ? this.onSubmit : this.offSubmit}>
                                        <div className="card-header "><h6 >{this.props.name}</h6></div>
                                        <div className="card-body">
                                            <div className="row ">
                                                <div className="col-md-8">
                                                    <label className="form-control-group text-left"><h6>Giá bán hiện tại</h6></label>
                                                </div>
                                                <div className="col-md-4 aline">
                                                    <label className="form-control-group "><h6>{this.number_format(parseFloat(this.props.price), 0, '.', ',')} đ</h6></label>
                                                </div>
                                            </div>
                                            <div className="row ">
                                                <div className="col-md-6">
                                                    <label className="form-control-group text-left"><h6>Giá mới</h6></label>
                                                </div>
                                                <div className="col-md-6">
                                                    <input
                                                        className="form-control"
                                                        name="newPiece"
                                                        placeholder="Nhập giá mới"
                                                        type="text "
                                                        onChange={this.onChange}
                                                        value={this.state.newPrice}
                                                        required
                                                    />
                                                </div>
                                                <span className="errorMessage txt4">{(this.state.newPrice !== null) ? this.state.textError : null}</span>
                                            </div>
                                            <div className="col-md-6 offset-md-9 col-sm-6 ml-auto m-t-20 aline">
                                                <button onClick={this.closeModal}>
                                                    HỦY
                                        </button> &nbsp;
                                        <button type="submit" className="text-primary m-l-25 ">
                                                    XÁC NHẬN
                                        </button>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </Popup>
                        </div>
                        : <Skeleton count={2} />}
                </td>

            </tr>


        );
    }
}
const mapStatetoProps = (state) => {
    return {
        token: state.token,

    }
}

const mapDispatchtoProps = (dispatch, props) => {
    return {
        changePriceItem: (itemId, price) => {
            dispatch(actions.changePriceItem(itemId, price));
        },
        saveItemIdSelected: (shopItemIdSelected) => {
            dispatch(actions.saveItemIdSelected(shopItemIdSelected));
        }


    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(TabItems);
