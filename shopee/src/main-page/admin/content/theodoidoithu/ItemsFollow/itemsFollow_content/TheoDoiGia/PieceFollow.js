import React, { Component } from 'react';
import imageshop from './../../../2.jpg';
import imagesp from './../../../1.jpg';
import ChartPrice from './ChartPrice';

class PieceFollow extends Component {
    constructor(props){
        super(props);
        this.state = {
            conpetitor:{
                name: 'biboshoptv',
                namePro:'Xe tải đồ chơi hải tặc',
                rating:'4.9',
                follow:'2',
                price:'340000 đ',
                choose: false,
                numberrating:'600',
                adress:'Quận Thanh Xuân, Hà Nội',
                ratingGood:'510',
                ratingBad:'90',
                numberFollow:'2100'
            },
            product:{
                name:'Đồ chơi hải tặc',
                buy:'13',
                rating:'4.7',
                numberrating:'100'
            },
            table:{
                date:'1/8/2019',
                price:'54,000'
            }
        };
    }
    render() { 
        let {conpetitor}=this.state;
        let {product}=this.state;
        let {table}= this.state;
        return ( 
            <div>
                <div className="card ">
                        <div className="card-header">
                            <div className="row doithu">
                                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 ">
                                    <h3>Đối thủ</h3>
                                </div>
                                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                    <select class="form-control">
                                        <option value="1">biboshoptv</option>
                                        <option value="2">Khongcogi</option>
                                        <option value="3">Shopchomeo</option>
                                        <option value="4">Option 4</option>
                                        <option value="5">Option 5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7 dulieu-right">
                                    <h4>Thông tin đối thủ</h4>
                                    <div className="row doithu">
                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                            <img className="mx-auto rounded-circle" src={imageshop} alt="" />
                                        </div>
                                        <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                            <div className="row ">
                                                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                                    <h4> {this.state.conpetitor.name}</h4>
                                                </div>
                                                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                                    <div className=" txt9"> Địa chỉ: {this.state.conpetitor.adress}</div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-12 txt9">Đánh giá cửa hàng : <span className="text-danger">{this.state.conpetitor.rating}</span>/5 (<span className="text-danger">{this.state.conpetitor.numberrating}</span> đánh giá)</div>
                                            </div>
                                            <div className="row ">
                                                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                    <div className="txt9">Đánh giá tốt : <span className="text-danger">{this.state.conpetitor.ratingGood}</span></div>
                                                </div>
                                                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                    <div className="txt9">Đánh giá xấu : <span className="text-danger">{this.state.conpetitor.ratingBad}</span></div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 txt9">Số ngừơi theo dõi : <span className="text-danger">{this.state.conpetitor.numberFollow}</span></div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                    <div className="m-l-5 m-b-10"><h4>Thông tin sản phẩm cạnh tranh</h4></div>
                                    <div className="row doithu">
                                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                            <img className="mx-auto rounded-circle" src={imagesp} alt="" />
                                        </div>
                                        <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                            <div className="row ">
                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                    <h4> {this.state.product.name}</h4>
                                                </div>
                                            </div>
                                            
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 txt9">Đã bán: <span className="text-danger">{this.state.product.buy}</span></div>
                                            </div>
                                            <div className="row">
                                                <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-12 txt9">Đánh giá sản phẩm: <span className="text-danger">{this.state.product.rating}</span>/5 (<span className="text-danger">{this.state.product.numberrating}</span> đánh giá)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card ">
                        <div className="card-header">
                            <h4>Lịch sử theo dõi giá</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                    <h6>Bảng thống kê</h6>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr >
                                                <th scope="col " className="text-center">Ngày</th>
                                                <th className="text-center"> Giá sản phẩm (VNĐ)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center">{this.state.table.date}</td>
                                                <td className="text-center">{this.state.table.price}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">{this.state.table.date}</td>
                                                <td className="text-center">{this.state.table.price}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">{this.state.table.date}</td>
                                                <td className="text-center">{this.state.table.price}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">{this.state.table.date}</td>
                                                <td className="text-center">{this.state.table.price}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">{this.state.table.date}</td>
                                                <td className="text-center">{this.state.table.price}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">{this.state.table.date}</td>
                                                <td className="text-center">{this.state.table.price}</td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">{this.state.table.date}</td>
                                                <td className="text-center">{this.state.table.price}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                
                                <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                    <h6>Biểu đồ</h6>
                                    <ChartPrice/>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
              </div>
         );
    }
}
 
export default PieceFollow;