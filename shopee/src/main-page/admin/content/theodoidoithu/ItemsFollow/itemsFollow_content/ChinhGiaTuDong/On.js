import React, { Component } from 'react';
import Tooltip from "react-simple-tooltip"

class On extends Component {
    constructor(props) {
        super(props);
        this.state =({
            minprice:'',
            maxprice:'',
            ratingChange: ''
        });
    }
    onChange=(event)=>{
        event.preventDefault();
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
          [name]: value
        });
      
    }
    onSubmit=(event)=>{
        event.preventDefault();
    }
    render() { 
        return ( 
            <form className="form-horizontal" onSubmit={this.onSubmit}>
                <div className="row">
                    <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                        <div className=" row ">
                            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                <label className="col-form-label"><h6>Đối thủ điều chỉnh</h6> </label>
                            </div>
                            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                <select className="form-control m-r-0">
                                    <option value="1">biboshoptv</option>
                                    <option value="2">Khongcogi</option>
                                    <option value="3">Shopchomeo</option>
                                    <option value="4">Option 4</option>
                                    <option value="5">Option 5</option>
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
                                                    onChange={this.onChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
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
                                    placeholder="Nhập %" 
                                    type="text"
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
        );
    }
}
 
export default On;