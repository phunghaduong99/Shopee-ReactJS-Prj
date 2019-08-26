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
            newPrice: -1,
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
        if (newPrice < 0 || newPrice % 100 !== 0) { this.setState({ textError: "Cần nhập giá tiền dương và chẵn đến trăm đồng " }); }
        else {
            this.setState({ textError: null });
            this.setState({ newPrice: newPrice });
        };

    }
    offSubmit = (event) => {
        event.preventDefault();

    }
    onSubmit = (event) => {
        axios({
            method: 'put',
            url: "http://172.104.173.222:8081/updatePrice/" + this.props.shopid + "/" + this.props.itemid + "/" + this.state.newPrice,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${this.props.token}`
            },
        })
            .then((response) => {
                console.log(response);
                if (response.data !== null && response.data !== "") {
                    this.props.changePriceItem(this.props.itemid, this.state.newPrice);
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
    render() {

        return (

            <tr>
                <td >
                    <div className="row ">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            {this.props.dulieu ? <img className="img-toy m-r-7" src={this.props.images} alt="" /> : <Skeleton width={40} height={40} />}
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            {this.props.dulieu ? <Link onClick={this.onSlectedItem} to={`${this.props.match.url}/itemsDetail`}>{this.props.name} </Link> : <Skeleton count={2} />}

                        </div>
                    </div>
                </td>
                <td className="cot2"> {this.props.dulieu ? this.props.itemid : <Skeleton count={2} />}</td>
                <td className="cot3"> {this.props.dulieu ? this.props.price : <Skeleton count={2} />}</td>
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
                        : <Skeleton count={2}/>}
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
