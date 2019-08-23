import React, { Component } from 'react';
import './items.css';
import StarRatings from 'react-star-ratings';
import { Link } from "react-router-dom";

import Popup from "reactjs-popup";
import axios from 'axios';
import { connect } from 'react-redux';

import * as actions from '../../../../../redux/actions/index';
class TabItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            newPrice: -1,
            shop_id: ''
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
        this.setState({ newPrice: newPrice });
    }
    onSubmit = (event) => {
        event.preventDefault();

        let url = "http://localhost:8081/updatePrice/" + this.props.shopid + "/" + this.props.itemid + "/" + this.state.newPrice;
        console.log(url);
        axios({
            method: 'put',
            url: url,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${this.props.token}`
            },
        })
            .then((response) => {
                console.log(response);
                this.props.changePriceItem(this.props.itemid, this.state.newPrice);
            })
            .catch((error) => {
                console.log(error);
                alert("Chỉnh sửa giá thất bại.");
            });
        this.closeModal();
    }

    onSlectedItem = () =>{
        this.props.saveItemIdSelected(this.props.itemid);
    }
    render() {

        return (
            <tr>
                <td >
                    <div className="row">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <img className="img-toy m-r-7" src={this.props.images} alt="" />
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <Link onClick = {this.onSlectedItem} to={`${this.props.match.url}/itemsDetail`}>{this.props.name} </Link>
                        </div>
                    </div>
                </td>
                <td> {this.props.itemid}</td>
                <td> {this.props.price}</td>
                <td>
                    <StarRatings
                        starRatedColor="#FFD203"
                        rating={4}
                        starDimension="20px"
                        starSpacing="2px"
                    />
                    <button className="button" className="btn btn-primary m-l-35" onClick={this.openModal} >Sửa giá</button>

                    <Popup
                        open={this.state.open}
                        closeOnDocumentClick
                        onClose={this.closeModal}
                    >
                        <div className="card changePiece">
                            <form onSubmit={this.onSubmit}>
                                <div className="card-header"><h6>{this.props.name}</h6></div>
                                <div className="card-body">
                                    <div className="row ">
                                        <div className="col-md-8">
                                            <label className="form-control-group"><h6>Giá bán hiện tại (VNĐ)</h6></label>
                                        </div>
                                        <div className="col-md-4 aline">
                                            <label className="form-control-group "><h6>{this.props.price}</h6></label>
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-md-6">
                                            <label className="form-control-group"><h6>Giá mới</h6></label>
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                className="form-control"
                                                name="newPiece"
                                                placeholder="Nhập giá mới"
                                                type="text "
                                                onChange={this.onChange}
                                                required
                                            />
                                        </div>

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
