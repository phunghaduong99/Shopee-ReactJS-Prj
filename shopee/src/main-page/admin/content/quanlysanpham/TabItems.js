import React, { Component } from 'react';
import './items.css';
import StarRatings from 'react-star-ratings';
import { Link } from "react-router-dom";
import imageToy from './1.jpg';
import Popup from "reactjs-popup";



class TabItems extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false 
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
    render() {
        
        return (
                <tr>
                    <td >
                        <img className="img-toy m-r-7" src={imageToy} alt="" />
                        <Link to={`${this.props.match.url}/quanlysanpham/itemsDetail`}>{this.props.items.name} </Link>
                    </td>
                    <td> {this.props.items.id}</td>
                    <td> {this.props.items.price}</td>
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
                                    <div className="card-header"><h6>Chỉnh sửa giá sản phẩm "Xe tải đồ chơi"</h6></div>
                                    <div className="card-body">
                                        <div className="row ">
                                            <div className="col-md-8">
                                                <label className="form-control-group"><h6>Giá bán hiện tại (VNĐ)</h6></label>
                                            </div>
                                            <div className="col-md-4 aline">
                                                <label className="form-control-group "><h7>70,000</h7></label>
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
                                    </div>
                        </Popup>
                   
                    </td>
                   
                </tr>
                
                
        );
    }
}

export default TabItems ;