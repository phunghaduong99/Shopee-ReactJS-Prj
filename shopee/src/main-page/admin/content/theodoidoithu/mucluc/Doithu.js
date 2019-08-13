import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import { Link } from "react-router-dom";
import ListDoithu from './ListDoithu';

class Doithu extends Component {
    constructor(props){
        super(props);
        this.state = {
            conpetitor:{
                name: 'Amnhac1001',
                namePro:'Xe tải đồ chơi hải tặc',
                rating:'4.9',
                follow:'2',
                price:'340000 đ',
                choose: false,
                buy:'13'
            },
        };
    }
    onChoose=(e)=>{
        e.preventDefault();
        this.setState( {
            choose:true
        });
    }
    render() {
        var {conpetitor}=this.state;
        
        return (
            <div>
                
                <div className="row ">
                    
                    <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                        <div className="card ">
                            <div className="card-header"><h4>Lựa chọn đối thủ</h4></div>
                            <div className="card-body">
                                <label className="txt7">Dưới đây là danh sách các đối thủ cạnh tranh mà hệ thống tự động tìm kiếm cho bạn. Hãy lựa chọn đối thủ để theo dõi. Tối đa 5 đối thủ.</label>
                                <table className="table table-condensed">
                                    <thead>
                                    <tr >
                                            <th className="cot6">Đối thủ</th>
                                            <th className="cot7 ">Đánh giá <span className="fa fa-info-circle red" ></span></th>
                                            <th className="cot8 " >Theo dõi <span className="fa fa-info-circle red"></span></th>
                                            <th className="cot9" >Sản phẩm</th>
                                            <th className="cot10">Giá bán</th>
                                            <th className="cot11" ></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <ListDoithu conpetitor={conpetitor} />
                                        <ListDoithu conpetitor={conpetitor} />
                                        <ListDoithu conpetitor={conpetitor} />
                                        <ListDoithu conpetitor={conpetitor} />
                                        <ListDoithu conpetitor={conpetitor} />
                                        <ListDoithu conpetitor={conpetitor} />
                                        <ListDoithu conpetitor={conpetitor} />
                                        <ListDoithu conpetitor={conpetitor} />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div className="card ">
                                <div className="card-header"><h4>Đối thủ đã chọn</h4></div>
                                <div className="card-body">
                                    <label className="txt7">5 đối thủ</label>
                                    <table className="table">
                                        <thead>
                                        <tr >
                                        </tr>
                                        </thead>
                                        <tbody>
                                            <td>Amnhac1001</td>
                                            <td className="text-right"><button className="button" className="btn btn-danger ">Xóa</button></td>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                    </div>
                    
               </div>
            </div>
        );
    }
}

export default Doithu ;